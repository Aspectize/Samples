
var vBootstrapDatepicker = Aspectize.CreateView("BootstrapDatepicker", aas.Controls.BootstrapDatepickerControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapDatepicker.DateSelected.BindData(vBootstrapDatepicker.BootstrapDatePickerBasic.Value, "dd MMMM yyyy HH:mm");
vBootstrapDatepicker.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapDatepicker });
vBootstrapDatepicker.BootstrapDatePickerBasic.Format.BindData('DD/MM/YYYY');
vBootstrapDatepicker.SelectViewMode.BindList(aas.Data.MainData.EnumDatePickerViewMode, 'EnumerationElement', 'EnumerationElement');
vBootstrapDatepicker.BootstrapDatePickerOptions.Stepping.BindData(vBootstrapDatepicker.TxtStepping.value);
vBootstrapDatepicker.BootstrapDatePickerOptions.ViewMode.BindData(vBootstrapDatepicker.SelectViewMode.CurrentValue);
vBootstrapDatepicker.BootstrapDatePickerMin.Format.BindData('DD/MM/YYYY');
vBootstrapDatepicker.BootstrapDatePickerMin.MaxDate.BindData(vBootstrapDatepicker.BootstrapDatePickerMax.Value);
vBootstrapDatepicker.BootstrapDatePickerMax.Format.BindData('DD/MM/YYYY');
vBootstrapDatepicker.BootstrapDatePickerMax.MinDate.BindData(vBootstrapDatepicker.BootstrapDatePickerMin.Value);



