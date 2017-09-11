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

            DB.Issues.Add(new Issue()
            {
                Title = model.Title,
                Description = model.Description,
                CreatedBy = this.CurrentUserId,
                DateCreated = DateTime.UtcNow,
                ProjectId = projectId
            });

            await DB.SaveChangesAsync();

            return StatusOk();
        }
    }
}
