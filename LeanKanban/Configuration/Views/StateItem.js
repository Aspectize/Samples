
var stateItem = Aspectize.CreateRepeatedView("StateItem", aas.Controls.StateItem, aas.Zones.Board.RepeaterPanelState, board.ParentData.BoardState.State);
stateItem.Title.BindData(stateItem.ParentData.Title);
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditWorkItem));
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(stateItem.ParentPath.WorkItemState.WorkItem));
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.WorkItem, stateItem.ParentData.WorkItemState.WorkItem.Id));
stateItem.RepeaterPanelWorkItem.SelectedStyle.BindData('');
stateItem.OnLoad.BindCommand(aas.Services.Browser.ClientService.InitDrop());
stateItem.stateId.BindData(stateItem.ParentData.Id);
