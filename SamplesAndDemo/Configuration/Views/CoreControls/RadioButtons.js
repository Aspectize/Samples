
var vRadioButtons = Aspectize.CreateView("RadioButtons", aas.Controls.RadioButtons, aas.Zones.SideBarContent.ZoneContent);
vRadioButtons.CurrentProduct.BindData(aas.Data.AdventureWorksData.Product.Name);
vRadioButtons.CurrentProductSubCategory.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory.Name);
vRadioButtons.CurrentDisplay.BindData(aas.Data.AdventureWorksData.Category.Name);
vRadioButtons.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.RadioButtons});
vRadioButtons.RadioButtonCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name");
vRadioButtons.RadioButtonSubCategory.BindList(aas.Data.AdventureWorksData.Subcategory, "SubcategoryID", "Name");
vRadioButtons.RadioButtonSubCategory.SelectedValue.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory_SubcategoryID);
vRadioButtons.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", "Name ASC");

