using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    public sealed class SimpleLogger : IDisposable
    {
        public static SimpleLogger Instance { get { return Nested.instance; } }

        private class Nested
        {
            // Explicit static constructor to tell C# compiler not to mark type as beforefieldinit
            static Nested()
            {
            }

            internal static readonly SimpleLogger instance = new SimpleLogger();
        }

        private TextWriter Writer { get; set; }

        private const string LoggerFileName = "Bridge.Translator.Tests.run.log";
        private const int LoggerFileMaxLength = 1024 * 1024;

        private SimpleLogger()
        {
            var loggerFile = new FileInfo(LoggerFileName);
            if (loggerFile.Exists && loggerFile.Length > LoggerFileMaxLength)
            {
                loggerFile.Delete();
            }

            Writer = new StreamWriter(
                File.Open(LoggerFileName, FileMode.Append, FileAccess.Write, FileShare.ReadWrite | FileShare.Delete),
                Encoding.UTF8
            );
        }

        public void Write(string s)
        {
            Writer.Write(s);
            Writer.Flush();
        }

        public void Write(string format, params object[] arg)
        {
            Writer.Write(format, arg);
            Writer.Flush();
        }

        public void WriteLine(string s)
        {
            Writer.WriteLine(s);
            Writer.Flush();
        }

        public void WriteLine(string format, params object[] arg)
        {
            Writer.WriteLine(format, arg);
            Writer.Flush();
        }

        public void LogInfo(string s)
        {
            WriteLine("INFO: " + s);
        }

        public void LogInfo(string format, params object[] arg)
        {
            WriteLine("INFO: " + format, arg);
        }

        public void LogWarning(string s)
        {
            WriteLine("WARNING: " + s);
        }

        public void LogWarning(string format, params object[] arg)
        {
            WriteLine("WARNING: " + format, arg);
        }

        public void Dispose()
        {
            Writer.Close();
        }
    }
}
