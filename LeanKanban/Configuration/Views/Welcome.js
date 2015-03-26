
var welcome = Aspectize.CreateView("Welcome", aas.Controls.Welcome);

welcome.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);

welcome.SignUp.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView('Register'));
welcome.Login.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView('Login'));