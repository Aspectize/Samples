
var vGoogleLineChart = Aspectize.CreateView("GoogleLineChart", aas.Controls.GoogleLineChartControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleLineChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GoogleLineChart));
vGoogleLineChart.GoogleLineChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vGoogleLineChart.GoogleLineChartSales.Title.BindData("Sales");
var cQuotaDate = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("QuotaDate", aas.ColumnType.GoogleExtension.GoogleLineChartColumn);
cQuotaDate.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.QuotaDate);
var cSalesQuota = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("SalesQuota", aas.ColumnType.GoogleExtension.GoogleLineChartColumn);
cSalesQuota.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.SalesQuota);
vGoogleLineChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vGoogleLineChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vGoogleLineChart.GridSalesPerson.AddGridColumn("LastName", aas.ColumnType.Span);
cLastName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

