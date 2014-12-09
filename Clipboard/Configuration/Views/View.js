
var mainView = Aspectize.CreateView("MainView", aas.Controls.MainControl);
mainView.Clipboards.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ClipBoards));
mainView.Home.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.Welcome));

var welcome = Aspectize.CreateView("Welcome", aas.Controls.Welcome, aas.Zones.MainView.Content, true);

welcome.BtnEnter.click.BindCommand(aas.Services.Server.LoadDataService.EnterClipboard(welcome.Code.value), aas.Data.MainData, true, true);
welcome.BtnEnter.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ClipBoardRead));

var clipboardEdit = Aspectize.CreateView("ClipBoardEdit", aas.Controls.ClipboardEdit, aas.Zones.MainView.Content, false, aas.Data.MainData.Clipboard);
clipboardEdit.Code.BindData(clipboardEdit.ParentData.AccessCode);
clipboardEdit.libelle.BindData(clipboardEdit.ParentData.Libelle);
clipboardEdit.Update.click.BindCommand(aas.Services.Server.DataService.SaveTransactional(aas.Data.MainData));
clipboardEdit.TxtClipboard.value.BindData(clipboardEdit.ParentData.Content);

var clipboardRead = Aspectize.CreateView("ClipBoardRead", aas.Controls.ClipboardRead, aas.Zones.MainView.Content, false, aas.Data.MainData.Clipboard);
clipboardRead.OnLoad.BindCommand(aas.Services.Browser.UIService.ActivateTimer(aas.ViewName.ClipBoardRead.Timer));
clipboardRead.OnDeactivated.BindCommand(aas.Services.Browser.UIService.DeactivateTimer(aas.ViewName.ClipBoardRead.Timer));
clipboardRead.Code.BindData(clipboardRead.ParentData.AccessCode);
clipboardRead.libelle.BindData(clipboardRead.ParentData.Libelle);
clipboardRead.Timer.Count.BindData(0);
clipboardRead.Timer.Period.BindData(10000);
clipboardRead.Timer.OnTimer.BindCommand(aas.Services.Server.LoadDataService.LoadClipboardDate(clipboardEdit.ParentData.Id), clipboardRead.ParentData.DateModified, true);
clipboardRead.Timer.OnTimer.BindCommand(aas.Services.Server.LoadDataService.LoadClipboard(clipboardEdit.ParentData.Id, clipboardEdit.ParentData.DateModified), aas.Data.MainData, true);
clipboardRead.TxtClipboard.value.BindData(clipboardRead.ParentData.Content);
clipboardRead.Update.click.BindCommand(aas.Services.Server.LoadDataService.LoadClipboardDate(clipboardEdit.ParentData.Id), clipboardRead.ParentData.DateModified, true);
clipboardRead.Update.click.BindCommand(aas.Services.Server.LoadDataService.LoadClipboard(clipboardEdit.ParentData.Id, clipboardEdit.ParentData.DateModified), aas.Data.MainData, true);


var newClipboard = Aspectize.CreateView("NewClipboard", aas.Controls.NewClipboard);
newClipboard.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.NewClipboard));

newClipboard.Create.click.BindCommand(aas.Services.Server.LoadDataService.CreateClipboard(newClipboard.TxtName.value), aas.Data.MainData, true);
newClipboard.Create.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.NewClipboard));

var clipboards = Aspectize.CreateView("ClipBoards", aas.Controls.Clipboards, aas.Zones.MainView.Content);
clipboards.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadClipboards(), aas.Data.MainData, true, true);

clipboards.GridClipboards.BindGrid(aas.Data.MainData.Clipboard);
var cName = clipboards.GridClipboards.AddGridColumn("Name", "BootstrapSpan");
cName.Text.BindData(clipboards.GridClipboards.DataSource.Libelle);

var cButton = clipboards.GridClipboards.AddGridColumn("Enter", "BootstrapButton");
cButton.Click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ClipBoardEdit));
cButton.Text.BindData("Enter");

clipboards.Create.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.NewClipboard));

var vErrorView = Aspectize.CreateView("ErrorView", aas.Controls.ErrorControl);
vErrorView.OnActivated.BindCommand(aas.Services.Browser.UIService.GetContextValue('ErrorMessage'), vErrorView.ErrorMessage);
vErrorView.ErrorMessage.BindData('');


