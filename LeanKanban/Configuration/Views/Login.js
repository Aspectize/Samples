
var login = Aspectize.CreateView("Login", aas.Controls.Login, aas.Zones.MainControl.Content);

login.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);

login.Register.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Register));
login.BtnLogin.click.BindCommand(aas.Services.Browser.ClientService.Login(login.TxtUserName.value, login.TxtPwd.value));

var register = Aspectize.CreateView("Register", aas.Controls.Register, aas.Zones.MainControl.Content);

register.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);

register.Login.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Login));
register.SignUp.click.BindCommand(aas.Services.Browser.ClientService.SignUp(register.TxtUserName.value, register.TxtPwd.value, register.TxtPwdConfirmation.value));
