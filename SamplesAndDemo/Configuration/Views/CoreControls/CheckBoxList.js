
var vCheckBoxList = Aspectize.CreateView("CheckBoxList", aas.Controls.CheckBoxList, aas.Zones.SideBarContent.ZoneContent);
vCheckBoxList.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.CheckBoxList));
vCheckBoxList.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cContact = vCheckBoxList.GridSalesPerson.AddGridColumn("Contact", "Span");
cContact.Text.BindData(aas.Expression(vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName + ' ' + vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName));
var cNbDepartment = vCheckBoxList.GridSalesPerson.AddGridColumn("NbDepartment", "Span");
cNbDepartment.Text.BindData(vCheckBoxList.GridSalesPerson.DataSource.NbDepartment);

vCheckBoxList.CheckBoxListDemo.BindList(aas.Data.AdventureWorksData.Department, "DepartmentID", "Name", "Name ASC", "", "");
vCheckBoxList.CheckBoxListDemo.SelectedValue.BindData(aas.Data.AdventureWorksData.SalesPerson.SalesPersonDepartment.Department_DepartmentID);

vCheckBoxList.GridDepartment.BindGrid(aas.Data.AdventureWorksData.SalesPerson.SalesPersonDepartment.Department);
var cDepartment = vCheckBoxList.GridDepartment.AddGridColumn("Department", "Span");
cDepartment.Text.BindData(vCheckBoxList.GridSalesPerson.DataSource.Name);

vCheckBoxList.SelectedSale.BindData(aas.Expression(aas.Data.AdventureWorksData.SalesPerson.ContactSalesPerson.Contact.FirstName + ' ' + aas.Data.AdventureWorksData.SalesPerson.ContactSalesPerson.Contact.LastName));