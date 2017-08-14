
var vParentView = Aspectize.CreateView("ParentView", aas.Controls.ParentControl, aas.Zones.ComplexLayout.ZoneMain);
vParentView.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ChildViewA));
vParentView.BtnViewB.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ChildViewB));
vParentView.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ParentView OnActivated'));
vParentView.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ParentView OnDeactivated'));
vParentView.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('ParentView OnLoad'));

