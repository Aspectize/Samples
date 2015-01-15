
var vSideBarLiItemBootstrapControl = Aspectize.CreateRepeatedView("SideBarLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuBootstrap, aas.Data.MainData.EnumBootstrapExtension, "", "Literal:");
vSideBarLiItemBootstrapControl.LinkName.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.className.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vSideBarLiItemBootstrapControl.ParentData.EnumerationElement});

