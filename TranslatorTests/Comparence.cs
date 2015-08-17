using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.IO;

namespace Bridge.Translator.Tests
{
    class Comparence
    {
        public string Name { get; set; }
        public string File1FullPath { get; set; }
        public string File2FullPath { get; set; }
        public bool InReference { get; set; }
        public CompareResult Result { get; set; }

    }

    enum CompareMode
    {
        Default = 0,
        Presence = 1,
        Content = 2
    }

    enum CompareResult
    {
        DoesNotExist = 0,
        HasContentDifferences = 1,
        TheSame = 2
    }

    class FolderComparer
    {
        public static List<Comparence> CompareFolders(string referenceFolder, string outputFolder, Dictionary<string, CompareMode> specialFiles)
        {
            var referenceDirectory = new DirectoryInfo(referenceFolder);
            var referenceFiles = referenceDirectory.GetFiles();

            var outputDirectory = new DirectoryInfo(outputFolder);
            var outputFiles = outputDirectory.GetFiles();

            var comparence = new Dictionary<string, Comparence>(referenceFiles.Length > outputFiles.Length ? referenceFiles.Length : outputFiles.Length);

            foreach (var file in referenceFiles)
            {
                HandleFile(referenceFolder, outputFolder, specialFiles, comparence, file, true);
            }

            foreach (var file in outputFiles)
            {
                HandleFile(outputFolder, referenceFolder, specialFiles, comparence, file, false);
            }

            return comparence.Values.Where(x => x.Result != CompareResult.TheSame).ToList();
        }

        private static void HandleFile(string folder1, string folder2, Dictionary<string, CompareMode> specialFiles, Dictionary<string, Comparence> comparence, FileInfo file, bool inReference)
        {
            if (comparence.ContainsKey(file.Name))
                return;

            var cd = new Comparence
            {
                Name = file.Name,
                File1FullPath = file.FullName,
                Result =  CompareResult.DoesNotExist,
                InReference = inReference
            };

            var file2FullName = cd.File1FullPath.Replace(folder1, folder2);
            if (File.Exists(file2FullName))
            {
                cd.File2FullPath = file2FullName;

                if (specialFiles != null)
                {
                    CompareMode specialFileMode;
                    if (specialFiles.TryGetValue(file.Name, out specialFileMode))
                    {
                        cd.Result = CompareResult.TheSame;
                        return;
                    }
                }

                cd.Result = CompareResult.HasContentDifferences;

                if (!AnyDifference(cd.File1FullPath, cd.File2FullPath))
                {
                    cd.Result = CompareResult.TheSame;
                }

            }

            //if (cd.Result != CompareResult.TheSame)
            //{
                comparence.Add(file.Name, cd);
            //}
        }

        private static bool AnyDifference(string file1, string file2)
        {
            using (Stream s1 = new FileStream(file1, FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                using (Stream s2 = new FileStream(file2, FileMode.Open, FileAccess.Read, FileShare.Read))
                {
                    if (s1.Length != s2.Length)
                        return true;

                    int i = 0;
                    while (i < s1.Length)
                    {
                        if (s1.ReadByte() != s2.ReadByte())
                            return true;

                        i++;
                    }
                }
            }

            return false;
        }
    }
}
