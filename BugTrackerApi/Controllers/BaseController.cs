using DBLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BugTrackerApi.Controllers
{
    public class BaseController : ApiController
    {
        private BugTrackerEntities db = new BugTrackerEntities();

        public BaseController()
        {
        }

        public BugTrackerEntities DB
        {
            get { return db; }
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
