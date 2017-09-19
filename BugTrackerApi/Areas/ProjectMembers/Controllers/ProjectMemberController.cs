using BugTrackerApi.Areas.ProjectMembers.Models;
using BugTrackerApi.Controllers;
using DBLayer;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
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
        [HttpGet]
        public async Task<HttpResponseMessage> GetList(int projectId)
        {
            var members = DB.GET_list_projectMembers(projectId);

            return StatusOk(members);
        }

        [Route("{projectId}/members")]
        [HttpPost]
        public async Task<HttpResponseMessage> Create(MembersModel model, int projectId)
        {
            if (!ModelState.IsValid) return this.InvalidModelState(ModelState);

            var members = model.Members;
            var newMembers = new List<ProjectAccess>();

            using (var context = DB)
            {
                using (var dbTrans = context.Database.BeginTransaction())
                {
                    try
                    {
                        var projectData = context.Projects.Where(a => a.Id == projectId).FirstOrDefault();

                        if (projectData == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.NotFound, "Can't find project");
                        }

                        var oldSetOfMembers = context.ProjectAccesses.Where(a => a.ProjectId == projectId && a.UserId != projectData.CreatedBy).ToList();
                        context.ProjectAccesses.RemoveRange(oldSetOfMembers);
                        await context.SaveChangesAsync();

                        for (var i = 0; i < members.Count; i++)
                        {
                            var member = members[i];

                            if (member.UserId == projectData.CreatedBy) continue;

                            newMembers.Add(new ProjectAccess()
                            {
                                UserId = member.UserId,
                                ProjectId = projectId,
                                AccessTypeId = 1
                            });
                        }

                        context.ProjectAccesses.AddRange(newMembers);

                        await DB.SaveChangesAsync();
                        dbTrans.Commit();
                    }
                    catch (DbEntityValidationException ex)
                    {
                        dbTrans.Rollback();
                        throw new Exception("Error while creating entry", ex);
                    }
                }
            }

            return this.StatusOk();
        }
    }
}
