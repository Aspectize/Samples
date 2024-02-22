
var vPanel = Aspectize.CreateView("Panel", aas.Controls.PanelControl, aas.Zones.SideBarContent.ZoneContent);
vPanel.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Panel));
vPanel.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ViewA));
vPanel.BtnViewB.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ViewB));
vPanel.BtnViewC.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ViewC));
vPanel.BtnViewD.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ViewD));

var vViewA = Aspectize.CreateView("ViewA", aas.Controls.ViewA, aas.Zones.Panel.ZonePanelSample, true);
var vViewB = Aspectize.CreateView("ViewB", aas.Controls.ViewB, aas.Zones.Panel.ZonePanelSample);
var vViewC = Aspectize.CreateView("ViewC", aas.Controls.ViewC, aas.Zones.Panel.ZonePanelSample);
var vViewD = Aspectize.CreateView("ViewD", aas.Controls.ViewD, aas.Zones.Panel.ZonePanelSample);
