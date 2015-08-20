using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Bridge.Translator.Tests
{
    static class FileHelper
    {
        public static string CombineRelativePath(string absolutePath, string relativePath)
        {
            var di = new DirectoryInfo(absolutePath + relativePath);

            return di.FullName;
        }

        public static string GetRelativeToCurrentDirPath(string relativePath)
        {
            return FileHelper.CombineRelativePath(Directory.GetCurrentDirectory(), relativePath);
        }

        public static string GetRelativeToCurrentDirPath(params string[] relativePaths)
        {
            return FileHelper.GetRelativeToCurrentDirPath(string.Join("\\", relativePaths));
        }
    }
}
