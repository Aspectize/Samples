
var vComplexLayout = Aspectize.CreateView("ComplexLayout", aas.Controls.ComplexLayout, aas.Zones.SideBarContent.ZoneContent);
vComplexLayout.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ChildViewA));
vComplexLayout.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.ComplexLayout));
vComplexLayout.BtnReset.click.BindCommand(aas.Services.Browser.UIService.UnactivateView(aas.ViewName.ParentView));
vComplexLayout.BtnResetTrace.click.BindCommand(aas.Services.Browser.DataService.ClearData(aas.Path.MainData.ComplexLayoutTrace));
vComplexLayout.BtnParentView.click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ParentView));

