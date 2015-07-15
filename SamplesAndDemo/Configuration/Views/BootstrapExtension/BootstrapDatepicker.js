
var vBootstrapDatepicker = Aspectize.CreateView("BootstrapDatepicker", aas.Controls.BootstrapDatepickerControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapDatepicker.DateSelected.BindData(vBootstrapDatepicker.BootstrapDatePickerSample.Value, "dd MMMM yyyy HH:mm");
vBootstrapDatepicker.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapDatepicker });
vBootstrapDatepicker.BootstrapDatePickerSample.Stepping.BindData(vBootstrapDatepicker.TxtStepping.value);


