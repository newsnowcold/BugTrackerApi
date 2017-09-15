using BugTrackerApi.Controllers;
using ErrorCatcher.ApiFilters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace BugTrackerApi.Areas.Users.Controllers
{
    [CustomApiHandler]
    [Authorize]
    [RoutePrefix("User")]
    public class UserController : BaseController
    {
        [Route("")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetList()
        {
            var users = DB.GET_list_users();

            return StatusOk(users);
        }
    }
}
