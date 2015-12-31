using Bridge.Contract;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.ComponentModel.Composition.Primitives;
using System.IO;
using System.Linq;
using System.Reflection;
using Mono.Cecil;

namespace Bridge.Translator
{
    public class Plugins : IPlugins
    {
        public static string GetPluginPath(ITranslator translator, IAssemblyInfo config)
        {
            string path = null;

            if (!string.IsNullOrWhiteSpace(config.PluginsPath))
            {
                path = Path.Combine(translator.FolderMode ? translator.Location : Path.GetDirectoryName(translator.Location), config.PluginsPath);
            }
            else
            {
                path = Path.Combine(translator.FolderMode ? translator.Location : Path.GetDirectoryName(translator.Location), "Bridge" + Path.DirectorySeparatorChar + "plugins");
            }

            return path;
        }

        public static IPlugins GetPlugins(ITranslator translator, IAssemblyInfo config)
        {
            var path = GetPluginPath(translator, config);
            var catalogs = new List<ComposablePartCatalog>();

            if (System.IO.Directory.Exists(path))
            {
                catalogs.Add(new DirectoryCatalog(path, "*.dll"));
            }

            foreach (var reference in translator.References)
            {
                var assemblies = reference.MainModule.Resources.Where(res => res.Name.StartsWith("Bridge.Plugins."));

                if (assemblies.Any())
                {
                    foreach (var res_assembly in assemblies)
                    {
                        using (var resourcesStream = ((EmbeddedResource)res_assembly).GetResourceStream())
                        {
                            var ba = new byte[(int)resourcesStream.Length];
                            resourcesStream.Read(ba, 0, (int)resourcesStream.Length);

                            var assembly = Assembly.Load(ba);

                            catalogs.Add(new AssemblyCatalog(assembly));
                        }
                    }
                }
            }

            if (catalogs.Count == 0)
            {
                return new Plugins(){plugins = new IPlugin[0]};
            }

            var catalog = new AggregateCatalog(catalogs);

            CompositionContainer container = new CompositionContainer(catalog);
            var plugins = new Plugins();

            container.ComposeParts(plugins);

            return plugins;
        }

        [ImportMany]
        private IEnumerable<IPlugin> plugins;

        public IEnumerable<IPlugin> Parts
        {
            get
            {
                return this.plugins;
            }
        }

        public void OnConfigRead(IAssemblyInfo config)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.OnConfigRead(config);
            }
        }

        public IEnumerable<string> GetConstructorInjectors(IConstructorBlock constructorBlock)
        {
            IEnumerable<string> result = new List<string>();
            foreach (var plugin in this.Parts)
            {
                result = result.Concat(plugin.GetConstructorInjectors(constructorBlock));
            }

            return result;
        }

        public bool HasConstructorInjectors(IConstructorBlock constructorBlock)
        {
            foreach (var plugin in this.Parts)
            {
                if (plugin.HasConstructorInjectors(constructorBlock))
                {
                    return true;
                }
            }

            return false;
        }

        public void BeforeEmit(IEmitter emitter, ITranslator translator)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeEmit(emitter, translator);
            }
        }

        public void AfterEmit(IEmitter emitter, ITranslator translator)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterEmit(emitter, translator);
            }
        }

        public void AfterOutput(ITranslator translator, string outputPath, bool nocore)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterOutput(translator, outputPath, nocore);
            }
        }

        public void BeforeTypesEmit(IEmitter emitter, IList<ITypeInfo> types)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeTypesEmit(emitter, types);
            }
        }

        public void AfterTypesEmit(IEmitter emitter, IList<ITypeInfo> types)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterTypesEmit(emitter, types);
            }
        }

        public void BeforeTypeEmit(IEmitter emitter, ITypeInfo type)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeTypeEmit(emitter, type);
            }
        }

        public void AfterTypeEmit(IEmitter emitter, ITypeInfo type)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterTypeEmit(emitter, type);
            }
        }
    }
}
