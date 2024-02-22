
var vJQueryDatepicker = Aspectize.CreateView("JQueryDatePicker", aas.Controls.JQueryDatePickerControl, aas.Zones.SideBarContent.ZoneContent);
vJQueryDatepicker.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.JQueryDatePicker));

vJQueryDatepicker.EmployeeName.BindData(aas.Expression(aas.Data.AdventureWorksData.Employee.EmployeeContact.Contact.FirstName + ' ' + aas.Data.AdventureWorksData.Employee.EmployeeContact.Contact.LastName));
vJQueryDatepicker.JQueryDatePickerSample.Value.BindData(aas.Data.AdventureWorksData.Employee.BirthDate);
vJQueryDatepicker.JQueryDatePickerSample.DisplayFormat.BindData('dd MM yy');
vJQueryDatepicker.DateSelected.BindData(vJQueryDatepicker.JQueryDatePickerSample.Value, "dd MMMM yyyy");

//vJQueryDatepicker.JQueryDatePickerAdvanced.Value.BindData(aas.Data.AdventureWorksData.Employee.BirthDate);
//vJQueryDatepicker.JQueryDatePickerAdvanced.ShowTime.BindData(vJQueryDatepicker.ChkWithTime.checked);
//vJQueryDatepicker.JQueryDatePickerAdvanced.OnlyTime.BindData(vJQueryDatepicker.ChkOnlyTime.checked);
//vJQueryDatepicker.JQueryDatePickerAdvanced.ChangeYear.BindData(vJQueryDatepicker.ChkChangeYear.checked);
//vJQueryDatepicker.JQueryDatePickerAdvanced.YearRange.BindData(vJQueryDatepicker.TxtYearRange.value);
