using Bridge.Contract;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.IO;
using System.Text.RegularExpressions;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator.TypeScript
{
    public class EmitBlock : AbstractEmitterBlock
    {
        private Dictionary<string, StringBuilder> Outputs
        {
            get;
            set;
        }

        private string ns = null;
        
        public EmitBlock(IEmitter emitter) : base(emitter, null)
        {
            this.Emitter = emitter;            
        }

        protected virtual StringBuilder GetOutputForType(ITypeInfo typeInfo)
        {
            var info = EmitBlock.GetNamespaceFilename(typeInfo, this.Emitter);
            var ns = info.Item1;
            var fileName = info.Item2;

            if (this.ns != null && this.ns != ns)
            {
                this.EndBlock();
                this.WriteNewLine();                
            }

            this.ns = ns;

            StringBuilder output = null;

            if (this.Outputs.ContainsKey(fileName))
            {
                output = this.Outputs[fileName];
            }
            else
            {
                if (this.Emitter.Output != null)
                {
                    this.InsertDependencies(this.Emitter.Output);
                }

                output = new StringBuilder();
                this.Emitter.Output = output;
                output.AppendLine(@"/// <reference path=""./bridge.d.ts"" />");
                output.AppendLine();
                output.Append("declare module " + ns + " ");
                this.BeginBlock();
                this.Outputs.Add(fileName, output);
                this.Emitter.CurrentDependencies = new List<IPluginDependency>();
            }

            return output;
        }

        protected virtual void InsertDependencies(StringBuilder sb)
        {
            if (this.Emitter.CurrentDependencies != null && this.Emitter.CurrentDependencies.Count > 0)
            {
                StringBuilder depSb = new StringBuilder();
                var last = this.Emitter.CurrentDependencies.LastOrDefault();
                foreach (var d in this.Emitter.CurrentDependencies)
                {
                    depSb.Append(@"/// <reference path=""./" + d.DependencyName + @".d.ts"" />");

                    if (d != last)
                    {
                        depSb.AppendLine();
                    }
                }

                var index = sb.ToString().IndexOf("\n");
                
                sb.Insert(index, depSb.ToString());
                this.Emitter.CurrentDependencies.Clear();
            }
        }

        public static Tuple<string, string> GetNamespaceFilename(ITypeInfo typeInfo, IEmitter emitter)
        {
            var cas = emitter.BridgeTypes.Get(typeInfo.Key).TypeDefinition.CustomAttributes;
            var fileName = typeInfo.Namespace;

            // Search for an 'NamespaceAttribute' entry
            foreach (var ca in cas)
            {
                if (ca.AttributeType.Name == "NamespaceAttribute" &&
                    ca.ConstructorArguments.Count > 0 &&
                    ca.ConstructorArguments[0].Value is string &&
                    !string.IsNullOrWhiteSpace(ca.ConstructorArguments[0].Value.ToString()))
                {
                    fileName = ca.ConstructorArguments[0].Value.ToString();
                    break;
                }
            }

            var ns = fileName;

            switch (emitter.AssemblyInfo.FileNameCasing)
            {
                case FileNameCaseConvert.Lowercase:
                    fileName = fileName.ToLower();
                    break;
                case FileNameCaseConvert.CamelCase:
                    var sepList = new string[] { ".", System.IO.Path.DirectorySeparatorChar.ToString(), "\\", "/" };

                    // Populate list only with needed separators, as usually we will never have all four of them
                    var neededSepList = new List<string>();

                    foreach (var separator in sepList)
                    {
                        if (fileName.Contains(separator.ToString()) && !neededSepList.Contains(separator))
                        {
                            neededSepList.Add(separator);
                        }
                    }

                    // now, separating the filename string only by the used separators, apply lowerCamelCase
                    if (neededSepList.Count > 0)
                    {
                        foreach (var separator in neededSepList)
                        {
                            var stringList = new List<string>();

                            foreach (var str in fileName.Split(separator[0]))
                            {
                                stringList.Add(str.ToLowerCamelCase());
                            }

                            fileName = stringList.Join(separator);
                        }
                    }
                    else
                    {
                        fileName = fileName.ToLowerCamelCase();
                    }
                    break;
            }

            return new Tuple<string,string>(ns, fileName);
        }

        private void TransformOutputs()
        {
            if (this.Emitter.AssemblyInfo.OutputBy == OutputBy.Project)
            {
                var fileName = Path.GetFileNameWithoutExtension(this.Emitter.Outputs.First().Key) + ".d.ts";
                var e = new EmitterOutput(fileName);

                foreach (var item in this.Outputs)
                {
                    e.NonModuletOutput.AppendLine(item.Value.ToString());                    
                }

                this.Emitter.Outputs.Add(fileName, e);
            }
            else
            {
                foreach (var item in this.Outputs)
                {
                    var fileName = item.Key + ".d.ts";
                    var e = new EmitterOutput(fileName);
                    e.NonModuletOutput = item.Value;
                    this.Emitter.Outputs.Add(fileName, e);
                }
            }            
        }
        
        protected override void DoEmit()
        {
            this.Emitter.Writers = new Stack<Tuple<string, StringBuilder, bool, Action>>();
            this.Outputs = new Dictionary<string, StringBuilder>();

            var types = this.Emitter.Types.ToArray();
            Array.Sort(types, (t1, t2) => EmitBlock.GetNamespaceFilename(t1, this.Emitter).Item1.CompareTo(EmitBlock.GetNamespaceFilename(t2, this.Emitter).Item1));
            this.Emitter.InitEmitter();

            var last = types.LastOrDefault();
            foreach (var type in types)
            {
                if (type.ParentType != null)
                {
                    continue;
                }

                this.Emitter.Translator.EmitNode = type.TypeDeclaration;
                
                if (type.IsObjectLiteral)
                {
                    continue;
                }                

                ITypeInfo typeInfo;

                if (this.Emitter.TypeInfoDefinitions.ContainsKey(type.Key))
                {
                    typeInfo = this.Emitter.TypeInfoDefinitions[type.Key];

                    type.Module = typeInfo.Module;
                    type.FileName = typeInfo.FileName;
                    type.Dependencies = type.Dependencies;
                    typeInfo = type;
                }
                else
                {
                    typeInfo = type;
                }

                this.Emitter.TypeInfo = type;
                this.Emitter.Output = this.GetOutputForType(typeInfo);
                var nestedTypes = types.Where(t => t.ParentType == type);
                new ClassBlock(this.Emitter, this.Emitter.TypeInfo, nestedTypes, types).Emit();
                this.WriteNewLine();

                if (type != last)
                {
                    this.WriteNewLine();
                }                
            }

            this.InsertDependencies(this.Emitter.Output);

            this.EndBlock();
            this.TransformOutputs();
        }

        public static string GetJsName(AstType astType, IEmitter emitter)
        {
            string name = null;
            var primitive = astType as PrimitiveType;
            name = EmitBlock.GetJsPrimitivie(primitive);
            if (name != null)
            {
                return name;
            }

            var composedType = astType as ComposedType;
            if (composedType != null && composedType.ArraySpecifiers != null && composedType.ArraySpecifiers.Count > 0)
            {
                return EmitBlock.GetJsName(composedType.BaseType, emitter) + "[]";
            }

            var simpleType = astType as SimpleType;
            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                return "any";
            }

            var resolveResult = emitter.Resolver.ResolveNode(astType, emitter);
            return EmitBlock.GetJsName(resolveResult.Type, emitter);
        }

        public static string GetJsName(IType type, IEmitter emitter, bool asDefinition = false, bool excludens = false)
        {
            if (type.Kind == TypeKind.Delegate)
            {
                var method = type.GetDelegateInvokeMethod();
                
                StringBuilder sb = new StringBuilder();
                sb.Append("{");
                sb.Append("(");

                var last = method.Parameters.LastOrDefault();
                foreach (var p in method.Parameters)
                {
                    sb.Append(EmitBlock.GetJsName(p.Type, emitter));
                    if (p != last)
                    {
                        sb.Append(", ");
                    }
                }

                sb.Append(")");
                sb.Append(": ");
                sb.Append(EmitBlock.GetJsName(method.ReturnType, emitter));
                sb.Append("}");

                return sb.ToString();
            }

            if (type.IsKnownType(KnownTypeCode.String))
            {
                return "string";
            }

            if (type.IsKnownType(KnownTypeCode.Boolean))
            {
                return "boolean";
            }

            if (type.IsKnownType(KnownTypeCode.Void))
            {
                return "void";
            }

            if (type.IsKnownType(KnownTypeCode.Byte) ||
                type.IsKnownType(KnownTypeCode.Char) ||
                type.IsKnownType(KnownTypeCode.Decimal) ||
                type.IsKnownType(KnownTypeCode.Double) ||
                type.IsKnownType(KnownTypeCode.Int16) ||
                type.IsKnownType(KnownTypeCode.Int32) ||
                type.IsKnownType(KnownTypeCode.Int64) ||
                type.IsKnownType(KnownTypeCode.SByte) ||
                type.IsKnownType(KnownTypeCode.Single) ||
                type.IsKnownType(KnownTypeCode.UInt16) ||
                type.IsKnownType(KnownTypeCode.UInt32) ||
                type.IsKnownType(KnownTypeCode.UInt64))
            {
                return "number";
            }

            if (type.Kind == TypeKind.Array)
            {
                ArrayType arrayType = (ArrayType)type;
                return EmitBlock.GetJsName(arrayType.ElementType, emitter, asDefinition, excludens) + "[]";
            }

            if (type.Kind == TypeKind.Dynamic)
            {
                return "any";
            }

            if (type.Kind == TypeKind.Enum && type.DeclaringType != null && !excludens)
            {
                return "number";
            }

            if (NullableType.IsNullable(type))
            {
                return EmitBlock.GetJsName(NullableType.GetUnderlyingType(type), emitter, asDefinition, excludens);
            }

            BridgeType bridgeType = emitter.BridgeTypes.Get(type, true);
            string name = BridgeTypes.ConvertName(excludens ? type.Name : type.FullName);
            bool isCustomName = false;
            if (bridgeType != null)
            {
                if (emitter.AssemblyInfo.OutputBy != OutputBy.Project &&
                    bridgeType.TypeInfo != null && bridgeType.TypeInfo.Namespace != emitter.TypeInfo.Namespace)
                {
                    var info = EmitBlock.GetNamespaceFilename(bridgeType.TypeInfo, emitter);
                    var ns = info.Item1;
                    var fileName = info.Item2;

                    if (!emitter.CurrentDependencies.Any(d => d.DependencyName == fileName))
                    {
                        emitter.CurrentDependencies.Add(new ModuleDependency() { DependencyName = fileName });
                    }                    
                }

                name = BridgeTypes.AddModule(name, bridgeType, out isCustomName);
            }

            if (!isCustomName && type.TypeArguments.Count > 0)
            {
                name += "$" + type.TypeArguments.Count;
            }

            if (!asDefinition && type.TypeArguments.Count > 0 && !Helpers.IsIgnoreGeneric(type, emitter))
            {
                StringBuilder sb = new StringBuilder(name);
                bool needComma = false;
                sb.Append("<");
                foreach (var typeArg in type.TypeArguments)
                {
                    if (needComma)
                    {
                        sb.Append(",");
                    }

                    needComma = true;
                    sb.Append(EmitBlock.GetJsName(typeArg, emitter, asDefinition, excludens));
                }
                sb.Append(">");
                name = sb.ToString();
            }

            return name;
        }

        public static string GetJsPrimitivie(PrimitiveType primitive)
        {
            if (primitive != null)
            {
                switch (primitive.KnownTypeCode)
                {
                    case KnownTypeCode.Void:
                        return "void";
                    case KnownTypeCode.Boolean:
                        return "boolean";
                    case KnownTypeCode.String:
                        return "string";
                    case KnownTypeCode.Decimal:
                    case KnownTypeCode.Double:
                    case KnownTypeCode.Byte:
                    case KnownTypeCode.Char:
                    case KnownTypeCode.Int16:
                    case KnownTypeCode.Int32:
                    case KnownTypeCode.Int64:
                    case KnownTypeCode.SByte:
                    case KnownTypeCode.Single:
                    case KnownTypeCode.UInt16:
                    case KnownTypeCode.UInt32:
                    case KnownTypeCode.UInt64:
                        return "number";
                }
            }

            return null;
        }
    }
}
