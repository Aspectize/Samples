
var vFlyout = Aspectize.CreateView("Flyout", aas.Controls.Flyout, aas.Zones.SideBarContent.ZoneContent);
vFlyout.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Flyout));
vFlyout.BtnShowFlyout.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.FlyoutPanel));
vFlyout.BtnPositionFlyout.click.BindCommand(aas.Services.Browser.JQueryClientService.PositionFlyOut(aas.ViewName.Flyout.BtnPositionFlyout, aas.ViewName.FlyoutPanel, vFlyout.TxtMyPosition.value, vFlyout.TxtAtPosition.value));

var vFlyoutPanel = Aspectize.CreateView("FlyoutPanel", aas.Controls.AspectizeFlyOutPanel);
vFlyoutPanel.Modal.BindData(aas.View.Flyout.CheckBoxModal.checked);

var vFlyoutContent = Aspectize.CreateView("FlyoutContent", aas.Controls.FlyoutContent, aas.Zones.FlyoutPanel.AspectizeFlyOutPanel, true);
