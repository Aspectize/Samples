var vDhtmlxLineChart = Aspectize.CreateView('DhtmlxLineChart', aas.Controls.DhtmlxLineChart, aas.Zones.SideBarContent.ZoneContent);
vDhtmlxLineChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.DhtmlxLineChart));
vDhtmlxLineChart.OnActivated.BindCommand(aas.Services.Browser.DhtmlxChartService.RefreshGraph(aas.ViewName.DhtmlxLineChart.DhtmlxLineChartSales));
vDhtmlxLineChart.DhtmlxLineChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vDhtmlxLineChart.DhtmlxLineChartSales.Type.BindData('line');

var cQuotaDate = vDhtmlxLineChart.DhtmlxLineChartSales.AddGridColumn("QuotaDate", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cQuotaDate.Value.BindData(vDhtmlxLineChart.DhtmlxLineChartSales.DataSource.QuotaDate);
cQuotaDate.Label.BindData(vDhtmlxLineChart.DhtmlxLineChartSales.DataSource.QuotaDate, 'MM/yyyy');
cQuotaDate.Title.BindData("Date");
var cSalesQuota = vDhtmlxLineChart.DhtmlxLineChartSales.AddGridColumn("SalesQuota", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cSalesQuota.Value.BindData(vDhtmlxLineChart.DhtmlxLineChartSales.DataSource.SalesQuota);
cSalesQuota.Label.BindData(vDhtmlxLineChart.DhtmlxLineChartSales.DataSource.SalesQuota, 'G0');
//cSalesQuota.Title.BindData("Sales");
cSalesQuota.ItemColor.BindData("#FFFFFF");
cSalesQuota.LineColor.BindData("#599EC8");
cSalesQuota.LineWidth.BindData(2);
cSalesQuota.ItemRadius.BindData(3);
cSalesQuota.ItemBorderColor.BindData("#599EC8");
cSalesQuota.ItemBorderWidth.BindData(1);


vDhtmlxLineChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vDhtmlxLineChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vDhtmlxLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vDhtmlxLineChart.GridSalesPerson.AddGridColumn("LastName", aas.ColumnType.Span);
cLastName.Text.BindData(vDhtmlxLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

