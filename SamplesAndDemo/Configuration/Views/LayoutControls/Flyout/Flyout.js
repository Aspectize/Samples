
var vFlyout = Aspectize.CreateView("Flyout", aas.Controls.Flyout, aas.Zones.SideBarContent.ZoneContent);
vFlyout.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Flyout});
vFlyout.BtnShowFlyout.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.FlyoutPanel});

