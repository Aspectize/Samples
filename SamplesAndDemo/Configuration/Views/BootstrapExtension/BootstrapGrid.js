
var vBootstrapGrid = Aspectize.CreateView("BootstrapGrid", aas.Controls.BootstrapGridControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapGrid.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.BootstrapGrid));
vBootstrapGrid.SelectPageSize.BindList(aas.Data.MainData.EnumPageSize, "EnumerationValue", "EnumerationValue");
vBootstrapGrid.GridProduct.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProduct.className.BindData("table-hover table-condensed");

vBootstrapGrid.GridProductColumns.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProductColumns.className.BindData("table-hover table-condensed");
var cName = vBootstrapGrid.GridProductColumns.AddGridColumn("Name", aas.ColumnType.Bootstrap.BootstrapSpan);
cName.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.Name);
var cProductNumber = vBootstrapGrid.GridProductColumns.AddGridColumn("ProductNumber", aas.ColumnType.Bootstrap.BootstrapSpan);
cProductNumber.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.ProductNumber);
var cSafetyStockLevel = vBootstrapGrid.GridProductColumns.AddGridColumn("SafetyStockLevel", aas.ColumnType.Bootstrap.BootstrapText);
cSafetyStockLevel.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.SafetyStockLevel);
var cSize = vBootstrapGrid.GridProductColumns.AddGridColumn("Size", aas.ColumnType.Bootstrap.BootstrapSpan);
cSize.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.Size);
var cSizeUnitMeasureCode = vBootstrapGrid.GridProductColumns.AddGridColumn("SizeUnitMeasureCode", aas.ColumnType.Bootstrap.BootstrapSpan);
cSizeUnitMeasureCode.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.SizeUnitMeasureCode);
var cDynamicImage = vBootstrapGrid.GridProductColumns.AddGridColumn("DynamicImage", aas.ColumnType.Bootstrap.BootstrapImage);
cDynamicImage.ImageUrl.BindData(aas.Expression('./LoadDataService.LoadImage.jpg.cmd.ashx?productId=' + vBootstrapGrid.GridProductColumns.DataSource.ProductID));
var cRowClassRed = vBootstrapGrid.GridProductColumns.AddGridColumn("RowClassRed", aas.ColumnType.RowClass);
cRowClassRed.className.BindData(aas.Expression(IIF(vBootstrapGrid.GridProductColumns.DataSource.SafetyStockLevel < 100, 'danger', 'success')));
vBootstrapGrid.GridProductPage.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProductPage.PageSize.BindData(vBootstrapGrid.SelectPageSize.CurrentValue);
vBootstrapGrid.GridProductPage.AutoSort.BindData(vBootstrapGrid.CheckBoxAutoSort.checked);
vBootstrapGrid.GridProductPage.className.BindData("table-hover table-condensed");

vBootstrapGrid.GridSubCategory.BindGrid(aas.Data.AdventureWorksData.Subcategory, "CategorySubcategory.Category.Name ASC");
vBootstrapGrid.GridSubCategory.GroupRows.BindData("true");
vBootstrapGrid.GridSubCategory.className.BindData("table-hover table-condensed");
var cCategory = vBootstrapGrid.GridSubCategory.AddGridColumn("Category", aas.ColumnType.Bootstrap.BootstrapSpan);
cCategory.Text.BindData(vBootstrapGrid.GridSubCategory.DataSource.CategorySubcategory.Category.Name);
var cName = vBootstrapGrid.GridSubCategory.AddGridColumn("Name", aas.ColumnType.Bootstrap.BootstrapSpan);
cName.Text.BindData(vBootstrapGrid.GridSubCategory.DataSource.Name);

