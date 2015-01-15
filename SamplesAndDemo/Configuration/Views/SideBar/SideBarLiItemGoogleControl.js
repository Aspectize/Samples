
var vSideBarLiItemGoogleControl = Aspectize.CreateRepeatedView("SideBarLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuGoogle, aas.Data.MainData.EnumGoogleExtension, "", "Literal:");
vSideBarLiItemGoogleControl.LinkName.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.className.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vSideBarLiItemGoogleControl.ParentData.EnumerationElement});

