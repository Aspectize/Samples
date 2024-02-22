var vDhtmlxRadarChart = Aspectize.CreateView('DhtmlxRadarChart', aas.Controls.DhtmlxRadarChart, aas.Zones.SideBarContent.ZoneContent);
vDhtmlxRadarChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.DhtmlxRadarChart));
vDhtmlxRadarChart.OnActivated.BindCommand(aas.Services.Browser.DhtmlxChartService.RefreshGraph(aas.ViewName.DhtmlxRadarChart.DhtmlxRadarChartSales));
vDhtmlxRadarChart.DhtmlxRadarChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vDhtmlxRadarChart.DhtmlxRadarChartSales.Type.BindData('radar');
vDhtmlxRadarChart.DhtmlxRadarChartSales.hLines.BindData(true);
vDhtmlxRadarChart.DhtmlxRadarChartSales.vLines.BindData(true);
vDhtmlxRadarChart.DhtmlxRadarChartSales.ShowPoints.BindData(false);
//vDhtmlxRadarChart.DhtmlxRadarChartSales.Legendlayout.BindData("y");
//vDhtmlxRadarChart.DhtmlxRadarChartSales.LegendAlign.BindData(true);

//vDhtmlxRadarChart.DhtmlxRadarChartSales.xEnd.BindData(3000);
//vDhtmlxRadarChart.DhtmlxRadarChartSales.xStart.BindData(0);
//vDhtmlxRadarChart.DhtmlxRadarChartSales.xStep.BindData(1000);

var cQuotaDate = vDhtmlxRadarChart.DhtmlxRadarChartSales.AddGridColumn("QuotaDate", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cQuotaDate.Value.BindData(vDhtmlxRadarChart.DhtmlxRadarChartSales.DataSource.QuotaDate);
cQuotaDate.Label.BindData(vDhtmlxRadarChart.DhtmlxRadarChartSales.DataSource.QuotaDate, 'MM/yy');
cQuotaDate.ItemColor.BindData('#cfcfcf');
cQuotaDate.LineWidth.BindData(2);
cQuotaDate.LineColor.BindData('#cfcfcf');


//cQuotaDate.Title.BindData("Date");
//cQuotaDate.ItemColor.BindData("#FFFFFF");
//cQuotaDate.LineColor.BindData("#599EC8");
//cQuotaDate.LineWidth.BindData(2);
cQuotaDate.ItemRadius.BindData(3);
cQuotaDate.ItemBorderColor.BindData("#599EC8");
cQuotaDate.ItemBorderWidth.BindData(1);
var cSalesQuota = vDhtmlxRadarChart.DhtmlxRadarChartSales.AddGridColumn("SalesQuota", aas.ColumnType.Dhtmlx.DhtmlxAxis);
cSalesQuota.Value.BindData(vDhtmlxRadarChart.DhtmlxRadarChartSales.DataSource.SalesQuota);
cSalesQuota.Title.BindData("Sales");
//cSalesQuota.Label.BindData(vDhtmlxRadarChart.DhtmlxRadarChartSales.DataSource.SalesQuota, 'G0');
cSalesQuota.ItemColor.BindData("#FFFFFF");
cSalesQuota.LineColor.BindData("#599EC8");
cSalesQuota.LineWidth.BindData(2);
cSalesQuota.ItemRadius.BindData(3);
cSalesQuota.ItemBorderColor.BindData("#599EC8");
cSalesQuota.ItemBorderWidth.BindData(1);




vDhtmlxRadarChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vDhtmlxRadarChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vDhtmlxRadarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vDhtmlxRadarChart.GridSalesPerson.AddGridColumn("LastName", aas.ColumnType.Span);
cLastName.Text.BindData(vDhtmlxRadarChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

