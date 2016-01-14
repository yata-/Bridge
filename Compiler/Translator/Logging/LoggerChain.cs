using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    [Flags]
    public enum LogLevel
    {
        Error = 1,
        Warning = 2,
        Info = 3,
        Trace = 4,
    }

    public class LoggerChain : ILogger
    {
        public string Name { get; set; }
        public List<ILogger> Loggers { get; private set; }
        public LogLevel LogLevel { get; set; }
        public bool UseTimeStamp { get; set; }

        public LoggerChain(string name, bool useTimeStamp, LogLevel logLevel, params ILogger[] loggers)
        {
            this.Name = name ?? string.Empty;

            if (logLevel == 0)
            {
                logLevel = Logging.LogLevel.Error | Logging.LogLevel.Warning | Logging.LogLevel.Info;
            }

            this.Loggers = loggers.Where(x => x != null).ToList();
            this.UseTimeStamp = useTimeStamp;
        }

        public LoggerChain(string name, bool useTimeStamp, params ILogger[] loggers)
            : this(name, useTimeStamp, 0, loggers)
        {
        }

        public void Error(string message)
        {
            OutputMessage(Logging.LogLevel.Error, message);
        }

        public void Warn(string message)
        {
            OutputMessage(Logging.LogLevel.Warning, message);
        }

        public void Info(string message)
        {
            OutputMessage(Logging.LogLevel.Info, message);
        }

        public void Trace(string message)
        {
            OutputMessage(Logging.LogLevel.Trace, message);
        }

        private void OutputMessage(LogLevel logLevel, string message)
        {
            var wrappedMessage = WrapMessage(message, logLevel);

            foreach (var logger in this.Loggers)
            {
                if ((logLevel | Logging.LogLevel.Error) == Logging.LogLevel.Error)
                {
                    logger.Error(wrappedMessage);
                }

                if ((logLevel | Logging.LogLevel.Warning) == Logging.LogLevel.Warning)
                {
                    logger.Warn(wrappedMessage);
                }

                if ((logLevel | Logging.LogLevel.Info) == Logging.LogLevel.Info)
                {
                    logger.Info(wrappedMessage);
                }

                if ((logLevel | Logging.LogLevel.Trace) == Logging.LogLevel.Trace)
                {
                    logger.Trace(wrappedMessage);
                }
            }
        }

        private string WrapMessage(string message, LogLevel logLevel)
        {
            string wrappedMessage = string.Empty;

            if (!string.IsNullOrEmpty(this.Name))
            {
                wrappedMessage += this.Name + ": ";
            }

            wrappedMessage += logLevel + " ";

            if (this.UseTimeStamp)
            {
                wrappedMessage += DateTime.Now.ToString("s") + " ";
            }

            wrappedMessage += message;

            return wrappedMessage;
        }

    }
}
