
var vEmployeeDetail = Aspectize.CreateView("EmployeeDetail", aas.Controls.EmployeeDetail, aas.Zones.TreeView.ZoneEmployeeDetail, true, aas.Data.AdventureWorksData.Employee_STAR);
vEmployeeDetail.EmployeeName.BindData(aas.Expression(vEmployeeDetail.ParentData.EmployeeContact.Contact.FirstName + ' ' + vEmployeeDetail.ParentData.EmployeeContact.Contact.LastName));

