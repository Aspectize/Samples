var resetPassword = Aspectize.CreateView("ResetPassWord", aas.Controls.ResetPassword);

resetPassword.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);

resetPassword.TxtEmail.value.BindData(aas.View.Login.TxtUserName.value);
resetPassword.BtnSave.click.BindCommand(aas.Services.Server.InscriptionService.ResetPassword(resetPassword.TxtEmail.value), '', false, true);
resetPassword.BtnSave.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.ResetPassWord));
