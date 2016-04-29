using Bridge.Contract;
using System;

namespace Bridge.Translator
{
    public class TranslatorException : System.Exception, IVisitorException
    {
        public TranslatorException(string message)
            : base(message)
        {
        }

        public static IVisitorException Create(string format, params object[] args)
        {
            return new Bridge.Translator.TranslatorException(String.Format(format, args));
        }

        public static void Throw(string format, params object[] args)
        {
            throw (TranslatorException)Bridge.Translator.TranslatorException.Create(format, args);
        }
    }
}
