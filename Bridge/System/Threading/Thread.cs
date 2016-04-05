using Bridge;

using System.ComponentModel;


namespace System.Threading
{
    [External]
    [Namespace("Bridge.Threading")]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public sealed class Thread
    {
        //public extern int ManagedThreadId
        //{
        //    get;
        //}

        //public static extern Thread CurrentThread
        //{
        //    get;
        //}

        [Template("Bridge.sleep({millisecondsTimeout})")]
        public extern static void Sleep(int millisecondsTimeout);

        [Template("Bridge.sleep(null, {timeout})")]
        public extern static void Sleep(TimeSpan timeout);
    }
}