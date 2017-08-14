
var vChildViewD = Aspectize.CreateView("ChildViewD", aas.Controls.ControlD, aas.Zones.ChildViewA.ZoneDetail);
vChildViewD.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewD OnActivated'));
vChildViewD.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewD OnDeactivated'));
vChildViewD.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewD OnLoad'));

