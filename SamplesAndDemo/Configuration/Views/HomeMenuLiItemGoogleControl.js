
var vHomeMenuLiItemGoogleControl = Aspectize.CreateRepeatedView("HomeMenuLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuGoogleExtension, aas.Data.MainData.EnumGoogleExtension, "", "Literal:");
vHomeMenuLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement});
vHomeMenuLiItemGoogleControl.LinkName.BindData(vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement);

