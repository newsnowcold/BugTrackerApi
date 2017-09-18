using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Areas.Users.Models
{
    public class InviteUserModel
    {
        [DataType(DataType.EmailAddress)]
        [Required]
        public string EmailAddress { get; set; }
    }
}