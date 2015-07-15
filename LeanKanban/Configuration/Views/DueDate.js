
var dueDateFlyOut = Aspectize.CreateView("DueDateFlyOut", aas.Controls.AspectizeFlyOutPanel);

var dueDate = Aspectize.CreateView("DueDate", aas.Controls.DueDate, aas.Zones.DueDateFlyOut.AspectizeFlyOutPanel, true);
dueDate.DueDatePicker.Value.BindData(aas.Data.MainData.Board.BoardState.State.WorkItemState.WorkItem.DueDate);
//dueDate.DueDatePicker.WithTime.BindData(true);
dueDate.DueDatePicker.Inline.BindData(true);
dueDate.DueDateDate.BindData(aas.Data.MainData.Board.BoardState.State.WorkItemState.WorkItem.DueDate, "dd/MM");
dueDate.DueDateHour.BindData(aas.Data.MainData.Board.BoardState.State.WorkItemState.WorkItem.DueDate, "HH:mm");

dueDate.BtnSave.click.BindCommand(aas.Services.Browser.UIService.UnactivateView(aas.ViewName.DueDateFlyOut));
dueDate.BtnRemove.click.BindCommand(aas.Services.Browser.DataService.SetDataField(aas.Path.MainData.Board.BoardState.State.WorkItemState.WorkItem.DueDate, null));
dueDate.BtnRemove.click.BindCommand(aas.Services.Browser.UIService.UnactivateView(aas.ViewName.DueDateFlyOut));