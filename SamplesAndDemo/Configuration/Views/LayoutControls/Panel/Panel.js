
var vPanel = Aspectize.CreateView("Panel", aas.Controls.PanelControl, aas.Zones.SideBarContent.ZoneContent);
vPanel.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Panel});
vPanel.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.ViewA});
vPanel.BtnViewB.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.ViewB});
vPanel.BtnViewC.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.ViewC});
vPanel.BtnViewD.click.BindCommand(aas.Services.Browser.UIService.ShowView, {viewName: aas.ViewName.ViewD});

