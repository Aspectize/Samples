
var vGoogleLineChart = Aspectize.CreateView("GoogleLineChart", aas.Controls.GoogleLineChartControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleLineChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.GoogleLineChart});
vGoogleLineChart.GoogleLineChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vGoogleLineChart.GoogleLineChartSales.Title.BindData("Sales");
var cQuotaDate = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("QuotaDate", "GoogleLineChartColumn");
cQuotaDate.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.QuotaDate);
var cSalesQuota = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("SalesQuota", "GoogleLineChartColumn");
cSalesQuota.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.SalesQuota);
vGoogleLineChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vGoogleLineChart.GridSalesPerson.AddGridColumn("FirstName", "Span");
cFirstName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vGoogleLineChart.GridSalesPerson.AddGridColumn("LastName", "Span");
cLastName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

