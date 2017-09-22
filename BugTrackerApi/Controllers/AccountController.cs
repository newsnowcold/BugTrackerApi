using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using BugTrackerApi.Models;
using BugTrackerApi.Providers;
using BugTrackerApi.Results;
using DBLayer;
using System.Linq;
using ErrorCatcher.ApiFilters;
using System.Net;
using System.Data.Entity.Validation;
using System.Web.Security;
using Newtonsoft.Json;
using BugTrackerApi.Services;
using EmailSender;

namespace BugTrackerApi.Controllers
{
    [Authorize]
    [CustomApiHandler]
    [RoutePrefix("Account")]
    public class AccountController : BaseController
    {
        private const string LocalLoginProvider = "Local";
        private ApplicationUserManager _userManager;

        // Application Roles
        private string _roleSuperAdmin = "SuperAdmin";
        private string _roleAdmin = "Admin";
        private string _roleUser = "User";

        public AccountController()
        {
        }

        public AccountController(ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        {
            UserManager = userManager;
            AccessTokenFormat = accessTokenFormat;
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }


        [HttpGet]
        [Authorize]
        [Route("")]
        public async Task<IHttpActionResult> UserDetails()
        {
            var user = DB.GET_user(this.CurrentUserId).First();

            return Ok(user);
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("RequestResetPassword")]
        public async Task<HttpResponseMessage> RequestToResetPassword(CustomRequestPassword model, [FromUri]string redirectUrl = "")
        {
            if (!ModelState.IsValid)
            {
                return InvalidModelState(ModelState);
            }

            var user = await UserManager.FindByEmailAsync(model.Email);

            if (user == null) {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            var token = UserManager.GeneratePasswordResetToken(user.Id);

            SendRequestPasswordEmail(redirectUrl, token, model.Email, "");

            return StatusOk();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("SetNewPassword")]
        public async Task<IHttpActionResult> SetNewPassword(CustomChangePasswordBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await UserManager.FindByEmailAsync(model.EmailAddress);

            string code = this.NormalizeToken(model.Token);

            var changePass = await _userManager.ResetPasswordAsync(user.Id,
                code, model.NewPassword);

            if (!changePass.Succeeded)
            {
                return GetErrorResult(changePass);
            }

            return Ok();
        }


        [HttpGet]
        [AllowAnonymous]
        [Route("Verify/{userId}/{*token}")]
        public async Task<IHttpActionResult> Verify(string userId,
                                                    string token,
                                                    [FromUri]string url)
        {
            if (userId == null || token == null)
            {
                return BadRequest();
            }

            IdentityResult identityResult = new IdentityResult();

            try
            {
                string decodedToken = HttpUtility.UrlDecode(token).Replace(" ", "+");
                identityResult = await UserManager.ConfirmEmailAsync(userId, decodedToken);

            }
            catch (InvalidOperationException ioe)
            {
                // ConfirmEmailAsync throws when the userId is not found.
                return BadRequest();
            }


            // CHeck if successfull
            if (!identityResult.Succeeded)
            {
                var errors = identityResult.Errors.ToList();

                foreach (var error in errors)
                {
                    ModelState.AddModelError(" ", error.ToString());
                }

                return BadRequest(ModelState);
            }

            //var user = await UserManager.FindByIdAsync(userId);
            return Redirect(url);
        }

        // GET api/Account/UserInfo
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [Route("UserInfo")]
        public UserInfoViewModel GetUserInfo()
        {
            ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

            return new UserInfoViewModel
            {
                Email = User.Identity.GetUserName(),
                HasRegistered = externalLogin == null,
                LoginProvider = externalLogin != null ? externalLogin.LoginProvider : null
            };
        }

        // POST api/Account/Logout
        [Route("Logout")]
        public IHttpActionResult Logout()
        {
            Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            return Ok();
        }

        // GET api/Account/ManageInfo?returnUrl=%2F&generateState=true
        [Route("ManageInfo")]
        public async Task<ManageInfoViewModel> GetManageInfo(string returnUrl, bool generateState = false)
        {
            IdentityUser user = await UserManager.FindByIdAsync(User.Identity.GetUserId());

            if (user == null)
            {
                return null;
            }

            List<UserLoginInfoViewModel> logins = new List<UserLoginInfoViewModel>();

            foreach (IdentityUserLogin linkedAccount in user.Logins)
            {
                logins.Add(new UserLoginInfoViewModel
                {
                    LoginProvider = linkedAccount.LoginProvider,
                    ProviderKey = linkedAccount.ProviderKey
                });
            }

            if (user.PasswordHash != null)
            {
                logins.Add(new UserLoginInfoViewModel
                {
                    LoginProvider = LocalLoginProvider,
                    ProviderKey = user.UserName,
                });
            }

            return new ManageInfoViewModel
            {
                LocalLoginProvider = LocalLoginProvider,
                Email = user.UserName,
                Logins = logins,
                ExternalLoginProviders = GetExternalLogins(returnUrl, generateState)
            };
        }

        // POST Account/ChangePassword
        [Route("ChangePassword")]
        public async Task<IHttpActionResult> ChangePassword(ChangePasswordBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await UserManager.ChangePasswordAsync(User.Identity.GetUserId(), model.OldPassword,
                model.NewPassword);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // POST api/Account/SetPassword
        [Route("SetPassword")]
        public async Task<IHttpActionResult> SetPassword(SetPasswordBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await UserManager.AddPasswordAsync(User.Identity.GetUserId(), model.NewPassword);

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // POST api/Account/AddExternalLogin
        [Route("AddExternalLogin")]
        public async Task<IHttpActionResult> AddExternalLogin(AddExternalLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

            AuthenticationTicket ticket = AccessTokenFormat.Unprotect(model.ExternalAccessToken);

            if (ticket == null || ticket.Identity == null || (ticket.Properties != null
                && ticket.Properties.ExpiresUtc.HasValue
                && ticket.Properties.ExpiresUtc.Value < DateTimeOffset.UtcNow))
            {
                return BadRequest("External login failure.");
            }

            ExternalLoginData externalData = ExternalLoginData.FromIdentity(ticket.Identity);

            if (externalData == null)
            {
                return BadRequest("The external login is already associated with an account.");
            }

            IdentityResult result = await UserManager.AddLoginAsync(User.Identity.GetUserId(),
                new UserLoginInfo(externalData.LoginProvider, externalData.ProviderKey));

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // POST api/Account/RemoveLogin
        [Route("RemoveLogin")]
        public async Task<IHttpActionResult> RemoveLogin(RemoveLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result;

            if (model.LoginProvider == LocalLoginProvider)
            {
                result = await UserManager.RemovePasswordAsync(User.Identity.GetUserId());
            }
            else
            {
                result = await UserManager.RemoveLoginAsync(User.Identity.GetUserId(),
                    new UserLoginInfo(model.LoginProvider, model.ProviderKey));
            }

            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            return Ok();
        }

        // GET api/Account/ExternalLogin
        [OverrideAuthentication]
        [HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("ExternalLogin", Name = "ExternalLogin")]
        public async Task<IHttpActionResult> GetExternalLogin(string provider, string error = null)
        {
            if (error != null)
            {
                return Redirect(Url.Content("~/") + "#error=" + Uri.EscapeDataString(error));
            }

            if (!User.Identity.IsAuthenticated)
            {
                return new ChallengeResult(provider, this);
            }

            ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

            if (externalLogin == null)
            {
                return InternalServerError();
            }

            if (externalLogin.LoginProvider != provider)
            {
                Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
                return new ChallengeResult(provider, this);
            }

            ApplicationUser user = await UserManager.FindAsync(new UserLoginInfo(externalLogin.LoginProvider,
                externalLogin.ProviderKey));

            bool hasRegistered = user != null;

            if (hasRegistered)
            {
                Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

                ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(UserManager,
                   OAuthDefaults.AuthenticationType);
                ClaimsIdentity cookieIdentity = await user.GenerateUserIdentityAsync(UserManager,
                    CookieAuthenticationDefaults.AuthenticationType);

                AuthenticationProperties properties = ApplicationOAuthProvider.CreateProperties(user.UserName, user.UserId);
                Authentication.SignIn(properties, oAuthIdentity, cookieIdentity);
            }
            else
            {
                IEnumerable<Claim> claims = externalLogin.GetClaims();
                ClaimsIdentity identity = new ClaimsIdentity(claims, OAuthDefaults.AuthenticationType);
                Authentication.SignIn(identity);
            }

            return Ok();
        }

        // GET api/Account/ExternalLogins?returnUrl=%2F&generateState=true
        [AllowAnonymous]
        [Route("ExternalLogins")]
        public IEnumerable<ExternalLoginViewModel> GetExternalLogins(string returnUrl, bool generateState = false)
        {
            IEnumerable<AuthenticationDescription> descriptions = Authentication.GetExternalAuthenticationTypes();
            List<ExternalLoginViewModel> logins = new List<ExternalLoginViewModel>();

            string state;

            if (generateState)
            {
                const int strengthInBits = 256;
                state = RandomOAuthStateGenerator.Generate(strengthInBits);
            }
            else
            {
                state = null;
            }

            foreach (AuthenticationDescription description in descriptions)
            {
                ExternalLoginViewModel login = new ExternalLoginViewModel
                {
                    Name = description.Caption,
                    Url = Url.Route("ExternalLogin", new
                    {
                        provider = description.AuthenticationType,
                        response_type = "token",
                        client_id = Startup.PublicClientId,
                        redirect_uri = new Uri(Request.RequestUri, returnUrl).AbsoluteUri,
                        state = state
                    }),
                    State = state
                };
                logins.Add(login);
            }

            return logins;
        }

        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(RegisterBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (model.SecretKey != "KanangDiliMakalimtan")
            {
                return Unauthorized();
            }

            using (var context = DB)
            {
                using (var dbTrans = context.Database.BeginTransaction())
                {
                    try
                    {
                        var user = context.Users.Add(new User()
                        {
                            FirstName = model.FirstName,
                            LastName = model.LastName,
                            JoinedDate = DateTime.UtcNow
                        });

                        //await context.SaveChangesAsync();

                        var aspUser = new ApplicationUser() { UserName = model.Email, Email = model.Email };

                        IdentityResult result = await UserManager.CreateAsync(aspUser, model.Password);

                        if (!result.Succeeded)
                        {
                            return GetErrorResult(result);
                        }
                        else
                        {
                            if (await this.SetUpUserRoles(context))
                            {
                                var newAspUser = context.AspNetUsers.Where(a => a.Id == aspUser.Id).First();

                                newAspUser.UserId = user.Id;
                                newAspUser.EmailConfirmed = true;
                                

                                UserManager.AddToRole(newAspUser.Id, this._roleSuperAdmin);
                            }
                            else
                            {
                                throw new Exception("There is a problem setting up the roles.");
                            }
                        }
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


            return Ok();
        }

        // POST api/Account/RegisterExternal
        [OverrideAuthentication]
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [Route("RegisterExternal")]
        public async Task<IHttpActionResult> RegisterExternal(RegisterExternalBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var info = await Authentication.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return InternalServerError();
            }

            var user = new ApplicationUser() { UserName = model.Email, Email = model.Email };

            IdentityResult result = await UserManager.CreateAsync(user);
            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }

            result = await UserManager.AddLoginAsync(user.Id, info.Login);
            if (!result.Succeeded)
            {
                return GetErrorResult(result);
            }
            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && _userManager != null)
            {
                _userManager.Dispose();
                _userManager = null;
            }

            base.Dispose(disposing);
        }

        #region Helpers

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }

        private class ExternalLoginData
        {
            public string LoginProvider { get; set; }
            public string ProviderKey { get; set; }
            public string UserName { get; set; }

            public IList<Claim> GetClaims()
            {
                IList<Claim> claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.NameIdentifier, ProviderKey, null, LoginProvider));

                if (UserName != null)
                {
                    claims.Add(new Claim(ClaimTypes.Name, UserName, null, LoginProvider));
                }

                return claims;
            }

            public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
            {
                if (identity == null)
                {
                    return null;
                }

                Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

                if (providerKeyClaim == null || String.IsNullOrEmpty(providerKeyClaim.Issuer)
                    || String.IsNullOrEmpty(providerKeyClaim.Value))
                {
                    return null;
                }

                if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
                {
                    return null;
                }

                return new ExternalLoginData
                {
                    LoginProvider = providerKeyClaim.Issuer,
                    ProviderKey = providerKeyClaim.Value,
                    UserName = identity.FindFirstValue(ClaimTypes.Name)
                };
            }
        }

        private static class RandomOAuthStateGenerator
        {
            private static RandomNumberGenerator _random = new RNGCryptoServiceProvider();

            public static string Generate(int strengthInBits)
            {
                const int bitsPerByte = 8;

                if (strengthInBits % bitsPerByte != 0)
                {
                    throw new ArgumentException("strengthInBits must be evenly divisible by 8.", "strengthInBits");
                }

                int strengthInBytes = strengthInBits / bitsPerByte;

                byte[] data = new byte[strengthInBytes];
                _random.GetBytes(data);
                return HttpServerUtility.UrlTokenEncode(data);
            }
        }

        private async Task<bool> SetUpUserRoles(BugTrackerEntities context)
        {
            var roles = context.AspNetRoles.ToList();

            var rSuperAdmin = roles.Where(a => a.Name == this._roleSuperAdmin).FirstOrDefault();
            var rAdmin = roles.Where(a => a.Name == this._roleAdmin).FirstOrDefault();
            var rUser = roles.Where(a => a.Name == this._roleUser).FirstOrDefault();

            // Setup super admin role
            if (rSuperAdmin == null)
            {
                context.AspNetRoles.Add(new AspNetRole()
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = this._roleSuperAdmin
                });
            }

            // Setup admin role
            if (rAdmin == null)
            {
                context.AspNetRoles.Add(new AspNetRole()
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = this._roleAdmin
                });
            }

            // Setup user role
            if (rUser == null)
            {
                context.AspNetRoles.Add(new AspNetRole()
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = this._roleUser
                });
            }

            await context.SaveChangesAsync();

            return true;
        }

        private void SendRequestPasswordEmail(string url, 
                                         string token, 
                                         string recipientEmail, 
                                         string recipientName)
        {
            var htmlContent = ChangePasswordEmailContent();
            var link = $"{url}?token={token}";

            htmlContent = htmlContent.Replace("{{ChangePassLink}}", link);

            var emailService = new EmailService();
            emailService.Subject = "Request for reset password";
            emailService.Body = htmlContent;
            emailService.Send(recipientEmail, recipientName, true);
        }

        private string ChangePasswordEmailContent()
        {
            var file = new LocalFileService("\\EmailTemplates\\RequestChangePasswordTemplate.html");

            return file.GetStringOfFile;
        }

        public string NormalizeToken(string rawToken)
        {
            string code = HttpUtility.HtmlDecode(rawToken).Replace(" ", "+");
            code = $"{code}==";

            return code;
        }

        #endregion
    }
}
