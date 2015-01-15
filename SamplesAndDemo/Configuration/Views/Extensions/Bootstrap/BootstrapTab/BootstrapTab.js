
var vBootstrapTab = Aspectize.CreateView("BootstrapTab", aas.Controls.BootstrapTabControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.BootstrapTab});
vBootstrapTab.RadioButtonOrientation.BindList(aas.Data.MainData.EnumBootstrapTabOrientation, "EnumerationValue", "EnumerationElement");

