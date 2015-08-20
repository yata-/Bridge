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

        void LogMessage(string level, string message)
        {
            SimpleLogger.Instance.WriteLine("{0}: {1}", level.ToUpper(), message);
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

        private static string FindBridgeDllPath()
        {
            var path = FindBridgeDllPathByConfiguration("Debug");

            if (path == null)
                path = FindBridgeDllPathByConfiguration("Release");

            return path;
        }

        public string Translate()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);
            translator.Log = LogMessage;
            translator.Rebuild = true;

            translator.BridgeLocation = FindBridgeDllPath();
            if (translator.BridgeLocation == null)
                Bridge.Translator.Exception.Throw("Unable to determine Bridge project output path");

            translator.Translate();

            string path = string.IsNullOrWhiteSpace(Path.GetFileName(outputLocation)) ? outputLocation : Path.GetDirectoryName(outputLocation);

            string outputDir = !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ?
                                    Path.Combine(Path.GetDirectoryName(ProjectLocation), translator.AssemblyInfo.Output) :
                                    path;

            translator.SaveTo(outputDir, Path.GetFileName(outputLocation));

            outputLocation = outputDir;

            return outputLocation;
        }
    }
}
