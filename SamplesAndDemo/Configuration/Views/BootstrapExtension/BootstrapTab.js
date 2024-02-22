
var vBootstrapTab = Aspectize.CreateView("BootstrapTab", aas.Controls.BootstrapTabControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.BootstrapTab));
vBootstrapTab.RadioButtonOrientation.BindList(aas.Data.MainData.EnumBootstrapTabOrientation, "EnumerationValue", "EnumerationElement");

var vBootstrapTabContainer = Aspectize.CreateView("BootstrapTabContainer", aas.Controls.Bootstrap.BootstrapTab, aas.Zones.BootstrapTab.ZoneTab, true);
vBootstrapTabContainer.className.BindData(aas.Data.MainData.EnumBootstrapTabOrientation.EnumerationDescription);

var vBootstrapTabViewA = Aspectize.CreateView("BootstrapTabViewA", aas.Controls.ViewA, "BootstrapTabContainer.0:ViewA", true);
var vBootstrapTabViewB = Aspectize.CreateView("BootstrapTabViewB", aas.Controls.ViewB, "BootstrapTabContainer.1:ViewB");
var vBootstrapTabViewC = Aspectize.CreateView("BootstrapTabViewC", aas.Controls.ViewC, "BootstrapTabContainer.2:ViewC");
var vBootstrapTabViewD = Aspectize.CreateView("BootstrapTabViewD", aas.Controls.ViewD, "BootstrapTabContainer.3:ViewD");


