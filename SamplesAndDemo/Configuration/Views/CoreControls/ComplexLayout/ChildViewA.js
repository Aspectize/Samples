
var vChildViewA = Aspectize.CreateView("ChildViewA", aas.Controls.ControlA, aas.Zones.ParentView.ZoneContent, true);
vChildViewA.BtnViewC.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ChildViewC));
vChildViewA.BtnViewD.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ChildViewD));
vChildViewA.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewA OnActivated'));
vChildViewA.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewA OnDeactivated'));
vChildViewA.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ChildViewA OnLoad'));

