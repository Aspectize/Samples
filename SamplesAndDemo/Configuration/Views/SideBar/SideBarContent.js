
var vSideBarContent = Aspectize.CreateView("SideBarContent", aas.Controls.SideBarContent, aas.Zones.MainControl.ZoneMainContent);
vSideBarContent.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadDataDemo(), aas.Data.AdventureWorksData, true, true);

var vSideBarLiItemCoreControl = Aspectize.CreateRepeatedView("SideBarLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl);
vSideBarLiItemCoreControl.LinkName.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.className.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemCoreControl.ParentData.EnumerationElement));

var vSideBarLiItemLayoutControl = Aspectize.CreateRepeatedView("SideBarLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout);
vSideBarLiItemLayoutControl.LinkName.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.className.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemLayoutControl.ParentData.EnumerationElement));

var vSideBarLiItemBootstrapControl = Aspectize.CreateRepeatedView("SideBarLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuBootstrap, aas.Data.MainData.EnumBootstrapExtension);
vSideBarLiItemBootstrapControl.LinkName.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.className.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement));

var vSideBarLiItemGoogleControl = Aspectize.CreateRepeatedView("SideBarLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuGoogle, aas.Data.MainData.EnumGoogleExtension);
vSideBarLiItemGoogleControl.LinkName.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.className.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemGoogleControl.ParentData.EnumerationElement));

var vSideBarLiItemJQueryControl = Aspectize.CreateRepeatedView("SideBarLiItemJQueryControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuJQuery, aas.Data.MainData.EnumJQueryExtension);
vSideBarLiItemJQueryControl.LinkName.BindData(vSideBarLiItemJQueryControl.ParentData.EnumerationElement);
vSideBarLiItemJQueryControl.className.BindData(vSideBarLiItemJQueryControl.ParentData.EnumerationElement);
vSideBarLiItemJQueryControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemJQueryControl.ParentData.EnumerationElement));

var vSideBarLiItemDhtmlxControl = Aspectize.CreateRepeatedView("SideBarLiItemDhtmlxControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuDhtmlx, aas.Data.MainData.EnumDhtmlxExtension);
vSideBarLiItemDhtmlxControl.LinkName.BindData(vSideBarLiItemDhtmlxControl.ParentData.EnumerationElement);
vSideBarLiItemDhtmlxControl.className.BindData(vSideBarLiItemDhtmlxControl.ParentData.EnumerationElement);
vSideBarLiItemDhtmlxControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemDhtmlxControl.ParentData.EnumerationElement));


var vSideBarLiItemMiscControl = Aspectize.CreateRepeatedView("SideBarLiItemMiscControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuMisc, aas.Data.MainData.EnumMiscExtension);
vSideBarLiItemMiscControl.LinkName.BindData(vSideBarLiItemMiscControl.ParentData.EnumerationElement);
vSideBarLiItemMiscControl.className.BindData(vSideBarLiItemMiscControl.ParentData.EnumerationElement);
vSideBarLiItemMiscControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vSideBarLiItemMiscControl.ParentData.EnumerationElement));

