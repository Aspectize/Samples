
var vTimer = Aspectize.CreateView("Timer", aas.Controls.Timer, aas.Zones.SideBarContent.ZoneContent);
vTimer.ActivateTimer.click.BindCommand(aas.Services.Browser.UIService.ActivateTimer, {controlName: vTimer.Timer});
vTimer.BtnResetTrace.click.BindCommand(aas.Services.Browser.ClientService.ResetTrace, {entityName: "TimerTrace"});
vTimer.DeactivateTimer.click.BindCommand(aas.Services.Browser.UIService.DeactivateTimer, {controlName: vTimer.Timer});
vTimer.Timer.Count.BindData(vTimer.TxtCount.value);
vTimer.Timer.Period.BindData(vTimer.TxtPeriod.value);
vTimer.Timer.OnTimer.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect, {schemaPath: aas.Path.MainData.TimerTrace});
vTimer.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Timer});
vTimer.GridTrace.BindGrid(aas.Data.MainData.TimerTrace, "DateEvent ASC");
var cTrace = vTimer.GridTrace.AddGridColumn("Trace", "BootstrapSpan");
cTrace.Text.BindData(aas.Expression('Timer call commands on ' + vTimer.GridTrace.DataSource.DateEvent));

