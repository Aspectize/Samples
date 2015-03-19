
var vEditWorkItem = Aspectize.CreateView("EditWorkItem", aas.Controls.EditWorkItem, "", false, aas.Data.MainData.WorkItem);
vEditWorkItem.Title.value.BindData(vEditWorkItem.ParentData.Title);
vEditWorkItem.Description.value.BindData(vEditWorkItem.ParentData.Description);
vEditWorkItem.DisplayDueDate.BindData(aas.Expression(IIF(vEditWorkItem.ParentData.DueDate, '', 'hidden')));
vEditWorkItem.WorkItemDueDateLink.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.WorkItemDueDateLink, aas.ViewName.DueDateFlyOut));
vEditWorkItem.WorkItemDueDate.BindData(aas.Data.MainData.WorkItem.DueDate, "ddd dd a\\t HH:mm");
vEditWorkItem.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
vEditWorkItem.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
vEditWorkItem.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));
vEditWorkItem.DisplayAttachment.BindData(aas.Expression(IIF(vEditWorkItem.ParentData.WorkItemAttachment.Attachment.Id, '', 'hidden')));

vEditWorkItem.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
vEditWorkItem.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));

vEditWorkItem.DueDate.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.DueDate, aas.ViewName.DueDateFlyOut));
vEditWorkItem.Move.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.Move, aas.ViewName.MoveCardFlyOut));

vEditWorkItem.UploaderAttachmentAdd.Text.BindData("Attachment");
vEditWorkItem.UploaderAttachmentAdd.MultipleFiles.BindData(true);
vEditWorkItem.UploaderAttachmentAdd.OnFileSelected.BindCommand(aas.Services.Server.LoadDataService.UploadAttachment(vEditWorkItem.UploaderAttachmentAdd.SelectedFile, aas.Data.MainData.WorkItem.Id), aas.Data.MainData, true, true);

vEditWorkItem.UploaderAttachment.Text.BindData("Upload Attachment");
vEditWorkItem.UploaderAttachment.MultipleFiles.BindData(true);
vEditWorkItem.UploaderAttachment.OnFileSelected.BindCommand(aas.Services.Server.LoadDataService.UploadAttachment(vEditWorkItem.UploaderAttachment.SelectedFile, aas.Data.MainData.WorkItem.Id), aas.Data.MainData, true, true);
vEditWorkItem.AttachmentRepeaterPanel.SelectedStyle.BindData('');


