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
    [RoutePrefix("Issue")]
    public class IssueController : BaseController
    {

        [HttpGet]
        [Route("{projectId}")]
        public async Task<HttpResponseMessage> GetList(int projectId)
        {
            var result = DB.GET_list_issues(this.CurrentUserId, projectId);

            return StatusOk(result);
        }

        [HttpPost]
        [Route("{projectId}")]
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
        [Route("{projectId}/issue/{bugId}")]
        public async Task<HttpResponseMessage> UpdateStatus(UpdateIssueModel model, int projectId, int bugId)
        {
            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var issue = DB.Issues.Where(a => a.PriorityId == projectId && a.Id == bugId).FirstOrDefault();

            if (issue == null)
            {
                return StatusNotFound();
            }

            issue.StatusId = model.PriorityId;
            DB.SaveChanges();

            return StatusOk();
        }
    }
}
