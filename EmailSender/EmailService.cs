using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace EmailSender
{
    public class EmailService
    {
        private string _fromEmail;
        private string _fromPassword;
        private string _fromName;

        public string Subject = "";
        public string Body = "";

        public EmailService()
        {
            this._fromEmail = ConfigurationManager.AppSettings["serviceEmail"];
            this._fromPassword = ConfigurationManager.AppSettings["serviceEmailPassword"];
            this._fromName = ConfigurationManager.AppSettings["serviceEmailName"];
        }

        public EmailService(string fromEmail, string fromPassword, string fromName)
        {
            this._fromEmail = fromEmail;
            this._fromPassword = fromPassword;
            this._fromName = fromName;
        }

        public void Send(string toEmail, string toName, bool isHtml)
        {
            var fromAddress = new MailAddress(this._fromEmail, this._fromName);
            var toAddress = new MailAddress(toEmail, toName);

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(fromAddress.Address, this._fromPassword),
                Timeout = 20000
                
            };


            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = Subject,
                Body = Body,
                IsBodyHtml = isHtml
            })
            {
                smtp.Send(message);
            }
        }
    }
}
