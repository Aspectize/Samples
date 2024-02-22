
var vMainControl = Aspectize.CreateView("MainControl", aas.Controls.MainControl);
vMainControl.Home.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.SampleHome));

var vSampleHome = Aspectize.CreateView("SampleHome", aas.Controls.SampleHome, aas.Zones.MainControl.ZoneMainContent, true);

var vHomeMenuLiItemBootstrapControl = Aspectize.CreateRepeatedView("HomeMenuLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuBootstrapExtension, aas.Data.MainData.EnumBootstrapExtension);
vHomeMenuLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement));
vHomeMenuLiItemBootstrapControl.LinkName.BindData(vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement);

var vHomeMenuLiItemCoreControl = Aspectize.CreateRepeatedView("HomeMenuLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl);
vHomeMenuLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemCoreControl.ParentData.EnumerationElement));
vHomeMenuLiItemCoreControl.LinkName.BindData(vHomeMenuLiItemCoreControl.ParentData.EnumerationElement);

var vHomeMenuLiItemGoogleControl = Aspectize.CreateRepeatedView("HomeMenuLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuGoogleExtension, aas.Data.MainData.EnumGoogleExtension);
vHomeMenuLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement));
vHomeMenuLiItemGoogleControl.LinkName.BindData(vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement);

var vHomeMenuLiItemLayoutControl = Aspectize.CreateRepeatedView("HomeMenuLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout);
vHomeMenuLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement));
vHomeMenuLiItemLayoutControl.LinkName.BindData(vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement);

var vHomeMenuLiItemJQueryControl = Aspectize.CreateRepeatedView("HomeMenuLiItemJQueryControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuJQueryExtension, aas.Data.MainData.EnumJQueryExtension);
vHomeMenuLiItemJQueryControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemJQueryControl.ParentData.EnumerationElement));
vHomeMenuLiItemJQueryControl.LinkName.BindData(vHomeMenuLiItemJQueryControl.ParentData.EnumerationElement);

var vHomeMenuLiItemDhtmlxControl = Aspectize.CreateRepeatedView("HomeMenuLiItemDhtmlxControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuDhtmlxExtension, aas.Data.MainData.EnumDhtmlxExtension);
vHomeMenuLiItemDhtmlxControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemDhtmlxControl.ParentData.EnumerationElement));
vHomeMenuLiItemDhtmlxControl.LinkName.BindData(vHomeMenuLiItemJQueryControl.ParentData.EnumerationElement);

var vHomeMenuLiItemMiscControl = Aspectize.CreateRepeatedView("HomeMenuLiItemMiscControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuMiscExtension, aas.Data.MainData.EnumMiscExtension);
vHomeMenuLiItemMiscControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(vHomeMenuLiItemMiscControl.ParentData.EnumerationElement));
vHomeMenuLiItemMiscControl.LinkName.BindData(vHomeMenuLiItemMiscControl.ParentData.EnumerationElement);
