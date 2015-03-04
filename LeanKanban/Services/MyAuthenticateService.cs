using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;

namespace LeanKanban
{
    [Service(Name = "MyAuthenticateService")]
    public class MyAuthenticateService : IAuthentication, IUserProfile, IPersistentAuthentication //, IInitializable, ISingleton
    {
        AspectizeUser IAuthentication.Authenticate(string userName, string secret, AuthenticationProtocol protocol, HashHelper.Algorithm algorithm, string chalenge)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            IEntityManager em = dm as IEntityManager;

            List<User> users = dm.GetEntities<User>(new QueryCriteria(User.Fields.Email, ComparisonOperator.Equal, userName.ToLower().Trim()));

            if (users.Count > 0)
            {
                User user = users[0];

                bool match = PasswordHasher.CheckResponse(user.Password, chalenge, algorithm, secret);

                if (match && user.Status != EnumUserStatus.Blocked)
                {
                    Dictionary<string, object> dicoProfiles = new Dictionary<string, object>();

                    List<string> roles = new List<string>();
                    roles.Add("Registered");

                    return AspectizeUser.GetAuthenticatedUser(user.Id.ToString("N"), null, roles.ToArray(), dicoProfiles);
                }
            }

            return AspectizeUser.GetUnAuthenticatedUser();
        }

        DataSet IUserProfile.GetUserProfile()
        {
            AspectizeUser aspectizeUser = ExecutingContext.CurrentUser;

            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            IEntityManager em = dm as IEntityManager;

            if (aspectizeUser.IsAuthenticated)
            {
                var userId = new Guid(aspectizeUser.UserId.ToString());

                User user = dm.GetEntity<User>(userId);

                var roleRelations = new List<IRoleRelationQuery>();

                roleRelations.Add(new RoleRelationQuery<User, BoardUser>());

                dm.LoadEntitiesGraph<User>(roleRelations, userId);

                CurrentUser currentUser = em.CreateInstance<CurrentUser>();

                currentUser.Id = userId;

                em.AssociateInstance<IsUser>(currentUser, user);

                dm.Data.AcceptChanges();
            }

            return dm.Data;
        }

        bool IPersistentAuthentication.ValidateUser(AspectizeUser user)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            Guid userId = new Guid(user.UserId);

            User appliUser = dm.GetEntity<User>(userId);

            if (appliUser != null && appliUser.Status != EnumUserStatus.Blocked)
            {
                appliUser.DateLastLogin = DateTime.Now;

                var roles = new List<string>();

                roles.Add("Registered");

                user.SetRoles(roles);

                return true;
            }
            return false;
        }

    }

}
