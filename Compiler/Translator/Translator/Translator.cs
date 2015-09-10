using Bridge.Contract;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Mono.Cecil;
using Object.Net.Utilities;

namespace Bridge.Translator
{
    public partial class Translator : ITranslator
    {
        public const string Bridge_ASSEMBLY = "Bridge";
        public const string BridgeResourcesList = "Bridge.Resources.list";
        private static readonly Encoding OutputEncoding = System.Text.UTF8Encoding.UTF8;
        private static readonly CodeSettings MinifierCodeSettings = new CodeSettings { TermSemicolons = true, StrictMode = true };

        public Translator(string location, bool fromTask = false)
        {
            this.Location = location;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
            this.FromTask = fromTask;
        }

        public Translator(string folder, string source, bool recursive, string lib)
        {
            this.Recursive = recursive;
            this.Source = source;
            this.FolderMode = true;
            this.Location = folder;
            this.AssemblyLocation = lib;
            this.Validator = this.CreateValidator();
            this.DefineConstants = new List<string>() { "BRIDGE" };
        }

        public Dictionary<string, string> Translate()
        {
            var config = this.ReadConfig();

            if (!string.IsNullOrWhiteSpace(config.Configuration))
            {
                this.Configuration = config.Configuration;
            }

            if (config.DefineConstants != null && config.DefineConstants.Count > 0)
            {
                this.DefineConstants.AddRange(config.DefineConstants);
                this.DefineConstants = this.DefineConstants.Distinct().ToList();
            }

            this.Plugins = Bridge.Translator.Plugins.GetPlugins(this, config);
            this.Plugins.OnConfigRead(config);

            if (config != null && !string.IsNullOrWhiteSpace(config.BeforeBuild))
            {
                try
                {
                    this.RunEvent(config.BeforeBuild);
                }
                catch (Exception exc)
                {
                    throw new Bridge.Translator.Exception("Error: Unable to run beforeBuild event command: " +
                        exc.Message + "\nStack trace:\n" + exc.StackTrace);
                }
            }

            if (this.FolderMode)
            {
                this.ReadFolderFiles();
            }
            else
            {
                this.ReadProjectFile();

                if (this.Rebuild || !File.Exists(this.AssemblyLocation))
                {
                    this.BuildAssembly();
                }
            }

            var references = this.InspectReferences();

            this.BuildSyntaxTree();
            var resolver = new MemberResolver(this.ParsedSourceFiles, Emitter.ToAssemblyReferences(references));

            this.InspectTypes(resolver, config);

            resolver.CanFreeze = true;
            var emitter = this.CreateEmitter(resolver);
            emitter.Translator = this;
            emitter.AssemblyInfo = this.AssemblyInfo;
            emitter.References = references;
            emitter.SourceFiles = this.SourceFiles;
            emitter.Log = this.Log;
            emitter.Plugins = this.Plugins;
            this.References = references;
            this.Plugins.BeforeEmit(emitter, this);
            this.Outputs = emitter.Emit();
            this.Plugins.AfterEmit(emitter, this);

            return this.Outputs;
        }

        public virtual string GetCode()
        {
            StringBuilder builder = new StringBuilder();

            foreach (var item in this.Outputs)
            {
                string code = item.Value;
                builder.AppendLine(code);
            }

            return builder.ToString();
        }

        public virtual void SaveTo(string path, string defaultFileName)
        {
            var minifier = new Minifier();
            var files = new Dictionary<string, string>();
            foreach (var item in this.Outputs)
            {
                string fileName = item.Key;
                string code = item.Value;

                if (fileName.Contains(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME))
                {
                    fileName = fileName.Replace(Bridge.Translator.AssemblyInfo.DEFAULT_FILENAME, defaultFileName);
                }

                // Ensure filename contains no ":". It could be used like "c:/absolute/path"
                fileName = fileName.Replace(":", "_");

                // Trim heading slash/backslash off file names until it does not start with slash.
                var oldFNlen = fileName.Length;
                while (Path.IsPathRooted(fileName))
                {
                    fileName = fileName.TrimStart(Path.DirectorySeparatorChar, '/', '\\');

                    // Trimming didn't change the path. This way, it will just loop indefinitely.
                    // Also, this means the absolute path specifies a fully-qualified DOS PathName with drive letter.
                    if (fileName.Length == oldFNlen)
                    {
                        break;
                    }
                    oldFNlen = fileName.Length;
                }

                // If 'fileName' is an absolute path, Path.Combine will ignore the 'path' prefix.
                string extension = Path.GetExtension(fileName);
                bool isJs = extension == ('.' + Bridge.Translator.AssemblyInfo.JAVASCRIPT_EXTENSION);

                // We can only have Beautified, Minified or Both, so this test has inverted logic:
                // output beautified if not minified only == (output beautified or output both)
                // Check by @vladsch: Output anyway if the class is not a JavaScript file.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified || !isJs)
                {
                    string header = GetOutputHeader(isJs, isJs);
                    var file = WriteOutput(path, fileName, header, code);
                    files.Add(fileName, file.FullName);
                }

                // Like above test: output minified if not beautified only == (out minified or out both)
                // Check by @vladsch: Output minified is allowed only and only if it is a JavaScript being output.
                if (this.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted && isJs)
                {
                    fileName = Path.GetFileNameWithoutExtension(fileName) + ".min" + extension;

                    // Minifier will add "use strict" as option StrictMode = true is used
                    string header = GetOutputHeader(false, false);
                    WriteOutput(path, fileName, header, minifier.MinifyJavaScript(code, MinifierCodeSettings));
                }
            }

            if (this.AssemblyInfo.InjectScriptToAssembly)
            {
                this.InjectResources(files);
            }

            if (!string.IsNullOrWhiteSpace(this.AssemblyInfo.AfterBuild))
            {
                try
                {
                    this.RunEvent(this.AssemblyInfo.AfterBuild);
                }
                catch (Exception exc)
                {
                    throw new Bridge.Translator.Exception("Error: Unable to run afterBuild event command: " +
                        exc.Message + "\nStack trace:\n" + exc.StackTrace);
                }
            }
        }

        protected virtual void InjectResources(Dictionary<string, string> files)
        {
            if (files == null || files.Count == 0)
            {
                return;
            }

            var assemblyDef = this.AssemblyDefinition;
            var resources = assemblyDef.MainModule.Resources;
            var resourcesList = new List<string>();

            foreach (var file in files)
            {
                var name = file.Key;
                name = this.NormalizePath(name);
                var newResource = new EmbeddedResource(name, ManifestResourceAttributes.Public, File.ReadAllBytes(file.Value));
                resources.Add(newResource);
                resourcesList.Add(file.Key + ":" + name);
            }

            StringBuilder sb = new StringBuilder();
            foreach (var res in resourcesList)
            {
                sb.Append(res).Append("+");
            }
            sb.Remove(sb.Length - 1, 1);

            var listResources = new EmbeddedResource(Translator.BridgeResourcesList, ManifestResourceAttributes.Public, System.Text.Encoding.UTF8.GetBytes(sb.ToString()));
            resources.Add(listResources);

            assemblyDef.Write(this.AssemblyLocation);
        }

        private string NormalizePath(string value)
        {
            value = value.Replace(@"\", ".");
            string path = value.LeftOfRightmostOf('.').LeftOfRightmostOf('.');
            string name = value.Substring(path.Length);
            return path.Replace('-', '_') + name;
        }

        private static string GetOutputHeader(bool needGlobalComment, bool needStrictModeInstruction)
        {
            string header = needGlobalComment ? "/* global Bridge */\n\n" : string.Empty;
            header = header + (needStrictModeInstruction ? "\"use strict\";\n" : string.Empty);

            return header;
        }

        private static FileInfo WriteOutput(string outputPath, string fileName, string header, string code)
        {
            var file = CreateFile(outputPath, fileName);

            // No need to perform redundant concatenation if header is empty
            if (!string.IsNullOrWhiteSpace(header))
            {
                code = header + code;
            }

            File.WriteAllText(file.FullName, code, OutputEncoding);

            return file;
        }

        protected virtual Emitter CreateEmitter(IMemberResolver resolver)
        {
            return new Emitter(this.TypeDefinitions, this.BridgeTypes, this.Types, this.Validator, resolver, this.TypeInfoDefinitions);
        }

        protected virtual Validator CreateValidator()
        {
            return new Validator();
        }

        public static void ExtractCore(Translator translatorInstance, string outputPath, bool nodebug = false)
        {
            foreach (var reference in translatorInstance.References)
            {
                var listRes = reference.MainModule.Resources.FirstOrDefault(r => r.Name == Translator.BridgeResourcesList);

                if (listRes != null)
                {
                    string resourcesStr = null;
                    using (var resourcesStream = ((EmbeddedResource) listRes).GetResourceStream())
                    {
                        using (StreamReader reader = new StreamReader(resourcesStream))
                        {
                            resourcesStr = reader.ReadToEnd();
                        }
                    }

                    //var resourcesStr = enc.GetString(((EmbeddedResource) listRes).GetResourceData());
                    var resources = resourcesStr.Split('+');

                    foreach (var res in resources)
                    {
                        var parts = res.Split(':');
                        var fileName = parts[0].Trim();
                        var resName = parts[1].Trim();
                        bool isTs = resName.EndsWith(".d.ts");
                        bool isJs = resName.EndsWith(".js");

                        if (!isTs && translatorInstance.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Minified)
                        {
                            ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName);
                        }

                        if (isTs && translatorInstance.AssemblyInfo.GenerateTypeScript)
                        {
                            ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName);
                        }

                        if (isJs && translatorInstance.AssemblyInfo.OutputFormatting != JavaScriptOutputType.Formatted)
                        {
                            if (!nodebug)
                            {
                                ExtractResourceAndWriteToFile(outputPath, reference, resName, fileName.ReplaceLastInstanceOf(".js", ".min.js"), (content) => { var minifier = new Minifier(); return minifier.MinifyJavaScript(content, MinifierCodeSettings); });
                            }
                        }
                    }
                }
            }
        }

        private static void ExtractResourceAndWriteToFile(string outputPath, AssemblyDefinition assembly, string resourceName, string fileName, Func<string, string> preHandler = null)
        {
            var res = assembly.MainModule.Resources.FirstOrDefault(r => r.Name == resourceName);

            string resourcesStr = null;
            using (var resourcesStream = ((EmbeddedResource)res).GetResourceStream())
            {
                using (StreamReader reader = new StreamReader(resourcesStream))
                {
                    resourcesStr = reader.ReadToEnd();
                }
            }
            var content = preHandler != null ? preHandler(resourcesStr) : resourcesStr;

            var file = CreateFile(outputPath, fileName);
            File.WriteAllText(file.FullName, content, OutputEncoding);
        }

        private static FileInfo CreateFile(string outputPath, string fileName)
        {
            var filePath = Path.Combine(outputPath, fileName);

            var file = new System.IO.FileInfo(filePath);
            file.Directory.Create();

            return file;
        }

        public EmitterException CreateExceptionFromLastNode()
        {
            return this.EmitNode != null ? new EmitterException(this.EmitNode) : null;
        }
    }
}
