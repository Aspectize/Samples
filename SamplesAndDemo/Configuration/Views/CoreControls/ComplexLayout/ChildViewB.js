
var vChildViewB = Aspectize.CreateView("ChildViewB", aas.Controls.ControlB, aas.Zones.ParentView.ZoneContent);
vChildViewB.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewB OnActivated"});
vChildViewB.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewB OnDeactivated"});
vChildViewB.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, {trace: "ChildViewB OnLoad"});

