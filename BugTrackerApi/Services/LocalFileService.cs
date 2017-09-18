using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Services
{
    public class LocalFileService
    {
        string filePath;

        public LocalFileService(string path)
        {
            filePath = this.GetPath(path);
        }

        public string GetStringOfFile
        {
            get
            {
                return File.ReadAllText(filePath);
            }
        }

        private string GetPath(string path)
        {
            var appDomain = System.AppDomain.CurrentDomain;
            var basePath = appDomain.RelativeSearchPath ?? appDomain.BaseDirectory;

            return Path.Combine(basePath, path);
        }
    }
}