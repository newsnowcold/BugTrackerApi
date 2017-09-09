using BugTrackerApi.Areas.ProjectMembers.Models;
using BugTrackerApi.Controllers;
using DBLayer;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BugTrackerApi.Areas.ProjectUsers.Controllers
{
    [CustomApiHandler]
    [Authorize]
    [RoutePrefix("Project")]
    public class ProjectMemberController : BaseController
    {
        [Route("{projectId}/members")]
        [HttpPost]
        public async Task<HttpResponseMessage> Create(MembersModel model, int projectId)
        {
            if (!ModelState.IsValid) return this.InvalidModelState(ModelState);

            var members = model.Members;
            var newMembers = new List<ProjectAccess>();

            for (var i = 0; i < members.Count; i++)
            {
                var member = members[i];

                newMembers.Add(new ProjectAccess()
                {
                    UserId = member.UserId,
                    ProjectId = projectId,
                    AccessTypeId = 1
                });
            }

            DB.ProjectAccesses.AddRange(newMembers);

            await DB.SaveChangesAsync();

            return this.StatusOk();
        }
    }
}
