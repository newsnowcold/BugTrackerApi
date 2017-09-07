using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BugTrackerApi.Services
{
    public class UserManagerService
    {

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }
        private UserManager<IdentityUser> _userManagerNoUser = new UserManager<IdentityUser>(new UserStore<IdentityUser>());

        public UserManagerService()
        {

        }

        private HttpRequest _request
        {
            get
            {
                return HttpContext.Current.Request;
            }
        }
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ??
                    this._request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }


        private ApplicationUserManager _userManager;

        //public UserManagerHelper(ApplicationUserManager userManager,
        //ISecureDataFormat<AuthenticationTicket> accessTokenFormat)
        //{
        //    UserManager = userManager;
        //    AccessTokenFormat = accessTokenFormat;
        //}

    }
}