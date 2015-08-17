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
        //TODO
        public const string BridgeLocation = @"C:\NET\Bridge\Bridge\Bridge\bin\Debug";

        public TranslatorRunner()
        {

        }

        void LogMessage(string level, string message)
        {
            //level = level ?? "message";
            //switch (level.ToLowerInvariant())
            //{
            //    case "message":
            //        Console.ForegroundColor = ConsoleColor.Gray;
            //        Console.WriteLine("Message: {0}", message);
            //        Console.ResetColor();
            //        break;
            //    case "warning":
            //        Console.ForegroundColor = ConsoleColor.DarkYellow;
            //        Console.WriteLine("Warning: {0}", message);
            //        Console.ResetColor();
            //        break;
            //    case "error":
            //        Console.ForegroundColor = ConsoleColor.Red;
            //        Console.WriteLine("Error: {0}", message);
            //        Console.ResetColor();
            //        break;
            //}
        }

        public string Translate()
        {
            var outputLocation = Path.ChangeExtension(ProjectLocation, "js");

            var translator = new Bridge.Translator.Translator(ProjectLocation);
            translator.BridgeLocation = BridgeLocation;
            translator.Rebuild = true;
            translator.Log = LogMessage;
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
