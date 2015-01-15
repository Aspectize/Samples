
var vSideBarLiItemCoreControl = Aspectize.CreateRepeatedView("SideBarLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl, "", "Literal:");
vSideBarLiItemCoreControl.LinkName.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.className.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vSideBarLiItemCoreControl.ParentData.EnumerationElement});

