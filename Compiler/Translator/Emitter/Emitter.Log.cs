using Bridge.Contract;
using System;

namespace Bridge.Translator
{
    public partial class Emitter : ILog
    {
        public Action<string, string> Log
        {
            get;
            set;
        }

        public virtual void LogWarning(string message)
        {
            this.LogMessage("warning", message);
        }

        public virtual void LogError(string message)
        {
            this.LogMessage("error", message);
        }

        public virtual void LogMessage(string message)
        {
            this.LogMessage("message", message);
        }

        public virtual void LogMessage(string level, string message)
        {
            if (this.Log != null)
            {
                this.Log(level, message);
            }
        }
    }
}
