
var vHomeMenuLiItemCoreControl = Aspectize.CreateRepeatedView("HomeMenuLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl, "", "Literal:");
vHomeMenuLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vHomeMenuLiItemCoreControl.ParentData.EnumerationElement});
vHomeMenuLiItemCoreControl.LinkName.BindData(vHomeMenuLiItemCoreControl.ParentData.EnumerationElement);

