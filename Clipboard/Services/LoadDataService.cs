using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Linq;
using Aspectize.Core;
using System.Security.Permissions;

namespace Clipboard
{
    public interface ILoadDataService
    {
        DateTime LoadClipboardDate(Guid clipboardId);

        [Command(BrowserCacheDuration = "30 Days")]
        DataSet LoadClipboard(Guid clipboardId, DateTime dateModified);
        
        DataSet LoadClipboards();
        DataSet CreateClipboard(string libelle);
        DataSet EnterClipboard(string code);
    }

    [Service(Name = "LoadDataService")]
    public class LoadDataService : ILoadDataService //, IInitializable, ISingleton
    {
        DateTime ILoadDataService.LoadClipboardDate(Guid clipboardId)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.DataService);

            var cb = dm.GetEntity<Clipboard>(clipboardId);

            return cb.DateModified;
        }

        DataSet ILoadDataService.LoadClipboard(Guid clipboardId, DateTime dateModified)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.DataService);

            dm.LoadEntity<Clipboard>(clipboardId);

            return dm.Data;
        }

        DataSet ILoadDataService.LoadClipboards()
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.DataService);

            dm.LoadEntities<Clipboard>();

            return dm.Data;
        }

        DataSet ILoadDataService.CreateClipboard(string libelle)
        {
            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.DataService);

            IEntityManager em = dm as IEntityManager;

            var newClipboard = em.CreateInstance<Clipboard>();

            newClipboard.Libelle = libelle;
            newClipboard.AccessCode = Utilities.GenerateUniqueCode(dm);

            //AspectizeUser aspectizeUser = ExecutingContext.CurrentUser;

            //var animateur = dm.GetEntity<User>(new Guid(aspectizeUser.UserId.ToString()));

            //em.AssociateInstance<Anime>(animateur, newMP);

            dm.SaveTransactional();

            return em.Data;
        }

        DataSet ILoadDataService.EnterClipboard(string code)
        {
            code = code.Replace(" ", "");

            IDataManager dm = EntityManager.FromDataBaseService(ServiceName.DataService);

            IEntityManager em = dm as IEntityManager;

            dm.LoadEntities<Clipboard>(new QueryCriteria(Clipboard.Fields.AccessCode, ComparisonOperator.Equal, code.Trim()));

            var clipboard = em.GetAllInstances<Clipboard>().SingleOrDefault(item => item.AccessCode == code.Trim());

            if (clipboard == null) throw new SmartException(1000, "Invalid code, try again.");

            return dm.Data;
        }

    }

}
