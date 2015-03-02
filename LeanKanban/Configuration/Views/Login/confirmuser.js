var confirmUser = Aspectize.CreateView("ConfirmUser", aas.Controls.ConfirmUser);
confirmUser.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.ReadWrite);
confirmUser.BtnSave.click.BindCommand(aas.Services.Browser.AuthClientService.ValidateInscription(confirmUser.Login, confirmUser.TxtPwd.value, confirmUser.TxtPwdConfirm.value, confirmUser.CheckBoxRememberMe.checked));
confirmUser.Login.BindData(aas.Data.UserConfirmation);
