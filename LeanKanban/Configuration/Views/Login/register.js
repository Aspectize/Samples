var register = Aspectize.CreateView("Register", aas.Controls.Register, aas.Zones.MainControl.Content);

register.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);
register.OnActivated.BindCommand(aas.Services.Browser.AuthClientService.ResetRegister());
register.Login.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.Login));
register.SignUp.click.BindCommand(aas.Services.Browser.AuthClientService.SignUp(register.TxtFirstName.value, register.TxtLastName.value, register.TxtEmail.value));
