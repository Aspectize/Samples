
var boardItem = Aspectize.CreateRepeatedView("BoardItem", aas.Controls.BoardItem, aas.Zones.MyBoards.RepeaterPanelBoard, aas.Data.MainData.CurrentUser.IsUser.User.BoardUser.Board);
boardItem.Title.BindData(boardItem.ParentData.Name);
boardItem.BoardItem.click.BindCommand(aas.Services.Server.LoadDataService.LoadBoard(boardItem.ParentData.Id), aas.Data.MainData, true, true);
boardItem.BoardItem.click.BindCommand(aas.Services.Browser.UIService.SetCurrent(aas.Path.MainData.Board, boardItem.ParentData.Id));
boardItem.BoardItem.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Board));
