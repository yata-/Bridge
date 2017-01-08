using System;
using Bridge.Contract;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class Loader : ILoader
    {
        public LoaderType Type
        {
            get; set;
        }

        public string LoaderFunction
        {
            get; set;
        }

        public bool DisableAutoLoading
        {
            get; set;
        }

        public string DisabledModulesMask
        {
            get; set;
        }

        public bool SkipDisabledModulesVariables
        {
            get; set;
        }

        public bool Disabled(string name)
        {
            if (this.DisableAutoLoading)
            {
                return true;
            }

            if (!string.IsNullOrWhiteSpace(this.DisabledModulesMask))
            {
                var parts = this.DisabledModulesMask.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var part in parts)
                {
                    string pattern;
                    bool exclude = part.StartsWith("!");

                    if (part.StartsWith("regex:"))
                    {
                        pattern = part.Substring(6);
                    }
                    else
                    {
                        pattern = "^" + Regex.Escape(part).Replace("\\*", ".*").Replace("\\?", ".") + "$";
                    }

                    if (Regex.IsMatch(name, pattern))
                    {
                        return !exclude;
                    }
                }
            }

            return false;
        }
    }
}