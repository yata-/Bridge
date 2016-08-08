using Bridge;

namespace System.Runtime.CompilerServices
{
    [Namespace("System")]
    public static class FormattableStringFactory
    {
        public static extern FormattableString Create(string format, params object[] arguments);
    }
}