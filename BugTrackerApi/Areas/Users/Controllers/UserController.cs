using BugTrackerApi.Areas.Users.Models;
using BugTrackerApi.Controllers;
using BugTrackerApi.Models;
using BugTrackerApi.Services;
using EmailSender;
using ErrorCatcher.ApiFilters;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Security;

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
        public async Task<HttpResponseMessage> Invite(InviteUserModel model, [FromUri]string redirectUrl)
        {

            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var newUser = await UserManager.FindByEmailAsync(model.EmailAddress.Trim());
            var token = await UserManager.GenerateEmailConfirmationTokenAsync(this.CurrentAspNetUserId);
            if (newUser != null)
            {
                SendInviteEmail(model.EmailAddress,
                                "",
                                newUser.Id,
                                token,
                                redirectUrl);
            }
            else
            {
                var user = new ApplicationUser() { UserName = model.EmailAddress.Trim(), Email = model.EmailAddress.Trim() };

                var generatedPass = Membership.GeneratePassword(8, 2);
                IdentityResult result = UserManager.Create(user, generatedPass);

                var newAddedUser = await UserManager.FindByEmailAsync(model.EmailAddress.Trim());

                SendInviteEmail(model.EmailAddress,
                                "",
                                newAddedUser.Id,
                                token,
                                redirectUrl);
            }

            return StatusOk();
        }

        private void SendInviteEmail(string recipientEmail, string recipientName, string userId, string token, string redirectUrl)
        {
            var appDomain = ConfigurationManager.AppSettings["AppDomain"];
            var inviteEmailUrl = $"{appDomain}/verify/{userId}/{token}?url={redirectUrl}";

            var emailService = new EmailService();
            emailService.Subject = "Test subject";
            emailService.Body = InviteEmailContent(inviteEmailUrl);
            emailService.Send(recipientEmail, recipientName);
        }

        private string InviteEmailContent(string redirectUrl)
        {
            var file = new LocalFileService("~EmailTemplates/InviteUserEmailTemplate.html");

            var template = file.GetStringOfFile;
            template.Replace("{{AcceptLink}}", redirectUrl);

            return template;
        }
    }
}
