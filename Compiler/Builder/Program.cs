using Bridge.Contract;
using Bridge.Translator.Logging;

using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Bridge.Builder
{
    internal class Program
    {
        private static int Main(string[] args)
        {
            var logger = new Logger(null, false, LoggerLevel.Trace, new ConsoleLoggerWriter(), new SimpleFileLoggerWriter());

            var bridgeOptions = GetBridgeOptionsFromCommandLine(args, logger);

            if (bridgeOptions == null)
            {
                return 1;
            }

            if (bridgeOptions.Help)
            {
                return 0;
            }

            logger.Name = "Bridge.Builder.Console";
            logger.UseTimeStamp = !bridgeOptions.NoTimeStamp;

            logger.Info("Command line arguments:");
            logger.Info("\t" + (string.Join(" ", args) ?? ""));

            logger.Info("Generating script...");

            Bridge.Translator.Translator translator = null;

            try
            {
                // FIXME: detect by extension whether first argument is a project or DLL
                if (!string.IsNullOrWhiteSpace(bridgeOptions.ProjectLocation))
                {
                    translator = new Bridge.Translator.Translator(bridgeOptions.ProjectLocation);
                }
                else
                {
                    if (string.IsNullOrWhiteSpace(bridgeOptions.Lib))
                    {
                        throw new Exception("Please define path to assembly using -lib option");
                    }

                    bridgeOptions.Lib = Path.Combine(bridgeOptions.Folder, bridgeOptions.Lib);
                    translator = new Bridge.Translator.Translator(bridgeOptions.Folder, bridgeOptions.Source, bridgeOptions.Recursive, bridgeOptions.Lib);
                }

                bridgeOptions.BridgeLocation = !string.IsNullOrEmpty(bridgeOptions.BridgeLocation) ? bridgeOptions.BridgeLocation : Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Bridge.dll");

                translator.BridgeLocation = bridgeOptions.BridgeLocation;
                translator.Rebuild = bridgeOptions.Rebuild;
                translator.Log = logger;
                translator.Configuration = bridgeOptions.Cfg;
                if (bridgeOptions.Def != null)
                {
                    translator.DefineConstants.AddRange(bridgeOptions.Def.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                    translator.DefineConstants = translator.DefineConstants.Distinct().ToList();
                }

                translator.Log.Info("Translator properties:");
                translator.Log.Info("\tBridgeLocation:" + translator.BridgeLocation ?? "");
                translator.Log.Info("\tBuildArguments:" + translator.BuildArguments ?? "");
                translator.Log.Info("\tConfiguration:" + translator.Configuration ?? "");
                translator.Log.Info("\tDefineConstants:" + (translator.DefineConstants != null ? string.Join(" ", translator.DefineConstants) : ""));
                translator.Log.Info("\tRebuild:" + translator.Rebuild);

                translator.Translate();

                string path = string.IsNullOrWhiteSpace(Path.GetFileName(bridgeOptions.OutputLocation))
                    ? bridgeOptions.OutputLocation : Path.GetDirectoryName(bridgeOptions.OutputLocation);
                string outputPath = null;

                if (!string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output))
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(bridgeOptions.ProjectLocation)
                        ? Path.GetDirectoryName(bridgeOptions.ProjectLocation) : bridgeOptions.Folder, translator.AssemblyInfo.Output);
                }
                else
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(bridgeOptions.ProjectLocation)
                        ? Path.GetDirectoryName(bridgeOptions.ProjectLocation) : bridgeOptions.Folder, !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ? translator.AssemblyInfo.Output : path);
                }

                translator.CleanOutputFolderIfRequired(outputPath);

                if (bridgeOptions.ExtractCore)
                {
                    logger.Info("Extracting core scripts...");
                    translator.ExtractCore(outputPath);
                }

                logger.Info("Saving to " + outputPath);
                translator.SaveTo(outputPath, Path.GetFileName(bridgeOptions.OutputLocation));
                translator.Flush(outputPath, Path.GetFileName(bridgeOptions.OutputLocation));
                translator.Plugins.AfterOutput(translator, outputPath, !bridgeOptions.ExtractCore);

                logger.Info("Done translating Bridge files.");
            }
            catch (EmitterException ex)
            {
                logger.Error(string.Format("Error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ex.FileName, ex.StartLine, ex.StartColumn, ex.EndLine, ex.EndColumn));
                return 1;
            }
            catch (Exception ex)
            {
                var ee = translator != null ? translator.CreateExceptionFromLastNode() : null;

                if (ee != null)
                {
                    logger.Error(string.Format("Error: {2} ({3}, {4}) {0} {1}", ex.Message, ex.StackTrace, ee.FileName, ee.StartLine, ee.StartColumn, ee.EndLine, ee.EndColumn));
                }
                else
                {
                    // Iteractively print inner exceptions
                    var ine = ex;
                    var elvl = 0;
                    while (ine != null)
                    {
                        logger.Error(string.Format("Error: exception level: {0} - {1}\nStack trace:\n{2}", elvl++, ine.Message, ine.StackTrace));
                        ine = ine.InnerException;
                    }
                }
                return 1;
            }

            return 0;
        }

        /// <summary>
        /// Commandline arguments based on http://docopt.org/
        /// </summary>
        private static void ShowHelp(ILogger logger)
        {
            string codeBase = Assembly.GetExecutingAssembly().CodeBase;
            string programName = Path.GetFileName(codeBase);

            logger.Warn(@"Usage: " + programName + @" [options] (<project-file>|<assembly-file>)
       " + programName + @" [-h|--help]

-h --help                  This help message.
-c --configuration <name>  Configuration name (Debug/Release) [default: Debug].
-r --rebuild               Force assembly rebuilding.
--nocore                   Do not extract core javascript files.
-D --define <const-list>   Semicolon-delimited list of project constants.
-b --bridge <file>         Bridge.dll file location (currently unused).
-s --source <file>         Source files name/pattern [default: *.cs].
-f --folder <path>         Builder working directory relative to current WD
                           [default: current wd].
-R --recursive             Recursively search for .cs source files inside
                           current workind directory.
-notimestamp --notimestamp Do not show timestamp in log messages [default: shows timestamp]");

#if DEBUG
            // This code and logic is only compiled in when building bridge.net in Debug configuration
            logger.Warn(@"-d --debug                 Attach the builder to a visual studio debugging
                           session. Use this to attach the process to an
                           open Bridge.NET solution. This option is equivalent
                           to Build.dll's 'AttachDebugger'.");
#endif
        }

        private static bool BindCmdArgumentToOption(string arg, BridgeOptions bridgeOptions, ILogger logger)
        {
            if (bridgeOptions.ProjectLocation == null && bridgeOptions.Lib == null)
            {
                if (arg.ToLower().EndsWith(".csproj"))
                {
                    bridgeOptions.ProjectLocation = arg;
                    return true;
                }
                else if (arg.ToLower().EndsWith(".dll"))
                {
                    bridgeOptions.Lib = arg;
                    return true;
                }
            }
            return false; // didn't bind anywhere
        }

        private static BridgeOptions GetBridgeOptionsFromCommandLine(string[] args, ILogger logger)
        {
            if (args.Length == 0)
            {
                ShowHelp(logger);
                return null; // error: arguments not provided, so can't guess what to do
            }

            var bridgeOptions = new BridgeOptions();

            int i = 0;

            while (i < args.Length)
            {
                switch (args[i])
                {
                    // backwards compatibility -- now is non-switch argument to builder
                    case "-p":
                    case "-project":
                        if (bridgeOptions.Lib != null)
                        {
                            logger.Error("Error: Project and assembly file specification is mutually exclusive.");
                            ShowHelp(logger);
                            return null;
                        };
                        bridgeOptions.ProjectLocation = args[++i];
                        break;

                    case "-b":
                    case "-bridge": // backwards compatibility
                    case "--bridge":
                        bridgeOptions.BridgeLocation = args[++i];
                        break;

                    case "-o":
                    case "-output": // backwards compatibility
                    case "--output":
                        bridgeOptions.OutputLocation = args[++i];
                        break;

                    case "-c":
                    case "-cfg": // backwards compatibility
                    case "-configuration": // backwards compatibility
                    case "--configuration":
                        bridgeOptions.Cfg = args[++i];
                        break;

                    case "-def": // backwards compatibility
                    case "-D":
                    case "-define": // backwards compatibility
                    case "--define":
                        bridgeOptions.Def = args[++i];
                        break;

                    case "-rebuild": // backwards compatibility
                    case "--rebuild":
                    case "-r":
                        bridgeOptions.Rebuild = true;
                        break;

                    case "-nocore": // backwards compatibility
                    case "--nocore":
                        bridgeOptions.ExtractCore = false;
                        break;

                    case "-s":
                    case "-src": // backwards compatibility
                    case "--source":
                        bridgeOptions.Source = args[++i];
                        break;

                    case "-f":
                    case "-folder": // backwards compatibility
                    case "--folder":
                        bridgeOptions.Folder = Path.Combine(Environment.CurrentDirectory, args[++i]);
                        break;

                    case "-R":
                    case "-recursive": // backwards compatibility
                    case "--recursive":
                        bridgeOptions.Recursive = true;
                        break;

                    case "-lib": // backwards compatibility -- now is non-switch argument to builder
                        if (bridgeOptions.ProjectLocation != null)
                        {
                            logger.Error("Error: Project and assembly file specification is mutually exclusive.");
                            ShowHelp(logger);
                            return null;
                        }
                        bridgeOptions.Lib = args[++i];
                        break;

                    case "-h":
                    case "--help":
                        ShowHelp(logger);
                        bridgeOptions.Help = true;
                        return bridgeOptions; // success. Asked for help. Help provided.

                    case "-notimestamp":
                    case "--notimestamp":
                        bridgeOptions.NoTimeStamp = true;
                        break;

#if DEBUG
                    case "-debug":
                    case "--debug":
                    case "-attachdebugger":
                    case "--attachdebugger":
                    case "-d":
                        System.Diagnostics.Debugger.Launch();
                        break;
#endif
                    case "--": // stop reading commandline arguments
                        // Only non-hyphen commandline argument accepted is the file name of the project or
                        // assembly file, so if not provided already, when this option is specified, check if
                        // it is still needed and bind the file to the correct location
                        if (i < (args.Length - 1))
                        {
                            // don't care about success. If not set already, then try next cmdline argument
                            // as the file parameter and ignore following arguments, if any.
                            BindCmdArgumentToOption(args[i + 1], bridgeOptions, logger);
                        }
                        i = args.Length; // move to the end of arguments list
                        break;

                    default:

                        // If this argument does not look like a cmdline switch and
                        // neither backwards -project nor -lib were specified
                        if (!BindCmdArgumentToOption(args[i], bridgeOptions, logger))
                        {
                            logger.Error("Invalid argument: " + args[i]);
                            ShowHelp(logger);
                            return null;
                        }
                        break;
                }

                i++;
            }

            if (bridgeOptions.ProjectLocation == null && bridgeOptions.Lib == null)
            {
                logger.Error("Error: Project or assembly file name must be specified.");
                ShowHelp(logger);
                return null;
            }

            if (string.IsNullOrEmpty(bridgeOptions.OutputLocation))
            {
                bridgeOptions.OutputLocation = !string.IsNullOrWhiteSpace(bridgeOptions.ProjectLocation)
                    ? Path.GetFileNameWithoutExtension(bridgeOptions.ProjectLocation) : bridgeOptions.Folder;
            }

            return bridgeOptions;
        }
    }

    class BridgeOptions
    {
        public string ProjectLocation { get; set; }
        public string OutputLocation { get; set; }
        public string BridgeLocation { get; set; }
        public bool Rebuild { get; set; }
        public bool ExtractCore { get; set; }
        public string Cfg { get; set; }
        public string Source { get; set; }
        public string Folder { get; set; }
        public bool Recursive { get; set; }
        public string Lib { get; set; }
        public string Def { get; set; }
        public bool Help { get; set; }
        public bool NoTimeStamp { get; set; }

        public BridgeOptions()
        {
            ExtractCore = true;
            Folder = Environment.CurrentDirectory;
        }
    }
}