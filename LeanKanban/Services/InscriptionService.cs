using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;
using System.Security.Permissions;

namespace LeanKanban
{
    public interface IInscriptionService
    {
        bool SignUp(string firstName, string lastName, string email);
        string GetInscription(Guid code);
        void ValidateInscription(Guid code, string login, string pwdHash);
        void RememberPasword(string email);
        bool IsEmailAvailable(string email);
    }

    [Service(Name = "InscriptionService")]
    public class InscriptionService : IInscriptionService //, IInitializable, ISingleton
    {
        bool IInscriptionService.SignUp(string firstName, string lastName, string email)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            List<User> users = dm.GetEntities<User>(new QueryCriteria(User.Fields.Email, ComparisonOperator.Equal, email.ToLower().Trim()));

            User user;

            if (users.Count == 0)
            {
                IEntityManager em = dm as IEntityManager;

                user = em.CreateInstance<User>();

                user.FirstName = firstName;
                user.LastName = lastName;

                user.Email = email;
                user.Status = EnumUserStatus.Pending;
                user.VerificationCode = Guid.NewGuid();

                dm.SaveTransactional();
            }
            else
            {
                return false;
            }

            var mailService = ExecutingContext.GetService<IAspectizeSMTPService>(ServiceName.MyMailService);

            string applicationLink = string.Format(@"{0}{1}/app.ashx?@AuthClientService.ConfirmUserCommand&code={2}", ExecutingContext.CurrentHostUrl, ExecutingContext.CurrentApplicationName, user.VerificationCode);

            string subject = "Welcome to Application LeanKaban";

            string body = string.Format(@"To confirm your subscription, click on thr following link: <a href='{0}' target='_blank'>Application</a>", applicationLink);

            mailService.SendMailSimple(false, email, subject, body);

            return true;
        }


        string IInscriptionService.GetInscription(Guid code)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            QueryCriteria queryCriteria = new QueryCriteria(User.Fields.VerificationCode, ComparisonOperator.Equal, code);

            List<User> users = dm.GetEntities<User>(queryCriteria);

            if (users.Count == 1)
            {
                User user = users[0];

                if (user.Status != EnumUserStatus.Blocked)
                {
                    return user.Email;
                }
            }

            return null;
        }

        void IInscriptionService.ValidateInscription(Guid code, string login, string pwdHash)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            QueryCriteria queryCriteria = new QueryCriteria(User.Fields.VerificationCode, ComparisonOperator.Equal, code);
            queryCriteria = queryCriteria.AND(new QueryCriteria(User.Fields.Email, ComparisonOperator.Equal, login.ToLower().Trim()));

            List<User> users = dm.GetEntities<User>(queryCriteria);

            if (users.Count == 1)
            {
                User user = users[0];

                user.Password = pwdHash;
                user.Status = EnumUserStatus.Valid;
                user.VerificationCode = null;

                dm.SaveTransactional();
            }
        }

        void IInscriptionService.RememberPasword(string email)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            List<User> users = dm.GetEntities<User>(new QueryCriteria(User.Fields.Email, ComparisonOperator.Equal, email.ToLower().Trim()));

            if (users.Count == 1)
            {
                User user = users[0];

                if (user.Status != EnumUserStatus.Blocked)
                {
                    user.Status = EnumUserStatus.Pending;
                    user.VerificationCode = Guid.NewGuid();

                    var mailService = ExecutingContext.GetService<IAspectizeSMTPService>(ServiceName.MyMailService);

                    string subject = "Remember password";

                    string applicationLink = string.Format(@"{0}{1}/app.ashx?@AuthClientService.ConfirmUserCommand&code={2}", ExecutingContext.CurrentHostUrl, ExecutingContext.CurrentApplicationName, user.VerificationCode);
                    
                    string body = string.Format(@"Click on the following link to generate a new password: <a href='{0}' target='_blank'>New password</a>", applicationLink);

                    mailService.SendMailSimple(false, email, subject, body);

                    dm.SaveTransactional();
                }
            }
        }

        bool IInscriptionService.IsEmailAvailable(string email)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            List<User> users = dm.GetEntities<User>(new QueryCriteria(User.Fields.Email, ComparisonOperator.Equal, email.ToLower().Trim()));

            return (users.Count == 0);
        }



    }


}
