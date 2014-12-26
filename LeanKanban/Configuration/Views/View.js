
var mainControl = Aspectize.CreateView("MainControl", aas.Controls.MainControl);
mainControl.Boards.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.MyBoards));
mainControl.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);
mainControl.ShowRegister.BindData(aas.Expression(aas.Data.MainData.CurrentUser.IsUser.User.Id ? '' : 'hidden'));
mainControl.UserName.BindData(aas.Expression(aas.Data.MainData.CurrentUser.IsUser.User.Id ? aas.Data.MainData.CurrentUser.IsUser.User.UserName : ''));
mainControl.LogOut.click.BindCommand(aas.Services.Browser.SecurityServices.SignOut());
mainControl.LogOut.click.BindCommand(aas.Services.Browser.UIService.Refresh());

var myBoards = Aspectize.CreateView("MyBoards", aas.Controls.MyBoards, aas.Zones.MainControl.Content, true);
myBoards.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadBoards(), aas.Data.MainData, true);

myBoards.BtnNewBoard.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditBoard));
myBoards.BtnNewBoard.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MainData.CurrentUser.IsUser.User.BoardUser.Board));

var boardItem = Aspectize.CreateRepeatedView("BoardItem", aas.Controls.BoardItem, aas.Zones.MyBoards.RepeaterPanelBoard, aas.Data.MainData.CurrentUser.IsUser.User.BoardUser.Board);
boardItem.Title.BindData(boardItem.ParentData.Name);
boardItem.BoardItem.click.BindCommand(aas.Services.Server.LoadDataService.LoadBoard(boardItem.ParentData.Id), aas.Data.MainData, true, true);
boardItem.BoardItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.Board, boardItem.ParentData.Id));
boardItem.BoardItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Board));

var board = Aspectize.CreateView("Board", aas.Controls.Board, aas.Zones.MainControl.Content, false, aas.Data.MainData.Board);
board.BtnNewState.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditState));
board.BtnNewState.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(board.ParentPath.BoardState.State));
board.BoardName.BindData(board.ParentData.Name);

var stateItem = Aspectize.CreateRepeatedView("StateItem", aas.Controls.StateItem, aas.Zones.Board.RepeaterPanelState, board.ParentData.BoardState.State);
stateItem.Title.BindData(stateItem.ParentData.Title);
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditWorkItem));
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(stateItem.ParentPath.WorkItemState.WorkItem));
stateItem.BtnNewWorkItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.WorkItem, stateItem.ParentData.WorkItemState.WorkItem.Id));

var workItem = Aspectize.CreateRepeatedView("WorkItem", aas.Controls.WorkItem, aas.Zones.StateItem.RepeaterPanelWorkItem, stateItem.ParentData.WorkItemState.WorkItem);
workItem.Title.BindData(workItem.ParentData.Title);
workItem.WorkItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditWorkItem));
//workItem.WorkItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.WorkItem, workItem.ParentData.Id));

var editBoard = Aspectize.CreateView("EditBoard", aas.Controls.EditState, "", false, aas.Data.MainData.CurrentUser.IsUser.User.BoardUser.Board);
editBoard.ViewTitle.BindData("Edit Board");
editBoard.LabelTxtName.BindData("Board name:");
editBoard.TxtName.value.BindData(editBoard.ParentData.Name, "", aas.Enum.BindingMode.OnPropertyChange, true, aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.ClientService.DisplayValidator);

editBoard.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
editBoard.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
editBoard.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditBoard));

editBoard.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true, false, "EditBoard", aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.ClientService.DisplayValidatorCommand);
editBoard.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditBoard));

var editState = Aspectize.CreateView("EditState", aas.Controls.EditState, "", false, aas.Data.MainData.Board.BoardState.State);
editState.ViewTitle.BindData("Edit State");
editState.LabelTxtName.BindData("State title:");
editState.TxtName.value.BindData(editState.ParentData.Title, "", aas.Enum.BindingMode.OnPropertyChange, true, aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.ClientService.DisplayValidator);

editState.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
editState.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
editState.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditState));

editState.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
editState.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditState));

var vEditWorkItem = Aspectize.CreateView("EditWorkItem", aas.Controls.EditWorkItem, "", false, aas.Data.MainData.Board.BoardState.State.WorkItemState.WorkItem);
vEditWorkItem.Title.value.BindData(vEditWorkItem.ParentData.Title);
vEditWorkItem.Description.value.BindData(vEditWorkItem.ParentData.Description);
vEditWorkItem.SelectState.BindList(aas.Data.MainData.Board.BoardState.State, "Id", "Title", vEditWorkItem.ParentData.WorkItemState.State_Id);

vEditWorkItem.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
vEditWorkItem.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
vEditWorkItem.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));

vEditWorkItem.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
vEditWorkItem.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditWorkItem));


