using BugTrackerApi.Controllers;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BugTrackerApi.Areas.IssueStatuses.Controllers
{
    [CustomApiHandler]
    [Authorize]
    [RoutePrefix("Status")]
    public class StatusController : BaseController
    {

        [HttpGet]
        [Route("")]
        public async Task<HttpResponseMessage> GetList()
        {
            var statuses = DB.IssueStatuses.ToList();

            return StatusOk(statuses);
        }

    }
}
