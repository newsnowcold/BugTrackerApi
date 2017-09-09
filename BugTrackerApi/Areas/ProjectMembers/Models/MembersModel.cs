using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Areas.ProjectMembers.Models
{
    public class Member
    {
        public int UserId { get; set; }
    }

    public class MembersModel
    {
        public List<Member> Members { get; set; }
    }
}