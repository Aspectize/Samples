
var vProductItem = Aspectize.CreateRepeatedView("ProductItem", aas.Controls.ProductItem, aas.Zones.Repeater.RepeaterPanelProduct, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product, "", "Literal:");
vProductItem.ProductName.BindData(vProductItem.ParentData.Name);
vProductItem.ProductNumber.BindData(vProductItem.ParentData.ProductNumber);
vProductItem.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage, {productId: vProductItem.ParentData.ProductID});
vProductItem.Delete.click.BindCommand(aas.Services.Browser.DataService.DeleteRow, {schemaPath: vProductItem.ParentPath.ProductID});

