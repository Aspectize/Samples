
var vDialog = Aspectize.CreateView("Dialog", aas.Controls.DialogControl, aas.Zones.SideBarContent.ZoneContent);
vDialog.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Dialog});
vDialog.BtnShowDialog.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.DialogDemo});

var vDialogDemo = Aspectize.CreateView("DialogDemo", aas.Controls.Dialog);
vDialogDemo.FixedPosition.BindData(aas.View.Dialog.CheckBoxFixed.checked);
vDialogDemo.Modal.BindData(aas.View.Dialog.CheckBoxModal.checked);
vDialogDemo.Text.BindData(aas.View.Dialog.DialogTitle.value);
vDialogDemo.WithCloseButton.BindData(aas.View.Dialog.CheckBoxClosedbutton.checked);

var vDialogContent = Aspectize.CreateView("DialogContent", aas.Controls.DialogContent, aas.Zones.DialogDemo.Dialog, true);
vDialogContent.BtnClose.click.BindCommand(aas.Services.Browser.UIService.UnactivateView, { viewName: aas.ViewName.DialogDemo });

