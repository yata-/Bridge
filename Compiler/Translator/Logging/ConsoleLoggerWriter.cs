using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class ConsoleLoggerWriter : ILogger
    {
        public bool BufferedMode { get; set; }

        private LoggerLevel loggerLevel;
        public LoggerLevel LoggerLevel
        {
            get { return loggerLevel; }
            set
            {
                if (loggerLevel < LoggerLevel.Warning)
                {
                    value = LoggerLevel.Warning;
                }

                loggerLevel = value;
            }
        }

        public void Flush()
        {

        }

        public void Error(string message)
        {
            OutputMessage(message, ConsoleColor.Red, LoggerLevel.Error);
        }

        public void Warn(string message)
        {
            OutputMessage(message, ConsoleColor.DarkYellow, LoggerLevel.Warning);
        }

        public void Info(string message)
        {
            OutputMessage(message, ConsoleColor.Gray, LoggerLevel.Info);
        }

        public void Trace(string message)
        {
            OutputMessage(message, ConsoleColor.Green, LoggerLevel.Trace);
        }

        private void OutputMessage(string message, ConsoleColor color, LoggerLevel level)
        {
            if (!CheckLoggerLevel(level))
            {
                return;
            }

            Console.ForegroundColor = color;
            Console.WriteLine(message);
            Console.ResetColor();
        }

        private bool CheckLoggerLevel(LoggerLevel level)
        {
            return LoggerLevel >= level;
        }
    }
}
