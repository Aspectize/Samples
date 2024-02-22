var vDhtmlxPieChart = Aspectize.CreateView('DhtmlxPieChart', aas.Controls.DhtmlxPieChart, aas.Zones.SideBarContent.ZoneContent);
vDhtmlxPieChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.DhtmlxPieChart));

vDhtmlxPieChart.DhtmlxPieChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
vDhtmlxPieChart.DhtmlxPieChartSales.Type.BindData('pie');

var cPerson = vDhtmlxPieChart.DhtmlxPieChartSales.AddGridColumn('Person', aas.ColumnType.Dhtmlx.DhtmlxAxis);
//cPerson.Label.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.ContactSalesPerson.Contact.FirstName);
//cPerson.Value.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.Bonus);

var cBonus = vDhtmlxPieChart.DhtmlxPieChartSales.AddGridColumn('Bonus', aas.ColumnType.Dhtmlx.DhtmlxAxis);
cBonus.Label.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.ContactSalesPerson.Contact.FirstName);
cBonus.Value.BindData(vDhtmlxPieChart.DhtmlxPieChartSales.DataSource.Bonus);

vDhtmlxPieChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vDhtmlxPieChart.GridSalesPerson.AddGridColumn("FirstName", aas.ColumnType.Span);
cFirstName.Text.BindData(vDhtmlxPieChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cBonus = vDhtmlxPieChart.GridSalesPerson.AddGridColumn("Bonus", aas.ColumnType.Span);
cBonus.Text.BindData(vDhtmlxPieChart.GridSalesPerson.DataSource.Bonus);

