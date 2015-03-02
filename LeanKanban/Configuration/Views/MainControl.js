
var mainControl = Aspectize.CreateView("MainControl", aas.Controls.MainControl);
mainControl.Boards.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.MyBoards));
mainControl.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);
mainControl.ShowRegister.BindData(aas.Expression(aas.Data.MainData.CurrentUser.IsUser.User.Id ? '' : 'hidden'));
mainControl.UserName.BindData(aas.Expression(aas.Data.MainData.CurrentUser.IsUser.User.Id ? aas.Data.MainData.CurrentUser.IsUser.User.FirstName + ' ' + aas.Data.MainData.CurrentUser.IsUser.User.LastName : ''));
mainControl.LogOut.click.BindCommand(aas.Services.Browser.SecurityServices.SignOut());
mainControl.LogOut.click.BindCommand(aas.Services.Browser.UIService.Refresh());
