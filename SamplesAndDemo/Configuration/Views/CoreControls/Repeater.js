
var vRepeater = Aspectize.CreateView("Repeater", aas.Controls.Repeater, aas.Zones.SideBarContent.ZoneContent);
vRepeater.NbProduct.BindData(vRepeater.RepeaterPanelProduct.RowCount);
vRepeater.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Repeater));
vRepeater.TxtFilter.keyup.BindCommand(aas.Services.Browser.UIService.SetCustomFilter, { controlName: aas.ViewName.Repeater.RepeaterPanelProduct, customFilter: aas.Expression('(Name).toLowerCase().indexOf("' + vRepeater.TxtFilter.value + '".toLowerCase()) !== -1') }, null, false, true);
vRepeater.SelectOrder.BindList(aas.Data.MainData.EnumProductOrderField, "EnumerationElement", "EnumerationElement");
vRepeater.SelectOrder.NullValueDisplay.BindData("Choose Order Field");
vRepeater.SelectOrder.CurrentSyncDisabled.BindData(true);
vRepeater.SelectOrder.SelectedValueChanged.BindCommand(aas.Services.Browser.UIService.SetSortExpression(aas.ViewName.Repeater.RepeaterPanelProduct, aas.Expression(IIF(vRepeater.SelectOrder.CurrentValue, vRepeater.SelectOrder.CurrentValue + ' ASC', ''))), null, false, true);
vRepeater.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", "Name ASC");
vRepeater.SelectSubCategory.BindList(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "SubcategoryID", "Name", "Name ASC", "", "");
vRepeater.RepeaterPanelProduct.Click.BindCommand(aas.Services.Browser.SystemServices.Alert(aas.Expression(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product.Name + ' clicked !')));
vRepeater.RepeaterPanelProduct.SelectedStyle.BindData('SelectedProduct');

var vProductItem = Aspectize.CreateRepeatedView("ProductItem", aas.Controls.ProductItem, aas.Zones.Repeater.RepeaterPanelProduct, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product, "", "Literal:");
vProductItem.ProductName.BindData(vProductItem.ParentData.Name);
vProductItem.ProductNumber.BindData(vProductItem.ParentData.ProductNumber);
vProductItem.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage(vProductItem.ParentData.ProductID));
vProductItem.Delete.click.BindCommand(aas.Services.Browser.DataService.DeleteRow(vProductItem.ParentPath.ProductID));

