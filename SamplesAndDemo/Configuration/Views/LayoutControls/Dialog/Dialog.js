
var vDialog = Aspectize.CreateView("Dialog", aas.Controls.DialogControl, aas.Zones.SideBarContent.ZoneContent);
vDialog.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Dialog});
vDialog.BtnShowDialog.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.DialogDemo});

