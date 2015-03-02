
var editState = Aspectize.CreateView("EditState", aas.Controls.EditState, "", false, aas.Data.MainData.Board.BoardState.State);
editState.ViewTitle.BindData("Edit State");
editState.LabelTxtName.BindData("State title:");
editState.TxtName.value.BindData(editState.ParentData.Title, "", aas.Enum.BindingMode.OnPropertyChange, true, aas.Enum.ErrorProcessor.Custom, aas.Services.Browser.BootStrapClientService.DisplayValidator);

editState.OnDeactivated.BindCommand(aas.Services.Browser.DataRecorder.CancelRowChanges(aas.Data.MainData));
editState.OnLoad.BindCommand(aas.Services.Browser.DataRecorder.Start(aas.Data.MainData));
editState.Cancel.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditState));

editState.Save.click.BindCommand(aas.Services.Server.MyDataService.SaveTransactional(aas.Data.MainData), "", false, true);
editState.Save.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.EditState));
