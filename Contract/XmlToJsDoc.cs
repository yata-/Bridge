using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Bridge.Contract
{
    public class XmlToJsDoc
    {
        public static void EmitComment(IAbstractEmitterBlock block, AstNode node)
        {
            var visitor = new DocumentationCommentVisitor(block.Emitter);
            node.AcceptChildren(visitor);

            if (visitor.Comments.Count > 0)
            {
                StringBuilder sb = new StringBuilder();
                foreach (var c in visitor.Comments)
                {
                    sb.AppendLine(c.Content);
                }

                block.Write(block.WriteIndentToString(XmlToJsDoc.Convert(sb.ToString())));
                block.WriteNewLine();
            }
        }

        public static string Convert(string source)
        {
            var xml = new StringBuilder("<comment>\n");
            var descs = new List<string>();
            var remarks = new List<string>();
            var parameters = new List<XmlParam>();
            var ret = new List<XmlParam>();                
            var comment = new StringBuilder("/**\n");
            var nameColumnWidth = 0;
            var typeColumnWidth = 0;

            foreach (var line in source.Split('\n'))
	        {
		        var trimmedLine = line.Trim();

                if (string.IsNullOrEmpty(trimmedLine)) 
                { 
                    continue; 
                }
                
                xml.Append(System.Text.RegularExpressions.Regex.Replace(line, @"\/\/\/\s*", "") + "\n");
	        }    
                
            xml.Append("</comment>");

            
            var doc = new System.Xml.XmlDocument();
            doc.LoadXml(xml.ToString());

            foreach (XmlNode node in doc.GetElementsByTagName("summary"))
	        {
                descs.Add(node.InnerXml.Trim());
	        }

            if (descs.Count == 0) 
            {
                descs.Add("[description]");
            }

            foreach (XmlNode node in doc.GetElementsByTagName("remark"))
	        {
                remarks.Add(HandleNode(node));
	        }

            foreach (XmlNode node in doc.GetElementsByTagName("param"))
	        {
                var param = new XmlParam 
                {
                    Name = "[name]",
                    Type = "[type]",
                    Desc = "[description]"
                };

                var attr = node.Attributes["name"];
                if (attr != null) 
                {
                    param.Name = attr.Value.Trim();
                }
                
                attr = node.Attributes["type"];
                if (attr != null) 
                {
                    param.Type = attr.Value;
                }

                var text = HandleNode(node);
                if (!string.IsNullOrEmpty(text)) 
                {
                    param.Desc = text;
                }

                parameters.Add(param);
	        }

            foreach (XmlNode node in doc.GetElementsByTagName("returns"))
	        {
                var param = new XmlParam 
                {
                    Type = "[type]",
                    Desc = "[description]"
                };

                var attr = node.Attributes["name"];
                if (attr != null) 
                {
                    param.Name = attr.Value.Trim();
                }

                attr = node.Attributes["type"];
                if (attr != null) {
                    param.Type = attr.Value.Trim();
                }

                var text = HandleNode(node);
                if (!string.IsNullOrEmpty(text)) 
                {
                    param.Desc = text;
                }

                ret.Add(param);
            }

            var tmp = new List<XmlParam>(parameters);
            tmp.AddRange(ret);
            foreach(XmlParam param in tmp)
            {
                if (param.Type.Length > typeColumnWidth) 
                {
                    typeColumnWidth = param.Type.Length;
                }

                if (param.Name != null && param.Name.Length > nameColumnWidth) 
                {
                    nameColumnWidth = param.Name.Length;
                }
            }

            typeColumnWidth += 4;
            nameColumnWidth += 4;

            comment.Append(" * " + string.Join("\n * ", descs.ToArray()) + "\n *\n");

            if (remarks.Count > 0) 
            {
                comment.Append(" * " + string.Join("\n * ", remarks) + "\n *\n");
            }

            foreach(XmlParam param in parameters)
            {
                comment.Append(" * @param   {" + param.Type + "}");
                comment.Append(new String(' ', typeColumnWidth - param.Type.Length));
                comment.Append(param.Name);
                comment.Append(new String(' ', nameColumnWidth - param.Name.Length));
                comment.Append(param.Desc);
                comment.AppendLine();
            }

            foreach (XmlParam param in ret)
	        {
                comment.Append(" * @return  {" + param.Type + "}");
                comment.Append(new String(' ', typeColumnWidth - param.Type.Length));
                comment.Append(new String(' ', nameColumnWidth));
                comment.Append(param.Desc);
                comment.AppendLine();
	        }
            
            comment.Append(" */");

            return comment.ToString();
        }

        private static string HandleNode(XmlNode node)
        {
            return node.InnerXml.Trim();
        }

        class XmlParam
        {
            public string Name
            {
                get;
                set;
            }

            public string Type
            {
                get;
                set;
            }

            public string Desc
            {
                get;
                set;
            }
        }

        class DocumentationCommentVisitor : DepthFirstAstVisitor
        {
            public DocumentationCommentVisitor(IEmitter emitter)
            {
                this.Comments = new List<Comment>();
                this.Emitter = emitter;
            }

            public List<Comment> Comments
            {
                get;
                private set;
            }

            public IEmitter Emitter
            {
                get;
                private set;
            }

            protected override void VisitChildren(AstNode node)
            {                
            }

            public override void VisitComment(Comment comment)
            {
                if (comment.CommentType == CommentType.Documentation)
                {
                    this.Comments.Add(comment);
                }
            }
        }
    }
}
