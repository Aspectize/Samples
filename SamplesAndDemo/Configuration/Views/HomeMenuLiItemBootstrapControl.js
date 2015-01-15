
var vHomeMenuLiItemBootstrapControl = Aspectize.CreateRepeatedView("HomeMenuLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuBootstrapExtension, aas.Data.MainData.EnumBootstrapExtension, "", "Literal:");
vHomeMenuLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement});
vHomeMenuLiItemBootstrapControl.LinkName.BindData(vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement);

