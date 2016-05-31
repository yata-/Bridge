namespace Bridge.Contract.Constants
{
    public class Functions
    {
        public const string AUTO_STARTUP_METHOD_NAME = "Main";
        
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
}
