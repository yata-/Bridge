using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Contract
{
    public interface IJsDoc
    {
        List<string> Namespaces
        {
            get; set;
        }

        List<string> Callbacks
        {
            get;
            set;
        }

        void Init();
    }
}
