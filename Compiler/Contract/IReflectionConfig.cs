using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Contract
{
    public interface IReflectionConfig
    {
        bool? Enabled
        {
            get; set;
        }

        MemberAccessibility? MemberAccessibility
        {
            get; set;
        }

        TypeAccessibility? TypeAccessibility
        {
            get; set;
        }

        string Filter
        {
            get; set;
        }

        string Output
        {
            get; set;
        }
    }
}
