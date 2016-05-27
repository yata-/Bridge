using Bridge;

namespace System
{
    [External]
    [Name("Object")]
    public static class Environment
    {
        [InlineConst]
        public const string NewLine = "\n";

        [InlineConst]
        public const int CurrentManagedThreadId = 0;
    }
}