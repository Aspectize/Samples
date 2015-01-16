
var vTabContainer = Aspectize.CreateView("TabContainer", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTab, true);

var vTabViewA = Aspectize.CreateView("TabViewA", aas.Controls.ViewA, "TabContainer.0:View A", true);
var vTabViewB = Aspectize.CreateView("TabViewB", aas.Controls.ViewB, "TabContainer.1:View B");
var vTabViewC = Aspectize.CreateView("TabViewC", aas.Controls.ViewC, "TabContainer.2:View C");
var vTabViewD = Aspectize.CreateView("TabViewD", aas.Controls.ViewD, "TabContainer.3:View D");
