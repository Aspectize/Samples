
var vHeaderView = Aspectize.CreateView("HeaderView", aas.Controls.HeaderControl, aas.Zones.ParentView.ZoneHeader, true);
vHeaderView.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('HeaderView OnActivated'));
vHeaderView.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('HeaderView OnDeactivated'));
vHeaderView.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace('HeaderView OnLoad'));

