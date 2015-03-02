
var workItem = Aspectize.CreateRepeatedView("WorkItem", aas.Controls.WorkItem, aas.Zones.StateItem.RepeaterPanelWorkItem, stateItem.ParentData.WorkItemState.WorkItem);
workItem.Title.BindData(workItem.ParentData.Title);
workItem.WorkItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditWorkItem));
//workItem.WorkItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.WorkItem, workItem.ParentData.Id));
