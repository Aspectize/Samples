
var vHomeMenuLiItemLayoutControl = Aspectize.CreateRepeatedView("HomeMenuLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout, "", "Literal:");
vHomeMenuLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement});
vHomeMenuLiItemLayoutControl.LinkName.BindData(vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement);

