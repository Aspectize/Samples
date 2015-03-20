
var attachmentItem = Aspectize.CreateRepeatedView("AttachmentItem", aas.Controls.AttachmentItem, aas.Zones.EditWorkItem.AttachmentRepeaterPanel, aas.Data.MainData.WorkItem.WorkItemAttachment.Attachment, 'DateUploaded');
attachmentItem.DownloadLink.target.BindData('_blank');
attachmentItem.DownloadLink.href.BindData(aas.Expression('LoadDataService.DownloadAttachment.bin.cmd.ashx?workItemId=' + aas.Data.MainData.WorkItem.Id + '&attachmentId=' + attachmentItem.ParentData.Id));
attachmentItem.AttachmentFileName.BindData(attachmentItem.ParentData.FileName);
attachmentItem.AttachmentDateUploaded.BindData(attachmentItem.ParentData.DateUploaded, "MMM dd a\\t HH:mm");
attachmentItem.ImageAttachment.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.DownloadAttachment(aas.Data.MainData.WorkItem.Id, attachmentItem.ParentData.Id));

attachmentItem.DeleteLink.click.BindCommand(aas.Services.Server.LoadDataService.DeleteAttachment(aas.Data.MainData.WorkItem.Id, attachmentItem.ParentData.Id), '', false, true);
attachmentItem.DeleteLink.click.BindCommand(aas.Services.Browser.ClientService.ClearAttachment(attachmentItem.ParentData.Id));
