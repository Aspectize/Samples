
var vImage = Aspectize.CreateView("Image", aas.Controls.ImageControl, aas.Zones.SideBarContent.ZoneContent);
vImage.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Image});
vImage.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage, {productId: vImage.SelectProduct.CurrentValue});
vImage.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", null, "Name ASC");
vImage.SelectProduct.CurrentSyncDisabled.BindData(false);

