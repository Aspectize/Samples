
var login = Aspectize.CreateView("Login", aas.Controls.Login, aas.Zones.MainControl.Content);

login.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);

login.Register.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Register));
login.BtnLogin.click.BindCommand(aas.Services.Browser.AuthClientService.Login(login.TxtUserName.value, login.TxtPwd.value));
login.ResetPassword.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.ResetPassWord));


