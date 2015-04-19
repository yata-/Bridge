using Bridge;

namespace System.Collections.Generic 
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEnumerator<out T> : IBridgeClass, IDisposable, IEnumerator
    {
        new T Current 
        {
            [Name("getCurrent")]
            get;
        }
    }
}
