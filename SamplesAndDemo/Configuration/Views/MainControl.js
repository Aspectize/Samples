
var vMainControl = Aspectize.CreateView("MainControl", aas.Controls.MainControl);
vMainControl.Home.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, {viewName: aas.ViewName.SampleHome});

