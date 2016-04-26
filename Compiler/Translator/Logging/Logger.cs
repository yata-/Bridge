using System;
using System.Collections.Generic;
using System.Linq;

using Bridge.Contract;

namespace Bridge.Translator.Logging
{
    public class Logger : ILogger
    {
        public string Name { get; set; }
        public List<ILogger> LoggerWriters { get; private set; }
        public bool UseTimeStamp { get; set; }

        private LoggerLevel loggerLevel;
        public LoggerLevel LoggerLevel
        {
            get { return this.loggerLevel; }
            set
            {
                if (value <= 0)
                {
                    this.loggerLevel = LoggerLevel.None;
                }
                else
                {
                    var maxValue = LoggerLevel.Trace;
                    if (value > maxValue)
                    {
                        this.loggerLevel = maxValue;
                    }
                    else
                    {
                        this.loggerLevel = value;
                    }
                }
            }
        }

        public Logger(string name, bool useTimeStamp, LoggerLevel loggerLevel, params ILogger[] loggerWriters)
        {
            this.Name = name ?? string.Empty;

            this.LoggerWriters = loggerWriters.Where(x => x != null).ToList();
            this.UseTimeStamp = useTimeStamp;
            this.LoggerLevel = loggerLevel;
        }

        public Logger(string name, bool useTimeStamp, params ILogger[] loggers)
            : this(name, useTimeStamp, 0, loggers)
        {
        }

        public void Error(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Error)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Error(wrappedMessage);
                }
            }
        }

        public void Warn(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Warning)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Warn(wrappedMessage);
                }
            }
        }

        public void Info(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Info)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Info(wrappedMessage);
                }
            }
        }

        public void Trace(string message)
        {
            string wrappedMessage;

            if ((wrappedMessage = CheckIfCanLog(message, LoggerLevel.Trace)) != null)
            {
                foreach (var logger in this.LoggerWriters)
                {
                    logger.Trace(wrappedMessage);
                }
            }
        }

        private string CheckIfCanLog(string message, LoggerLevel level)
        {
            if (this.LoggerLevel >= level)
            {
                return null;
            }


            return this.WrapMessage(message, level);
        }

        private string WrapMessage(string message, LoggerLevel logLevel)
        {
            if (this.LoggerLevel <= 0 || string.IsNullOrEmpty(message))
            {
                return null;
            }

            if (!this.UseTimeStamp)
            {
                return message;
            }

            string wrappedMessage = string.Empty;

            if (!string.IsNullOrEmpty(this.Name))
            {
                wrappedMessage += this.Name + ": ";
            }

            wrappedMessage += logLevel + " ";

            wrappedMessage += DateTime.Now.ToString("s") + ":" + DateTime.Now.Millisecond + " ";

            wrappedMessage += message;

            return wrappedMessage;
        }
    }
}
