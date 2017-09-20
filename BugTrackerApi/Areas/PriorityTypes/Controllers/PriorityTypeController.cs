using BugTrackerApi.ApiAttributes;
using BugTrackerApi.Controllers;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BugTrackerApi.Areas.IssuePriorityType.Controllers
{
    [CustomApiHandler]
    [Authorize]
    [ValidateUsers]
    [RoutePrefix("PriorityType")]
    public class PriorityTypeController : BaseController
    {

        [HttpGet]
        [Route("")]
        public async Task<HttpResponseMessage> GetList()
        {
            var issuePriorityTypes = DB.PriorityTypes.ToList();

            return StatusOk(issuePriorityTypes);
        }
    }
}
