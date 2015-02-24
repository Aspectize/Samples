
var vCheckBoxList = Aspectize.CreateView("CheckBoxList", aas.Controls.CheckBoxList, aas.Zones.SideBarContent.ZoneContent);
vCheckBoxList.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.CheckBoxList});
vCheckBoxList.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadSalesOrdersHeader, {salesPersonId: aas.Data.AdventureWorksData.SalesPerson.SalesPersonID}, aas.Data.AdventureWorksData, true, true);
vCheckBoxList.CheckBoxListDemo.BindList(aas.Data.AdventureWorksData.SalesReason, "SalesReasonID", "Name", "Name ASC", "", "");
vCheckBoxList.CheckBoxListDemo.SelectedValue.BindData(aas.Data.AdventureWorksData.SalesPerson.SalesOrderHeaderSalesPerson.SalesOrderHeader.SalesOrderHeaderSalesReason.SalesReason_SalesReasonID);
vCheckBoxList.GridSalesOrder.BindGrid(aas.Data.AdventureWorksData.SalesPerson.SalesOrderHeaderSalesPerson.SalesOrderHeader);
var cOrderDate = vCheckBoxList.GridSalesOrder.AddGridColumn("OrderDate", "Span");
cOrderDate.Text.BindData(vCheckBoxList.GridSalesOrder.DataSource.OrderDate);
var cSalesOrderNumber = vCheckBoxList.GridSalesOrder.AddGridColumn("SalesOrderNumber", "Span");
cSalesOrderNumber.Text.BindData(vCheckBoxList.GridSalesOrder.DataSource.SalesOrderNumber);
vCheckBoxList.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
vCheckBoxList.GridSalesPerson.OnRowClick.BindCommand(aas.Services.Server.LoadDataService.LoadSalesOrdersHeader, {salesPersonId: aas.Data.AdventureWorksData.SalesPerson.SalesPersonID}, aas.Data.AdventureWorksData, true, true);
var cContact = vCheckBoxList.GridSalesPerson.AddGridColumn("Contact", "Span");
cContact.Text.BindData(aas.Expression(vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName + ' ' + vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName));
