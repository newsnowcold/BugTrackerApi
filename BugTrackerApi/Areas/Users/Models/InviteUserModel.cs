using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Areas.Users.Models
{
    public class InviteUserModel
    {
        [EmailAddress]
        [Required]
        public string EmailAddress { get; set; }
    }

    public class RegistrationCompletedModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
    }
}