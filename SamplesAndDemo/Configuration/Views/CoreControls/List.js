
var vList = Aspectize.CreateView("List", aas.Controls.List, aas.Zones.SideBarContent.ZoneContent);
vList.BUCurrentDisplay.BindData(vList.SelectBU.CurrentDisplay);
vList.BUCurrentValue.BindData(vList.SelectBU.CurrentValue);
vList.BUNVDCurrentDisplay.BindData(vList.SelectBUNVD.CurrentDisplay);
vList.BUNVDCurrentValue.BindData(vList.SelectBUNVD.CurrentValue);
vList.CurrentProduct.BindData(aas.Data.AdventureWorksData.Product.Name);
vList.CurrentProductSubCategory.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory.Name);
vList.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.List));
vList.SelectBU.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", "Name ASC");
vList.SelectBU.CurrentSyncDisabled.BindData(true);
vList.SelectBUNVD.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", "Name ASC");
vList.SelectBUNVD.NullValueDisplay.BindData("Choose Category");
vList.SelectBUNVD.CurrentSyncDisabled.BindData(true);
vList.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", "Name ASC");
vList.SelectSubCategory.BindList(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "SubcategoryID", "Name", "Name ASC");
vList.SelectProductSubCategory.BindList(aas.Data.AdventureWorksData.Subcategory, "SubcategoryID", "Name", "Name ASC");
vList.SelectProductSubCategory.SelectedValue.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory_SubcategoryID);
vList.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", "Name ASC");

