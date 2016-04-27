using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class FileLoggerWriter : ILogger, IDisposable
    {
        class BufferedMessage
        {
            public LoggerLevel LoggerLevel;
            public string Message;
            public bool UseWriteLine;
        }        

        private const string LoggerFileName = "bridge.log";
        private const int LoggerFileMaxLength = 16 * 1024 * 1024;
        private const int MaxInitializationCount = 5;

        private bool IsInitializedSuccessfully { get; set; }
        private int InitializationCount { get; set; }
        private Queue<BufferedMessage> Buffer { get; set; }

        public string BaseDirectory { get; private set; }
        public string FullName { get; private set; }

        public bool BufferedMode { get; set; }
        public LoggerLevel LoggerLevel { get; set; }

        public FileLoggerWriter()
        {
            Buffer = new Queue<BufferedMessage>();
        }

        public FileLoggerWriter(string baseDir) : this()
        {
            this.BaseDirectory = Path.GetDirectoryName(baseDir);
        }
        
        private bool CanBeInitialized
        {
            get { return InitializationCount >= MaxInitializationCount; }
        }

        private bool CheckDirectoryAndLoggerSize()
        {
            if (IsInitializedSuccessfully)
            {
                return true;
            }

            if (!CanBeInitialized)
            {
                Buffer.Clear();
                return false;
            }

            InitializationCount++;

            if (string.IsNullOrEmpty(this.BaseDirectory))
            {
                this.FullName = LoggerFileName;
            }
            else
            {
                this.FullName = Path.Combine(this.BaseDirectory, LoggerFileName);
            }

            try
            {
                var loggerFile = new FileInfo(this.FullName);

                if (!loggerFile.Directory.Exists)
                {
                    loggerFile.Directory.Create();
                }

                if (loggerFile.Exists && loggerFile.Length > LoggerFileMaxLength)
                {
                    loggerFile.Delete();
                }

                IsInitializedSuccessfully = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return IsInitializedSuccessfully;
        }

        private void WriteOrBuffer(LoggerLevel level, string message, bool useWriteLine)
        {
            if (!(IsInitializedSuccessfully || CanBeInitialized))
            {
                return;
            }

            Buffer.Enqueue(new BufferedMessage() { LoggerLevel = level, Message = message, UseWriteLine = useWriteLine });

            if (BufferedMode)
            {
                return;
            }

            Flush();
        }
        
        private void WriteOrBufferLine(LoggerLevel level, string s)
        {
            WriteOrBuffer(level, s, true);
        }

        private bool CheckLoggerLevel(LoggerLevel level)
        {
            return LoggerLevel >= level;
        }

        public void Flush()
        {
            if (!CheckDirectoryAndLoggerSize())
            {
                return;
            }

            try
            {
                FileInfo file = new FileInfo(this.FullName);
                using (Stream stream = file.Open(FileMode.Append, FileAccess.Write, FileShare.Write | FileShare.ReadWrite | FileShare.Delete))
                {
                    using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8))
                    {
                        stream.Position = stream.Length;

                        BufferedMessage message;

                        while (Buffer.Count > 0)
                        {
                            message = Buffer.Dequeue();

                            if (!CheckLoggerLevel(message.LoggerLevel))
                            {
                                continue;
                            }

                            if (message.UseWriteLine)
                            {
                                writer.WriteLine(message);
                            }
                            else
                            {
                                writer.Write(message);
                            }

                            writer.Flush();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public void Error(string message)
        {
            WriteOrBufferLine(LoggerLevel.Error, message);
        }

        public void Warn(string message)
        {
            WriteOrBufferLine(LoggerLevel.Warning, message);
        }

        public void Info(string message)
        {
            WriteOrBufferLine(LoggerLevel.Info, message);
        }

        public void Trace(string message)
        {
            WriteOrBufferLine(LoggerLevel.Trace, message);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {

            return;
        }

        ~FileLoggerWriter()
        {
            this.Dispose(false);
        }
    }
}
