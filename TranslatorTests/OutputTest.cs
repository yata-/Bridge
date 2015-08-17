using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

using NUnit.Framework;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    class OutputTest
    {
        public string ProjectFileName { get; set; }
        public string ProjectFolder { get; set; }

        public string ProjectFilePath { get; set; }

        public string ReferenceFolder { get; set; }
        public string OutputFolder { get; set; }

        private static Dictionary<string, CompareMode> SpecialFiles = new Dictionary<string, CompareMode>
        {
            { "bridge.js", CompareMode.Presence},
            { "bridge.min.js", CompareMode.Presence}
        };

        private static string CombineRelativePath(string absolutePath, string relativePath)
        {
            var di = new DirectoryInfo(absolutePath + relativePath);

            return di.FullName;
        }

        private void GetPaths(string folder)
        {
            ProjectFileName = "test" + ".csproj";
            ProjectFolder = CombineRelativePath(Directory.GetCurrentDirectory(), @"\..\..\TestProjects\" + folder);

            ProjectFilePath = Path.Combine(ProjectFolder, ProjectFileName);

            OutputFolder = Path.Combine(ProjectFolder, @"Bridge\Output");
            ReferenceFolder = Path.Combine(ProjectFolder, @"Bridge\Reference");
        }

        [TestCase("01", false, TestName = "OutputTest for project 01 - Default")]
        [TestCase("02", true, TestName = "OutputTest for project 02 - outputFormatting Formatted")]
        [TestCase("03", true, TestName = "OutputTest for project 03 - outputFormatting Minified")]
        [TestCase("04", true, TestName = "OutputTest for project 04 - outputFormatting Class")]
        [TestCase("05", true, TestName = "OutputTest for project 05 - outputFormatting Namespace")]
        //[TestCase("06", true, TestName = "OutputTest for project 06 - outputFormatting Project")]
        [TestCase("07", true, TestName = "OutputTest for project 07 - module")]
        [TestCase("08", true, TestName = "OutputTest for project 08 - fileNameCasing Lowercase")]
        [TestCase("09", true, TestName = "OutputTest for project 09 - fileNameCasing CamelCase")]
        [TestCase("10", true, TestName = "OutputTest for project 10 - fileNameCasing None")]
        [TestCase("11", true, TestName = "OutputTest for project 11 - generateTypeScript")]
        [TestCase("12", true, TestName = "OutputTest for project 12 - generateDocumentation Full")]
        [TestCase("13", true, TestName = "OutputTest for project 13 - generateDocumentation Basic")]
        [TestCase("14", true, TestName = "OutputTest for project 14 - preserveMemberCase")]
        [TestCase("15", true, TestName = "OutputTest for project 15 - filename")]
        public void Test(string folder, bool useSpecialFileCompare)
        {
            GetPaths(folder);

            var translator = new TranslatorRunner()
            {
                ProjectLocation = ProjectFilePath
            };

            try
            {
                translator.Translate();
            }
            catch (Exception ex)
            {
                Assert.Fail("Could not translate the project {0}. Exception occurred: {1}.", folder, ex.Message);
            }

            try
            {
                var comparence = FolderComparer.CompareFolders(this.ReferenceFolder, this.OutputFolder, useSpecialFileCompare ? SpecialFiles : null);

                if (comparence.Any())
                {
                    var sb = new StringBuilder();
                    foreach (var diff in comparence)
                    {
                        if (diff.InReference)
                            sb.AppendFormat("Output file {0} compared with Reference file {1}.", diff.Name, diff.Result);
                        else
                            sb.AppendFormat("Reference file {0} compared with Output file {1}.", diff.Name, diff.Result);

                        sb.AppendLine();

                    }

                    Assert.Fail(sb.ToString());
                }
            }
            catch (Exception ex)
            {
                Assert.Fail("Could not compare the project {0} output. Exception occurred: {1}.", folder, ex.Message);
            }
        }
    }
}
