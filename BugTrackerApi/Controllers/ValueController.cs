using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BugTrackerApi.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("Value")]
    public class ValueController : ApiController
    {

        [HttpGet]
        [Route("Test")]
        public IHttpActionResult Test()
        {
            return Ok("Ok");
        }
    }
}
