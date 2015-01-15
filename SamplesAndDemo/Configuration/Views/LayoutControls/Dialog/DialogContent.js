
var vDialogContent = Aspectize.CreateView("DialogContent", aas.Controls.DialogContent, aas.Zones.DialogDemo.Dialog, true);
vDialogContent.BtnClose.click.BindCommand(aas.Services.Browser.UIService.UnactivateView, {viewName: aas.ViewName.DialogDemo});

