
var vTab = Aspectize.CreateView("Tab", aas.Controls.Tab, aas.Zones.SideBarContent.ZoneContent);
vTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Tab});
vTab.BtnActivateView.click.BindCommand(aas.Services.Browser.UIService.ActivateView, {viewName: aas.ViewName.TabPageCategory, schemaPath: aas.Path.AdventureWorksData.Category});
vTab.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name");

