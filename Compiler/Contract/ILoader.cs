namespace Bridge.Contract
{
    public enum LoaderType
    {
        AMD,
        CommonJS,
        ES6
    }

    public interface ILoader
    {
        LoaderType Type
        {
            get; set;
        }

        string FunctionName
        {
            get; set;
        }

        bool ManualLoading
        {
            get; set;
        }

        string ManualLoadingMask
        {
            get; set;
        }

        bool SkipManualVariables
        {
            get; set;
        }

        bool IsManual(string name);
    }
}