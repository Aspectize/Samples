
var vGoogleTable = Aspectize.CreateView("GoogleTable", aas.Controls.GoogleTableControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleTable.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GoogleTable));
vGoogleTable.GoogleTableProduct.BindGrid(aas.Data.AdventureWorksData.Product);
vGoogleTable.GoogleTableProduct.PageSize.BindData("10");
vGoogleTable.GoogleTableProduct.ShowRowNumber.BindData("true");
vGoogleTable.GoogleTableProduct.FirstRowNumber.BindData("12");
vGoogleTable.GoogleTableProduct.OnRowClick.BindCommand(aas.Services.Browser.TestingServices.Alert(aas.Data.AdventureWorksData.Product.Name));
var cProductID = vGoogleTable.GoogleTableProduct.AddGridColumn("ProductID", aas.ColumnType.GoogleExtension.GoogleColumn);
cProductID.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.ProductID);
var cName = vGoogleTable.GoogleTableProduct.AddGridColumn("Name", aas.ColumnType.GoogleExtension.GoogleColumn);
cName.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.Name);
var cProductNumber = vGoogleTable.GoogleTableProduct.AddGridColumn("ProductNumber", aas.ColumnType.GoogleExtension.GoogleColumn);
cProductNumber.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.ProductNumber);
var cSafetyStockLevel = vGoogleTable.GoogleTableProduct.AddGridColumn("SafetyStockLevel", aas.ColumnType.GoogleExtension.GoogleColumn);
cSafetyStockLevel.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SafetyStockLevel);
var cSize = vGoogleTable.GoogleTableProduct.AddGridColumn("Size", aas.ColumnType.GoogleExtension.GoogleColumn);
cSize.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.Size);
var cSizeUnitMeasureCode = vGoogleTable.GoogleTableProduct.AddGridColumn("SizeUnitMeasureCode", aas.ColumnType.GoogleExtension.GoogleColumn);
cSizeUnitMeasureCode.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SizeUnitMeasureCode);
var cSellStartDate = vGoogleTable.GoogleTableProduct.AddGridColumn("SellStartDate", aas.ColumnType.GoogleExtension.GoogleColumn);
cSellStartDate.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SellStartDate);
var cSellEndDate = vGoogleTable.GoogleTableProduct.AddGridColumn("SellEndDate", aas.ColumnType.GoogleExtension.GoogleColumn);
cSellEndDate.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SellEndDate);

