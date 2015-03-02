using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;
using System.Security.Permissions;
using BasicAuth;

namespace LeanKanban
{
    public static class ServiceName
    {
        public const string MyDataService = "MyDataService";
        public const string MyMailService = "MyMailService";
    }

    public interface ILoadDataService
    {
        DataSet LoadBoards();

        DataSet LoadBoard(Guid boardId);
    }

    [Service(Name = "LoadDataService")]
    public class LoadDataService : ILoadDataService //, IInitializable, ISingleton
    {
        [PrincipalPermission(SecurityAction.Demand, Authenticated = true)]
        DataSet ILoadDataService.LoadBoards()
        {
            var aspectizeUser = ExecutingContext.CurrentUser;

            var userId = new Guid(aspectizeUser.UserId.ToString());
            
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            var roleRelations = new List<IRoleRelationQuery>();

            roleRelations.Add(new RoleRelationQuery<User, BoardUser>());

            dm.LoadEntitiesGraph<User>(roleRelations, userId);

            return dm.Data;
        }

        [PrincipalPermission(SecurityAction.Demand, Authenticated = true)]
        DataSet ILoadDataService.LoadBoard(Guid boardId)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.MyDataService);

            var roleRelations = new List<IRoleRelationQuery>();

            roleRelations.Add(new RoleRelationQuery<Board, BoardState>());
            roleRelations.Add(new RoleRelationQuery<State, WorkItemState>());

            dm.LoadEntitiesGraph<Board>(roleRelations, boardId);

            return dm.Data;
        }
    }

}
