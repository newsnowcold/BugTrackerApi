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

        public int AssingTo { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

    }

    public class UpdateIssueModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        [Required]
        public int PriorityId { get; set; }
    }

    public class UpdateStatusModel
    {
        [Required]
        public int StatusId { get; set; }

        [Required]
        public int IssueId { get; set; }

        public string ResolutionSummary { get; set; }
    }
}