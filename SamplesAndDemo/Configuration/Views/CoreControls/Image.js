
var vImage = Aspectize.CreateView("Image", aas.Controls.ImageControl, aas.Zones.SideBarContent.ZoneContent);
vImage.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Image));
vImage.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage(vImage.SelectProduct.CurrentValue));
vImage.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", "Name ASC");
vImage.SelectProduct.CurrentSyncDisabled.BindData(false);

