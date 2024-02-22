
var vChildViewC = Aspectize.CreateView("ChildViewC", aas.Controls.ControlC, aas.Zones.ChildViewA.ZoneDetail, true);
vChildViewC.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewC OnActivated'));
vChildViewC.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewC OnDeactivated'));
vChildViewC.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewC OnLoad'));

