
var vGoogleBarChart = Aspectize.CreateView("GoogleBarChart", aas.Controls.GoogleBarChartControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleBarChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GoogleBarChart));
vGoogleBarChart.GoogleBarChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vGoogleBarChart.GoogleBarChartSales.Title.BindData("Sales");
var cQuotaDate = vGoogleBarChart.GoogleBarChartSales.AddGridColumn("QuotaDate", aas.ColumnType.GoogleExtension.GoogleBarChartColumn);
cQuotaDate.Value.BindData(vGoogleBarChart.GoogleBarChartSales.DataSource.QuotaDate);
var cSalesQuota = vGoogleBarChart.GoogleBarChartSales.AddGridColumn("SalesQuota", aas.ColumnType.GoogleExtension.GoogleBarChartColumn);
cSalesQuota.Value.BindData(vGoogleBarChart.GoogleBarChartSales.DataSource.SalesQuota);

vGoogleBarChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vGoogleBarChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vGoogleBarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vGoogleBarChart.GridSalesPerson.AddGridColumn("LastName", aas.ColumnType.Span);
cLastName.Text.BindData(vGoogleBarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);
