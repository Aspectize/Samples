
var vTabVertical = Aspectize.CreateView("TabVertical", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTabVertical, true);
vTabVertical.className.BindData("TabVertical");

var vTabVerticalViewA = Aspectize.CreateView("TabVerticalViewA", aas.Controls.ViewA, "TabVertical.0:ViewA", true);
var vTabVerticalViewB = Aspectize.CreateView("TabVerticalViewB", aas.Controls.ViewB, "TabVertical.1:ViewB");
var vTabVerticalViewC = Aspectize.CreateView("TabVerticalViewC", aas.Controls.ViewC, "TabVertical.2:ViewC");
var vTabVerticalViewD = Aspectize.CreateView("TabVerticalViewD", aas.Controls.ViewD, "TabVertical.3:ViewD");
