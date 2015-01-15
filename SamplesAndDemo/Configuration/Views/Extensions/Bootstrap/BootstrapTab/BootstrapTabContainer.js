
var vBootstrapTabContainer = Aspectize.CreateView("BootstrapTabContainer", aas.Controls.BootstrapTab, aas.Zones.BootstrapTab.ZoneTab, true);
vBootstrapTabContainer.className.BindData(aas.Data.MainData.EnumBootstrapTabOrientation.EnumerationDescription);

