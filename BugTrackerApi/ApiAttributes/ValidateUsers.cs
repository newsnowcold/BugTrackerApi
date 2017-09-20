using DBLayer;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace BugTrackerApi.ApiAttributes
{
    public class ValidateUsers : AuthorizeAttribute
    {
        public ValidateUsers()
        {

        }

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {

            var identity = HttpContext.Current.User.Identity;
            using (BugTrackerEntities _db = new BugTrackerEntities())
            {
                if (identity.IsAuthenticated)
                {
                    var userManager = actionContext.Request
                         .GetOwinContext().GetUserManager<ApplicationUserManager>();

                    var user = userManager.FindById(identity.GetUserId());

                    if (!user.EmailConfirmed)
                    {
                        return false;
                    }
                    else
                    {
                        var appUser = _db.Users.Where(a => a.Id == user.UserId).First();

                        if (appUser.IsDeleted)
                        {
                            return false;
                        }
                    }
                }
            }

            return base.IsAuthorized(actionContext);
        }
    }
}