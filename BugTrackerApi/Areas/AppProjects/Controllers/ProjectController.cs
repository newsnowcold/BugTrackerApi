using BugTrackerApi.Areas.AppProjects.Models;
using BugTrackerApi.Controllers;
using DBLayer;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Validation;
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
        [Route("")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetList()
        {
            var projectList = DB.GET_list_projects(this.CurrentUserId);

            return StatusOk(projectList);
        }

        [Route("")]
        [HttpPost]
        public async Task<HttpResponseMessage> Create(ProjectModel model)
        {
            if (!ModelState.IsValid)
            {
                this.InvalidModelState(ModelState);
            }

            var newProj = new Project()
            {
                CreatedBy = this.CurrentUserId,
                DateCreated = DateTime.UtcNow,
                Name = model.Name,
                Description = model.Description
            };

            using (var context = DB)
            {
                using (var dbContextTransaction = context.Database.BeginTransaction())
                {
                    try
                    {
                        context.Projects.Add(newProj);

                        await context.SaveChangesAsync();

                        context.ProjectAccesses.Add(new ProjectAccess()
                        {
                            UserId = this.CurrentUserId,
                            ProjectId = newProj.Id,
                            AccessTypeId = 1
                        });

                        await context.SaveChangesAsync();

                        dbContextTransaction.Commit();
                    }
                    catch (DbEntityValidationException e)
                    {
                        dbContextTransaction.Rollback();

                        throw new Exception("Error while creating entry", e);
                    }
                }
            }

            return StatusOk(newProj);
        }

        [Route("{projectId}")]
        [HttpPut]
        public async Task<HttpResponseMessage> Update(ProjectModel model, int projectId)
        {
            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var project = DB.Projects.Where(a => a.Id == projectId).FirstOrDefault();

            if (project == null)
            {
                return StatusNotFound();
            }

            project.Name = model.Name;
            project.Description = model.Description;
            await DB.SaveChangesAsync();

            return StatusOk();
        }

    }
}
