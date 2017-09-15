using BugTrackerApi.Controllers;
using EmailSender;
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

        // Send an invite email
        [Route("Invite")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<HttpResponseMessage> Invite()
        {
            var emailService = new EmailService();
            emailService.Subject = "Test subject";
            emailService.Body = " Test Body";
            emailService.Send("testnidarrel@mailinator.com", "tst ni darrel");

            return StatusOk();
        }
    }
}
