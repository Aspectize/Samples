
var vJQueryDatepicker = Aspectize.CreateView("JQueryDatePicker", aas.Controls.JQueryDatePickerControl, aas.Zones.SideBarContent.ZoneContent);

vJQueryDatepicker.JQueryDatePickerSample.Value.BindData(Aspectize.FormatString('{0:d MMMM yyyy HH:mm}', new Date()));
vJQueryDatepicker.DateSelected.BindData(vJQueryDatepicker.JQueryDatePickerSample.Value, "dd MMMM yyyy");
vJQueryDatepicker.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.JQueryDatePicker });

vJQueryDatepicker.JQueryDatePickerAdvanced.Value.BindData(Aspectize.FormatString('{0:d MMMM yyyy HH:mm}', new Date()));
vJQueryDatepicker.JQueryDatePickerAdvanced.ShowTime.BindData(vJQueryDatepicker.ChkWithTime.checked);
vJQueryDatepicker.JQueryDatePickerAdvanced.OnlyTime.BindData(vJQueryDatepicker.ChkOnlyTime.checked);
vJQueryDatepicker.JQueryDatePickerAdvanced.ChangeYear.BindData(vJQueryDatepicker.ChkChangeYear.checked);
vJQueryDatepicker.JQueryDatePickerAdvanced.YearRange.BindData(vJQueryDatepicker.TxtYearRange.value);
