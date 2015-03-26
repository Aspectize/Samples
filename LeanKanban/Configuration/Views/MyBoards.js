
var myBoards = Aspectize.CreateView("MyBoards", aas.Controls.MyBoards, aas.Zones.MainControl.Content, true);
myBoards.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadBoards(), aas.Data.MainData, true);

myBoards.BtnNewBoard.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditBoard));

//myBoards.BtnNewBoard.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MainData.CurrentUser.IsUser.User.BoardUser.Board));
myBoards.BtnNewBoard.click.BindCommand(aas.Services.Browser.ClientService.CreateBoard(aas.Path.MainData.CurrentUser.IsUser.User.BoardUser.Board));

myBoards.RepeaterPanelBoard.SelectedStyle.BindData('');
