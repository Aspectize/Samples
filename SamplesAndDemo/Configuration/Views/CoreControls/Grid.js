
var vGrid = Aspectize.CreateView("Grid", aas.Controls.Grid, aas.Zones.SideBarContent.ZoneContent);
vGrid.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Grid));

// Basic Uage
vGrid.GridProduct.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);

// Pagination and AutoSort
vGrid.GridProductPage.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vGrid.GridProductPage.PageSize.BindData(vGrid.SelectPageSize.CurrentValue);
vGrid.GridProductPage.AutoSort.BindData(vGrid.CheckBoxAutoSort.checked);
vGrid.SelectPageSize.BindList(aas.Data.MainData.EnumPageSize, "EnumerationValue", "EnumerationValue");

// Dynamic Filter
vGrid.GridDynamicFilter.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vGrid.TxtFilter.keyup.BindCommand(aas.Services.Browser.UIService.SetCustomFilter, { controlName: aas.ViewName.Grid.GridDynamicFilter, customFilter: aas.Expression('(Name).toLowerCase().indexOf("' + vGrid.TxtFilter.value + '".toLowerCase()) !== -1') });

// Group Rows
vGrid.GridSubCategory.BindGrid(aas.Data.AdventureWorksData.Subcategory, "CategorySubcategory.Category.Name ASC");
vGrid.GridSubCategory.GroupRows.BindData(true);
var cCategory = vGrid.GridSubCategory.AddGridColumn("Category", aas.ColumnType.Span);
cCategory.Text.BindData(vGrid.GridSubCategory.DataSource.CategorySubcategory.Category.Name);
var cName = vGrid.GridSubCategory.AddGridColumn("Name", aas.ColumnType.Span);
cName.Text.BindData(vGrid.GridSubCategory.DataSource.Name);

// Different types of columns
vGrid.GridProductColumns.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
var cName = vGrid.GridProductColumns.AddGridColumn("Name", aas.ColumnType.Span);
cName.Text.BindData(vGrid.GridProductColumns.DataSource.Name);
var cProductNumber = vGrid.GridProductColumns.AddGridColumn("ProductNumber", aas.ColumnType.Span);
cProductNumber.Text.BindData(vGrid.GridProductColumns.DataSource.ProductNumber);
var cSafetyStockLevel = vGrid.GridProductColumns.AddGridColumn("SafetyStockLevel", aas.ColumnType.TextBox);
cSafetyStockLevel.Text.BindData(vGrid.GridProductColumns.DataSource.SafetyStockLevel);
var cSize = vGrid.GridProductColumns.AddGridColumn("Size", aas.ColumnType.Span);
cSize.Text.BindData(vGrid.GridProductColumns.DataSource.Size);
var cSizeUnitMeasureCode = vGrid.GridProductColumns.AddGridColumn("SizeUnitMeasureCode", aas.ColumnType.Span);
cSizeUnitMeasureCode.Text.BindData(vGrid.GridProductColumns.DataSource.SizeUnitMeasureCode);
var cDynamicImage = vGrid.GridProductColumns.AddGridColumn("DynamicImage", aas.ColumnType.Image);
cDynamicImage.ImageUrl.BindData(aas.Expression('./LoadDataService.LoadImage.jpg.cmd.ashx?productId=' + vGrid.GridProductColumns.DataSource.ProductID));
var cRowClassRed = vGrid.GridProductColumns.AddGridColumn("RowClassRed", aas.ColumnType.RowClass);
cRowClassRed.className.BindData(aas.Expression(IIF(vGrid.GridProductColumns.DataSource.SafetyStockLevel < 100, 'Red', 'Green')));

// Parent - Child Grids
vGrid.GridCategory.BindGrid(aas.Data.AdventureWorksData.Category, "Name ASC", "", true);
vGrid.GridSubCategoryChild.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "Name ASC", "", true);

