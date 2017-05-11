var vDhtmlxPieChart = Aspectize.CreateView('DhtmlxPieChart', aas.Controls.DhtmlxPieChart, aas.Zones.SideBarContent.ZoneContent);
vDhtmlxPieChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.DhtmlxPieChart });

vDhtmlxPieChart.DhtmlxPieChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
vDhtmlxPieChart.DhtmlxPieChartSales.Type.BindData('pie');


var cPerson = vDhtmlxPieChart.DhtmlxPieChartSales.AddGridColumn('Person', 'Dhtmlx.DhtmlxAxis');
cPerson.Label.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.ContactSalesPerson.Contact.FirstName);
cPerson.Value.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.SalesLastYear);
