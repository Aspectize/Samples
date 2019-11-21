var vDhtmlxBarChart = Aspectize.CreateView('DhtmlxBarChart', aas.Controls.DhtmlxBarChart, aas.Zones.SideBarContent.ZoneContent);
vDhtmlxBarChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.DhtmlxBarChart));
vDhtmlxBarChart.OnActivated.BindCommand(aas.Services.Browser.DhtmlxChartService.RefreshGraph(aas.ViewName.DhtmlxBarChart.DhtmlxBarChartSales));

vDhtmlxBarChart.DhtmlxBarChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vDhtmlxBarChart.DhtmlxBarChartSales.Type.BindData('bar');

vDhtmlxBarChart.DhtmlxBarChartSales.DisplayLegend.BindData(true);
vDhtmlxBarChart.DhtmlxBarChartSales.LegendAlign.BindData('center');
vDhtmlxBarChart.DhtmlxBarChartSales.LegendvAlign.BindData('bottom');
vDhtmlxBarChart.DhtmlxBarChartSales.Legendlayout.BindData('x');

var cQuotaDate = vDhtmlxBarChart.DhtmlxBarChartSales.AddGridColumn("QuotaDate", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cQuotaDate.Value.BindData(vDhtmlxBarChart.DhtmlxBarChartSales.DataSource.QuotaDate);
cQuotaDate.Label.BindData(vDhtmlxBarChart.DhtmlxBarChartSales.DataSource.QuotaDate, 'MM/yy');
cQuotaDate.Title.BindData("Date");
var cSalesQuota = vDhtmlxBarChart.DhtmlxBarChartSales.AddGridColumn("SalesQuota", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cSalesQuota.Value.BindData(vDhtmlxBarChart.DhtmlxBarChartSales.DataSource.SalesQuota);
cSalesQuota.Label.BindData(vDhtmlxBarChart.DhtmlxBarChartSales.DataSource.SalesQuota, 'G0');
//cSalesQuota.Title.BindData("Sales");
cSalesQuota.ItemColor.BindData("#FFFFFF");
cSalesQuota.LineColor.BindData("#599EC8");
cSalesQuota.LineWidth.BindData(2);
cSalesQuota.ItemRadius.BindData(3);
cSalesQuota.ItemBorderColor.BindData("#599EC8");
cSalesQuota.ItemBorderWidth.BindData(1);
cSalesQuota.AlphaTransparency.BindData(1);


vDhtmlxBarChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vDhtmlxBarChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vDhtmlxBarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vDhtmlxBarChart.GridSalesPerson.AddGridColumn("LastName", aas.ColumnType.Span);
cLastName.Text.BindData(vDhtmlxBarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

