using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Areas.FiledIssue.Models
{
    public class IssueModel
    {
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }

        [Required]
        public int PriorityId { get; set; }

    }

    public class UpdateIssueModel
    {
        [Required]
        public int PriorityId { get; set; }
    }
}