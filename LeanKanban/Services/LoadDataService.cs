using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;
using System.Security.Permissions;
using BasicAuth;

namespace LeanKanban.Services
{
    public interface ILoadDataService
    {
        [PrincipalPermission(SecurityAction.Demand, Authenticated = true)]
        DataSet LoadBoards();

        [PrincipalPermission(SecurityAction.Demand, Authenticated = true)]
        DataSet LoadBoard(Guid boardId);
    }

    [Service(Name = "LoadDataService")]
    public class LoadDataService : ILoadDataService //, IInitializable, ISingleton
    {
        DataSet ILoadDataService.LoadBoards()
        {
            var aspectizeUser = ExecutingContext.CurrentUser;

            var userId = new Guid(aspectizeUser.UserId.ToString());
            
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            var roleRelations = new List<IRoleRelationQuery>();

            roleRelations.Add(new RoleRelationQuery<User, BoardUser>());

            dm.LoadEntitiesGraph<User>(roleRelations, userId);

            return dm.Data;
        }

        DataSet ILoadDataService.LoadBoard(Guid boardId)
        {
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            var roleRelations = new List<IRoleRelationQuery>();

            roleRelations.Add(new RoleRelationQuery<Board, BoardState>());
            roleRelations.Add(new RoleRelationQuery<State, WorkItemState>());

            dm.LoadEntitiesGraph<Board>(roleRelations, boardId);

            return dm.Data;
        }
    }

}
