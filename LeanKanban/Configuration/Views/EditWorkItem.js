
var vEditWorkItem = Aspectize.CreateView("EditWorkItem", aas.Controls.EditWorkItem, "", false, aas.Data.MainData.Board.BoardState.State.WorkItemState.WorkItem);
vEditWorkItem.Title.value.BindData(vEditWorkItem.ParentData.Title);
vEditWorkItem.Description.value.BindData(vEditWorkItem.ParentData.Description);
vEditWorkItem.SelectState.BindList(aas.Data.MainData.Board.BoardState.State, "Id", "Title");
vEditWorkItem.SelectState.SelectedValue.BindData(vEditWorkItem.ParentData.WorkItemState.State_Id);

vEditWorkItem.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
vEditWorkItem.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
vEditWorkItem.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));

vEditWorkItem.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
vEditWorkItem.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));



