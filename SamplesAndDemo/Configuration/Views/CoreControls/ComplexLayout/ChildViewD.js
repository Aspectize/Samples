
var vChildViewD = Aspectize.CreateView("ChildViewD", aas.Controls.ControlD, aas.Zones.ChildViewA.ZoneDetail);
vChildViewD.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewD OnActivated"});
vChildViewD.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewD OnDeactivated"});
vChildViewD.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewD OnLoad"});

