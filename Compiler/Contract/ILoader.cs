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

        string LoaderFunction
        {
            get; set;
        }

        bool DisableAutoLoading
        {
            get; set;
        }

        string DisabledModulesMask
        {
            get; set;
        }

        bool SkipDisabledModulesVariables
        {
            get; set;
        }

        bool Disabled(string name);
    }
}