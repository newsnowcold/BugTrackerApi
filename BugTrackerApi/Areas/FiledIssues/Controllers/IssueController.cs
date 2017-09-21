using BugTrackerApi.ApiAttributes;
using BugTrackerApi.Areas.FiledIssue.Models;
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

namespace BugTrackerApi.Areas.FiledIssue.Controllers
{
    [CustomApiHandler]
    [Authorize]
    [ValidateUsers]
    [RoutePrefix("Issue")]
    public class IssueController : BaseController
    {

        [HttpGet]
        [Route("Project/{projectId}")]
        public async Task<HttpResponseMessage> GetList(int projectId)
        {
            var result = DB.GET_list_issues(this.CurrentUserId, projectId);

            return StatusOk(result);
        }

        [HttpPost]
        [Route("Project/{projectId}")]
        public async Task<HttpResponseMessage> Create(IssueModel model, int projectId)
        {
            if (!ModelState.IsValid) return this.InvalidModelState(ModelState);

            var statusOpen = DB.IssueStatuses.Where(a => a.Status.ToLower().Contains("open"))
                                .Select(a => a.Id).FirstOrDefault();

            DB.Issues.Add(new Issue()
            {
                Title = model.Title,
                Description = model.Description,
                CreatedBy = this.CurrentUserId,
                DateCreated = DateTime.UtcNow,
                ProjectId = projectId,
                PriorityId = model.PriorityId,
                StatusId = statusOpen
            });

            await DB.SaveChangesAsync();

            return StatusOk();
        }

        [HttpPatch]
        [Route("Project/{projectId}")]
        public async Task<HttpResponseMessage> UpdateStatus(UpdateStatusModel model, int projectId)
        {
            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var issue = DB.Issues.Where(a => a.ProjectId == projectId && a.Id == model.IssueId).FirstOrDefault();

            if (issue == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Can't find issue/bug ticket.");
            }

            issue.StatusId = model.StatusId;
            issue.UpdatedBy = this.CurrentUserId;
            issue.LastUpdateDate = DateTime.UtcNow;
            issue.ResolutionSummary = model.ResolutionSummary;

            DB.SaveChanges();

            return StatusOk();
        }

        [HttpPut]
        [Route("Project/{projectId}")]
        public async Task<HttpResponseMessage> Update(UpdateIssueModel model, int projectId)
        {
            if (!ModelState.IsValid) return InvalidModelState(ModelState);

            var issue = DB.Issues.Where(a => a.Id == model.Id && a.ProjectId == projectId).FirstOrDefault();

            if (issue == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Can't find issue/bug ticket.");
            }

            issue.Title = model.Title;
            issue.Description = model.Description;
            issue.PriorityId = model.PriorityId;
            issue.LastUpdateDate = DateTime.UtcNow;
            issue.UpdatedBy = this.CurrentUserId;

            await DB.SaveChangesAsync();

            return StatusOk();
        }

        [HttpDelete]
        [CustomAuthorization(Roles = "Admin, SuperAdmin")]
        [Route("Project/{projectId}/{issueId}")]
        public async Task<HttpResponseMessage> Delete(int projectId, int issueId)
        {
            var issue = DB.Issues.Where(a => a.Id == issueId && a.ProjectId == projectId).FirstOrDefault();

            if (issue == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Can't find issue/bug ticket.");
            }

            issue.IsDeleted = true;
            issue.DeletedDate = DateTime.UtcNow;
            issue.DeletedBy = this.CurrentUserId;

            DB.SaveChanges();

            return StatusOk();
        }
    }
}
