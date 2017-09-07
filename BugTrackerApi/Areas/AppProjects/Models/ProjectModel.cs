using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Areas.AppProjects.Models
{
    public class ProjectModel
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

    }
}