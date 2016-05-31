namespace Bridge.Contract.Constants
{
    public class JS
    {
        public class NS
        {
            public const string BRIDGE = "Bridge";
        }

        public class Fields
        {
            public const string ENTRY_POINT = "$entryPoint";
            public const string FLAGS = "$flags";
            public const string ENUM = "$enum";
            public const string INHERITS = "inherits";
            public const string STRUCT = "$struct";
            //config
            //task
            //prototype
        }

        public class Funcs
        {
            public const string BRIDGE_AUTO_STARTUP_METHOD_TEMPLATE = "Bridge.ready(this.{0})";
            public const string BRIDGE_APPLY = "Bridge.apply";
            public const string BRIDGE_BIND = "Bridge.fn.bind";
            public const string BRIDGE_BIND_SCOPE = "Bridge.fn.bindScope";
            public const string BRIDGE_COMBINE = "Bridge.fn.combine";
            public const string BRIDGE_REMOVE = "Bridge.fn.remove";
            public const string BRIDGE_MERGE = "Bridge.merge";
            public const string BRIDGE_DEFINE = "Bridge.define";
            public const string BRIDGE_IS_DEFINED = "Bridge.isDefined";
            public const string BRIDGE_GET_ENUMERATOR = "Bridge.getEnumerator";
            public const string BRIDGE_GET_TYPE = "Bridge.getType";
            public const string BRIDGE_NS = "Bridge.ns";

            public const string DCONSTRUCTOR = "$constructor";
            public const string CLONE = "$clone";
            public const string TO_ENUMERATOR = "toEnumerator";
            public const string TO_ENUMERABLE = "toEnumerable";
            //getHashCode
            // return, continue, throw
            // "(" ")" "{" "}" "[" "]" ".
            public const string ASYNC_BODY = "$asyncBody";
            public const string GET_AWAITED_RESULT = "getAwaitedResult";
            public const string CONTINUE_WITH = "continueWith";
            public const string SET_RESULT = "setResult";
            public const string SET_EXCEPTION = "setException";

            public const string CONSTRUCTOR = "constructor";
            public const string APPLY = "apply";
            public const string CALL = "call";
            public const string DEFINE = "define";

            //.lift1
        }

        public class Types
        {
            public const string UInt64 = "System.UInt64";
            public const string Int64 = "System.Int64";
            public const string Decimal = "System.Decimal";
            public const string Array = "System.Array";
            public const string Nullable = "System.Nullable";
            public const string TaskCompletionSource = "System.Threading.Tasks.TaskCompletionSource";
            public const string Exception = "System.Exception";
            public const string IBridgeClass = "Bridge.IBridgeClass";
            public const string Int = "Bridge.Int";
            public const string Anonymous = "Bridge.$AnonymousType$";
        }

        public class Vars
        {
            public const char D = '$';
            public const string D_ = "$_";

            public const string T = "$t";
            public const string E = "$e";
            public const string YIELD = "$yield";
            public const string EXPORTS = "exports";
            public const string SCOPE = "$scope";
            public const string ITERATOR = "$i";

            public const string ASYNC_TASK = "$task";
            public const string ASYNC_TASK_RESULT = "$taskResult";
            public const string ASYNC_STEP = "$step";
            public const string ASYNC_TCS = "$tcs";
            public const string ASYNC_E = "$async_e";
            public const string ASYNC_E1 = "$async_e1";
            public const string ASYNC_JUMP = "$jumpFromFinally";
            public const string ASYNC_RETURN_VALUE = "$returnValue";
        }
    }
}
