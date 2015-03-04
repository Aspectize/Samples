
var vEditWorkItem = Aspectize.CreateView("EditWorkItem", aas.Controls.EditWorkItem, "", false, aas.Data.MainData.WorkItem);
vEditWorkItem.Title.value.BindData(vEditWorkItem.ParentData.Title);
vEditWorkItem.Description.value.BindData(vEditWorkItem.ParentData.Description);
vEditWorkItem.DisplayDueDate.BindData(aas.Expression(IIF(vEditWorkItem.ParentData.DueDate, '', 'hidden')));
vEditWorkItem.WorkItemDueDateLink.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.WorkItemDueDateLink, aas.ViewName.DueDateFlyOut));
vEditWorkItem.WorkItemDueDate.BindData(aas.Data.MainData.WorkItem.DueDate, "ddd dd a\\t HH:mm");
vEditWorkItem.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
vEditWorkItem.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
vEditWorkItem.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));

vEditWorkItem.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
vEditWorkItem.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));

vEditWorkItem.DueDate.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.DueDate, aas.ViewName.DueDateFlyOut));
vEditWorkItem.Move.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.EditWorkItem.Move, aas.ViewName.MoveCardFlyOut));


