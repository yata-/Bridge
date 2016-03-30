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
            var logger = new Logger(null, false, LoggerLevel.Trace, new ConsoleLoggerWriter());

            string projectLocation = null;
            string outputLocation = null;
            string bridgeLocation = null;
            bool rebuild = false;
            bool extractCore = true;
            string cfg = null;
            string source = null;
            string folder = Environment.CurrentDirectory;
            bool recursive = false;
            string lib = null;
            string def = null;

            if (args.Length == 0)
            {
                showHelp();
                return 1; // error: arguments not provided, so can't guess what to do
            }

            int i = 0;

            while (i < args.Length)
            {
                switch (args[i])
                {
                    // backwards compatibility -- now is non-switch argument to builder
                    case "-p":
                    case "-project":
                        if (lib != null)
                        {
                            Console.WriteLine("Error: Project and assembly file specification is mutually exclusive.");
                            showHelp();
                            return 1;
                        };
                        projectLocation = args[++i];
                        break;

                    case "-b":
                    case "-bridge": // backwards compatibility
                    case "--bridge":
                        bridgeLocation = args[++i];
                        break;

                    case "-o":
                    case "-output": // backwards compatibility
                    case "--output":
                        outputLocation = args[++i];
                        break;

                    case "-c":
                    case "-cfg": // backwards compatibility
                    case "-configuration": // backwards compatibility
                    case "--configuration":
                        cfg = args[++i];
                        break;

                    case "-def": // backwards compatibility
                    case "-D":
                    case "-define": // backwards compatibility
                    case "--define":
                        def = args[++i];
                        break;

                    case "-rebuild": // backwards compatibility
                    case "--rebuild":
                    case "-r":
                        rebuild = true;
                        break;

                    case "-nocore": // backwards compatibility
                    case "--nocore":
                        extractCore = false;
                        break;

                    case "-s":
                    case "-src": // backwards compatibility
                    case "--source":
                        source = args[++i];
                        break;

                    case "-f":
                    case "-folder": // backwards compatibility
                    case "--folder":
                        folder = Path.Combine(Environment.CurrentDirectory, args[++i]);
                        break;

                    case "-R":
                    case "-recursive": // backwards compatibility
                    case "--recursive":
                        recursive = true;
                        break;

                    case "-lib": // backwards compatibility -- now is non-switch argument to builder
                        if (projectLocation != null)
                        {
                            Console.WriteLine("Error: Project and assembly file specification is mutually exclusive.");
                            showHelp();
                            return 1;
                        }
                        lib = args[++i];
                        break;

                    case "-h":
                    case "--help":
                        showHelp();
                        return 0; // success. Asked for help. Help provided.

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
                        if (i < (args.Length-1))
                        {
                            // don't care about success. If not set already, then try next cmdline argument
                            // as the file parameter and ignore following arguments, if any.
                            bindArgToVar(args[i + 1], ref projectLocation, ref lib);
                        }
                        i = args.Length; // move to the end of arguments list
                        break;

                    default:

                    // If this argument does not look like a cmdline switch and
                        // neither backwards -project nor -lib were specified
                        if (!bindArgToVar(args[i], ref projectLocation, ref lib))
                        {
                            Console.WriteLine("Invalid argument: " + args[i]);
                            showHelp();
                            return 1;
                        }
                        break;
                }

                i++;
            }

            if (projectLocation == null && lib == null)
            {
                Console.WriteLine("Error: Project or assembly file name must be specified.");
                showHelp();
                return 1;
            }

            if (string.IsNullOrEmpty(outputLocation))
            {
                outputLocation = !string.IsNullOrWhiteSpace(projectLocation) ? Path.GetFileNameWithoutExtension(projectLocation) : folder;
            }

            Bridge.Translator.Translator translator = null;

            try
            {
                logger.Name = "Bridge.Builder.Console";

                Console.WriteLine("Generating script...");

                Console.WriteLine("Command line arguments:");
                Console.WriteLine("\t" + (string.Join(" ", args) ?? ""));

                // FIXME: detect by extension whether first argument is a project or DLL
                if (!string.IsNullOrWhiteSpace(projectLocation))
                {
                    translator = new Bridge.Translator.Translator(projectLocation);
                }
                else
                {
                    if (string.IsNullOrWhiteSpace(lib))
                    {
                        throw new Exception("Please define path to assembly using -lib option");
                    }

                    lib = Path.Combine(folder, lib);
                    translator = new Bridge.Translator.Translator(folder, source, recursive, lib);
                }

                bridgeLocation = !string.IsNullOrEmpty(bridgeLocation) ? bridgeLocation : Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Bridge.dll");

                translator.BridgeLocation = bridgeLocation;
                translator.Rebuild = rebuild;
                translator.Log = logger;
                translator.Configuration = cfg;
                if (def != null)
                {
                    translator.DefineConstants.AddRange(def.Split(';').Select(s => s.Trim()).Where(s => s != ""));
                    translator.DefineConstants = translator.DefineConstants.Distinct().ToList();
                }

                translator.Log.Info("Translator properties:");
                translator.Log.Info("\tBridgeLocation:" + translator.BridgeLocation ?? "");
                translator.Log.Info("\tBuildArguments:" + translator.BuildArguments ?? "");
                translator.Log.Info("\tConfiguration:" + translator.Configuration ?? "");
                translator.Log.Info("\tDefineConstants:" + (translator.DefineConstants != null ? string.Join(" ", translator.DefineConstants) : ""));
                translator.Log.Info("\tRebuild:" + translator.Rebuild);

                translator.Translate();

                string path = string.IsNullOrWhiteSpace(Path.GetFileName(outputLocation)) ? outputLocation : Path.GetDirectoryName(outputLocation);
                string outputPath = null;

                if (!string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output))
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(projectLocation) ? Path.GetDirectoryName(projectLocation) : folder, translator.AssemblyInfo.Output);
                }
                else
                {
                    outputPath = Path.Combine(!string.IsNullOrWhiteSpace(projectLocation) ? Path.GetDirectoryName(projectLocation) : folder, !string.IsNullOrWhiteSpace(translator.AssemblyInfo.Output) ? translator.AssemblyInfo.Output : path);
                }

                translator.CleanOutputFolderIfRequired(outputPath);

                if (extractCore)
                {
                    Console.WriteLine("Extracting core scripts...");
                    translator.ExtractCore(outputPath);
                }

                Console.WriteLine("Saving to " + outputPath);
                translator.SaveTo(outputPath, Path.GetFileName(outputLocation));
                translator.Flush(outputPath, Path.GetFileName(outputLocation));
                translator.Plugins.AfterOutput(translator, outputPath, !extractCore);

                Console.WriteLine("Done translating Bridge files.");
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
        private static void showHelp()
        {
            string codeBase = Assembly.GetExecutingAssembly().CodeBase;
            string programName = Path.GetFileName(codeBase);

            Console.WriteLine(@"Usage: " + programName + @" [options] (<project-file>|<assembly-file>)
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
                           current workind directory.");

#if DEBUG
            // This code and logic is only compiled in when building bridge.net in Debug configuration
            Console.WriteLine(@"-d --debug                 Attach the builder to a visual studio debugging
                           session. Use this to attach the process to an
                           open Bridge.NET solution. This option is equivalent
                           to Build.dll's 'AttachDebugger'.");
#endif
        }

        private static bool bindArgToVar(string arg, ref string proj, ref string lib)
        {
            if (proj == null && lib == null)
            {
                Console.WriteLine("hey");
                if (arg.ToLower().EndsWith(".csproj"))
                {
                    Console.WriteLine("prj");
                    proj = arg;
                    return true;
                }
                else if (arg.ToLower().EndsWith(".dll"))
                {
                    Console.WriteLine("lib");
                    lib = arg;
                    return true;
                }
            }
            return false; // didn't bind anywhere
        }
    }
}