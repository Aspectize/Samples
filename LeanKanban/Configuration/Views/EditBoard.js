
var editBoard = Aspectize.CreateView("EditBoard", aas.Controls.EditState, "", false, aas.Data.MainData.CurrentUser.IsUser.User.BoardUser.Board);
editBoard.ViewTitle.BindData("Edit Board");
editBoard.LabelTxtName.BindData("Board name:");
editBoard.TxtName.value.BindData(editBoard.ParentData.Name, "", aas.Enum.BindingMode.OnPropertyChange, true, aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.BootStrapClientService.DisplayValidator);

editBoard.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
editBoard.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
editBoard.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditBoard));

editBoard.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true, false, "EditBoard", aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.BootStrapClientService.DisplayValidatorCommand);
editBoard.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditBoard));
