
var vComboBox = Aspectize.CreateView("ComboBox", aas.Controls.Combo, aas.Zones.SideBarContent.ZoneContent);
vComboBox.BUCurrentDisplay.BindData(vComboBox.SelectBU.CurrentDisplay);
vComboBox.BUCurrentValue.BindData(vComboBox.SelectBU.CurrentValue);
vComboBox.BUNVDCurrentDisplay.BindData(vComboBox.SelectBUNVD.CurrentDisplay);
vComboBox.BUNVDCurrentValue.BindData(vComboBox.SelectBUNVD.CurrentValue);
vComboBox.CurrentProduct.BindData(aas.Data.AdventureWorksData.Product.Name);
vComboBox.CurrentProductSubCategory.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory.Name);
vComboBox.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.ComboBox});
vComboBox.SelectBU.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectBU.CurrentSyncDisabled.BindData("true");
vComboBox.SelectBUNVD.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectBUNVD.NullValueDisplay.BindData("Choose Category");
vComboBox.SelectBUNVD.CurrentSyncDisabled.BindData("true");
vComboBox.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectSubCategory.BindList(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "SubcategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectProductSubCategory.BindList(aas.Data.AdventureWorksData.Subcategory, "SubcategoryID", "Name", aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory_SubcategoryID, "Name ASC", "", "");
vComboBox.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", null, "Name ASC", "", "");

