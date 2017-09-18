using BugTrackerApi.Areas.Users.Models;
using BugTrackerApi.Controllers;
using BugTrackerApi.Models;
using BugTrackerApi.Services;
using DBLayer;
using EmailSender;
using ErrorCatcher.ApiFilters;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity.Validation;
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

        [Route("complete-registration")]
        [Authorize]
        public async Task<HttpResponseMessage> CompleteRegistration(CompleteRegistrationModel model)
        {
            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var user = new User();

            using (var context = DB)
            {
                using (var dbTrans = context.Database.BeginTransaction())
                {
                    try
                    {
                        user.FirstName = model.FirstName;
                        user.LastName = model.LastName;
                        user.AllowNotification = false;
                        user.JoinedDate = DateTime.UtcNow;
                        context.Users.Add(user);
                        await DB.SaveChangesAsync();

                        var aspNetUser = context.AspNetUsers.Where(a => a.Id == this.CurrentAspNetUserId).FirstOrDefault();

                        if (aspNetUser == null)
                        {
                            dbTrans.Rollback();
                            return StatusNotFound();
                        }

                        aspNetUser.UserId = user.Id;
                        await context.SaveChangesAsync();

                        dbTrans.Commit();
                    }
                    catch (DbEntityValidationException e)
                    {
                        dbTrans.Rollback();
                        throw new Exception("Error while creating entry", e);
                    }
                }
            }

            return StatusOk();

        }


        // Send an invite email
        [Route("Invite")]
        [HttpPost]
        public async Task<HttpResponseMessage> Invite(InviteUserModel model, [FromUri]string redirectUrl)
        {

            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var newUser = await UserManager.FindByEmailAsync(model.EmailAddress.Trim());
            var token = "";

            if (newUser != null)
            {
                token = await UserManager.GenerateEmailConfirmationTokenAsync(newUser.Id);
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

                token = await UserManager.GenerateEmailConfirmationTokenAsync(newAddedUser.Id);
                SendInviteEmail(model.EmailAddress,
                                "",
                                newAddedUser.Id,
                                token,
                                redirectUrl,
                                generatedPass);
            }

            return StatusOk();
        }




        // Helper functinos/methods
        private void SendInviteEmail(string recipientEmail,
                                     string recipientName,
                                     string userId,
                                     string token,
                                     string redirectUrl,
                                     string defaultPasword = "")
        {
            var appDomain = ConfigurationManager.AppSettings["AppDomain"];
            var inviteEmailUrl = $"{appDomain}/verify/{userId}/{token}?url={redirectUrl}";


            // Get  Email Content 
            var htmlContent = InviteEmailContent(inviteEmailUrl);
            htmlContent = htmlContent
                .Replace("{{AcceptLink}}", redirectUrl)
                .Replace("{{DefaultUserName}}", recipientEmail)
                .Replace("{{DefaultPassword}}", defaultPasword);

            var emailService = new EmailService();
            emailService.Subject = "Test subject";
            emailService.Body = htmlContent;
            emailService.Send(recipientEmail, recipientName, true);
        }

        private string InviteEmailContent(string redirectUrl)
        {
            var file = new LocalFileService("\\EmailTemplates\\InviteUserEmailTemplate.html");

            return file.GetStringOfFile;
        }
    }
}
