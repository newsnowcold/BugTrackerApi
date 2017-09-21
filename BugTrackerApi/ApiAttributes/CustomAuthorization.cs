using DBLayer;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace BugTrackerApi.ApiAttributes
{
    public class CustomAuthorization : AuthorizeAttribute
    {
        public string Roles { get; set; }

        public CustomAuthorization()
        {

        }

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var identity = HttpContext.Current.User.Identity;

            var userManager = actionContext.Request
                         .GetOwinContext().GetUserManager<ApplicationUserManager>();

            string[] roles = Roles.Split(',');

            var noAccessRights = true;
            for (var i = 0; i < roles.Length; i++)
            {
                var role = roles[i].Trim();

                if (userManager.IsInRole(identity.GetUserId(), role))
                {
                    noAccessRights = false;
                    break;
                }
            }

            if (noAccessRights)
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Forbidden);
            }

            return true;
        }

    }
}