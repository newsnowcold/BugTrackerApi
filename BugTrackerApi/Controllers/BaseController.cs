using DBLayer;
using ErrorCatcher.Interface;
using ErrorCatcher.Methods;
using ErrorCatcher.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using BugTrackerApi.Models;
using BugTrackerApi.Services;

namespace BugTrackerApi.Controllers
{
    public class BaseController : ApiController
    {
        public ISendCustomError customResponseMsgService = new SendCustomResponse();
        private BugTrackerEntities db;
        private ApplicationUserManager _userManager = new UserManagerService().UserManager;

        public BaseController()
        {
        }

        public BugTrackerEntities DB
        {
            get
            {
                if (db == null)
                {
                    db = new BugTrackerEntities();
                    db.Configuration.ProxyCreationEnabled = false;
                }

                return db;
            }
        }

        public HttpResponseMessage InvalidModelState(ModelStateDictionary modelState)
        {
            List<Error> errors = new List<Error>();

            foreach (var item in modelState)
            {
                foreach (var error in item.Value.Errors)
                {
                    string errorMessage = "The request is invalid";
                    string errorReason = error.Exception?.Message ?? error.ErrorMessage;

                    errors.Add(new Error()
                    {
                        Message = errorMessage,
                        Reason = $"[{item.Key}] - {errorReason}",
                        Domain = Request.RequestUri.AbsoluteUri
                    });
                }
            }

            return customResponseMsgService
                .ReturnResponse(Request,
                                HttpStatusCode.BadRequest,
                                "The request is invalid",
                                errors);
        }

        public HttpResponseMessage StatusOk()
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        public HttpResponseMessage StatusOk<T>(T arg)
        {
            return Request.CreateResponse(HttpStatusCode.OK, arg);
        }


        public string CurrentAspNetUserId
        {
            get
            {
                return RequestContext.Principal.Identity.GetUserId();
            }
        }

        public int CurrentUserId
        {
            get
            {
                return this._userManager.FindById(CurrentAspNetUserId).UserId;
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && db != null)
            {
                db.Dispose();
                db = null;
            }

            base.Dispose(disposing);
        }


    }
}
