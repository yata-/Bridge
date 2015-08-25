using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    class TranslatorRunner
    {
        public string ProjectLocation { get; set; }
        public string BuildArguments { get; set; }

        void LogMessage(string level, string message)
        {
            SimpleLogger.Instance.WriteLine("{0}: {1}", level.ToUpper(), message);
        }

        void LogInfo(string message)
        {
            SimpleLogger.Instance.LogInfo(message);
        }

        private static string FindBridgeDllPathByConfiguration(string configurationName)
        {
            var bridgeProjectPath = FileHelper.GetRelativeToCurrentDirPath(@"\..\..\..\..\Bridge\Bridge\Bridge.csproj");

            var outputPath = FileHelper.ReadProjectOutputFolder(configurationName, bridgeProjectPath);

            if (outputPath == null)
                return null;

            if (!Path.IsPathRooted(outputPath))
                outputPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(bridgeProjectPath), outputPath));

            var bridgeDllPath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(outputPath), "Bridge.dll"));

            if (!File.Exists(bridgeDllPath))
                return null;

            return outputPath;
        }

        private static string FindBridgeDllPath(out string configuration)
        {
            configuration = "Release";
            var path = FindBridgeDllPathByConfiguration(configuration);

            if (path == null)
            {
                configuration = "Debug";
                path = FindBridgeDllPathByConfiguration(configuration);
            }

            return path;
        }

        private string WrapBuildArguments(string configuration)
        {
            return this.BuildArguments + @" /p:Platform=AnyCPU /p:OutDir=bin\" + configuration + "\\";
        }

        public string Translate()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);

            translator.Log = LogMessage;
            translator.Rebuild = true;

            LogInfo("\t\tProjectLocation: " + ProjectLocation);

            string configuration;
            translator.BridgeLocation = FindBridgeDllPath(out configuration);
            if (translator.BridgeLocation == null)
            {
                Bridge.Translator.Exception.Throw("Unable to determine Bridge project output path");
            }

            translator.BuildArguments = WrapBuildArguments(configuration);
            translator.Configuration = configuration;

            LogInfo("\t\tBuildArguments: " + translator.BuildArguments);
            LogInfo("\t\tConfiguration: " + translator.Configuration);
            LogInfo("\t\tBridgeLocation: " + translator.BridgeLocation);

            translator.Translate();

            string path = Path.GetDirectoryName(outputLocation);

            string outputDir = !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ?
                                    Path.Combine(Path.GetDirectoryName(ProjectLocation), translator.AssemblyInfo.Output) :
                                    path;

            LogInfo("\t\toutputDir: " + outputDir);
            translator.SaveTo(outputDir, Path.GetFileNameWithoutExtension(outputLocation));

            return outputDir;
        }

        public void Build()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);

            translator.Log = LogMessage;
            //translator.Rebuild = true;

            LogInfo("\t\tProjectLocation: " + ProjectLocation);

            string configuration;
            translator.BridgeLocation = FindBridgeDllPath(out configuration);
            if (translator.BridgeLocation == null)
            {
                Bridge.Translator.Exception.Throw("Unable to determine Bridge project output path");
            }

            translator.BuildArguments = WrapBuildArguments(configuration);
            translator.Configuration = configuration;

            LogInfo("\t\tBuildArguments: " + translator.BuildArguments);
            LogInfo("\t\tConfiguration: " + translator.Configuration);
            LogInfo("\t\tBridgeLocation: " + translator.BridgeLocation);

            translator.BuildAssembly();
        }
    }
}
