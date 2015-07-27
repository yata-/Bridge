using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Contract;

namespace Bridge.Translator
{
    public class JsDoc: IJsDoc
    {
        public JsDoc()
        {
            this.Init();
        }

        public List<string> Namespaces
        {
            get;
            set;
        }

        public void Init()
        {
            this.Namespaces = new List<string>();
            this.Callbacks = new List<string>();
        }


        public List<string> Callbacks
        {
            get;
            set;
        }
    }
}
