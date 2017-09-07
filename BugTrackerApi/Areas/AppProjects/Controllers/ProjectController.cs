using BugTrackerApi.Areas.AppProjects.Models;
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

namespace BugTrackerApi.Areas.AppProjects.Controllers
{
    [CustomApiHandler]
    [RoutePrefix("Project")]
    [Authorize]
    public class ProjectController : BaseController
    {
        [Route("Create")]
        public async Task<HttpResponseMessage> Create(ProjectModel model)
        {
            if (!ModelState.IsValid)
            {
                this.InvalidModelState(ModelState);
            }

            DB.Projects.Add(new Project()
            {
                CreatedBy = this.CurrentUserId,
                DateCreated = DateTime.UtcNow,
                Name = model.Name,
                Description = model.Description
            });

            await DB.SaveChangesAsync();

            return this.StatusOk();
        }

    }
}
