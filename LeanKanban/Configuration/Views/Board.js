
var board = Aspectize.CreateView("Board", aas.Controls.Board, aas.Zones.MainControl.Content, false, aas.Data.MainData.Board);
board.BtnNewState.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.EditState));
board.BtnNewState.click.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(board.ParentPath.BoardState.State));
board.BoardName.BindData(board.ParentData.Name);
board.RepeaterPanelState.SelectedStyle.BindData('');
