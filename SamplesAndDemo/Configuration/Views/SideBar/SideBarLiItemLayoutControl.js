
var vSideBarLiItemLayoutControl = Aspectize.CreateRepeatedView("SideBarLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout, "", "Literal:");
vSideBarLiItemLayoutControl.LinkName.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.className.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vSideBarLiItemLayoutControl.ParentData.EnumerationElement});

