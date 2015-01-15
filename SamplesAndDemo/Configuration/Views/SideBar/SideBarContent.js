
var vSideBarContent = Aspectize.CreateView("SideBarContent", aas.Controls.SideBarContent, aas.Zones.MainControl.ZoneMainContent);
vSideBarContent.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadDataDemo, {}, aas.Data.AdventureWorksData, true, true);

