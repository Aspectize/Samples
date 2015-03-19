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
        DataSet UploadAttachment(UploadedFile[] uploadedFiles, Guid workItemId);
        Byte[] DownloadAttachment(Guid workItemId, Guid attachmentId);
        void DeleteAttachment(Guid workItemId, Guid attachmentId);
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
            roleRelations.Add(new RoleRelationQuery<WorkItem, WorkItemAttachment>());
            roleRelations.Add(new RoleRelationQuery<Attachment, AttachmentUser>());

            dm.LoadEntitiesGraph<Board>(roleRelations, boardId);

            return dm.Data;
        }

        DataSet ILoadDataService.UploadAttachment(UploadedFile[] uploadedFiles, Guid workItemId)
        {
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            IEntityManager em = dm as IEntityManager;

            var fileService = ExecutingContext.GetService<IFileService>("MyFileService");

            var workItem = dm.GetEntity<WorkItem>(workItemId);

            foreach (UploadedFile uploadedFile in uploadedFiles)
            {
                var attachment = em.CreateInstance<Attachment>();

                string pathFile = string.Format(@"{0:N}/{1:N}", workItemId, attachment.Id);

                attachment.FileName = uploadedFile.Name;
                attachment.FileLength = uploadedFile.ContentLength;

                em.AssociateInstance<WorkItemAttachment>(workItem, attachment);

                fileService.Write(pathFile, uploadedFile.Stream);
            }

            dm.SaveTransactional();

            return dm.Data;
        }

        byte[] ILoadDataService.DownloadAttachment(Guid workItemId, Guid attachmentId)
        {
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            var fileService = ExecutingContext.GetService<IFileService>("MyFileService");

            var attachment = dm.GetEntity<Attachment>(attachmentId);

            string pathFile = string.Format(@"{0:N}/{1:N}", workItemId, attachment.Id);

            ExecutingContext.SetHttpDownloadFileName(attachment.FileName);

            return fileService.ReadBytes(pathFile);
        }

        void ILoadDataService.DeleteAttachment(Guid workItemId, Guid attachmentId)
        {
            IDataManager dm = EntityManager.FromDataBaseService("MyDataService");

            var fileService = ExecutingContext.GetService<IFileService>("MyFileService");

            var attachment = dm.GetEntity<Attachment>(attachmentId);

            string pathFile = string.Format(@"{0:N}/{1:N}", workItemId, attachment.Id);

            fileService.DeleteFile(pathFile);

            attachment.Delete();

            dm.SaveTransactional();
        }


    }

}
