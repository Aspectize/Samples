
var workItem = Aspectize.CreateRepeatedView("WorkItem", aas.Controls.WorkItem, aas.Zones.StateItem.RepeaterPanelWorkItem, stateItem.ParentData.WorkItemState.WorkItem);
workItem.Title.BindData(workItem.ParentData.Title);
workItem.WorkItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.WorkItem, workItem.ParentData.Id));
workItem.WorkItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditWorkItem));
workItem.DisplayDueDateBadge.BindData(aas.Expression(IIF(workItem.ParentData.DueDate, '', 'hidden')));
workItem.DueDate.BindData(workItem.ParentData.DueDate, "ddd dd");
workItem.OnActivated.BindCommand(aas.Services.Browser.ClientService.InitDrag());

