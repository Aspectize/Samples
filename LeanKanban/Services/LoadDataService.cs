using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Aspectize.Core;

namespace LeanKanban.Services
{
    public interface ILoadDataService
    {
        DataSet LoadBoards();
        DataSet LoadBoard(Guid boardId);
    }

    [Service(Name = "LoadDataService")]
    public class LoadDataService : ILoadDataService //, IInitializable, ISingleton
    {
        DataSet ILoadDataService.LoadBoards()
        {
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            dm.LoadEntities<Board>();

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
