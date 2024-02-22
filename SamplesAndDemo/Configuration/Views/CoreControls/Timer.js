
var vTimer = Aspectize.CreateView("Timer", aas.Controls.Timer, aas.Zones.SideBarContent.ZoneContent);
vTimer.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Timer));
vTimer.ActivateTimer.click.BindCommand(aas.Services.Browser.UIService.ActivateTimer(aas.ViewName.Timer.Timer, vTimer.TxtCount.value));
vTimer.DeactivateTimer.click.BindCommand(aas.Services.Browser.UIService.DeactivateTimer(aas.ViewName.Timer.Timer));
vTimer.Timer.Period.BindData(vTimer.TxtPeriod.value);
vTimer.Timer.OnTimer.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MainData.TimerTrace));
vTimer.GridTrace.BindGrid(aas.Data.MainData.TimerTrace, "DateEvent ASC");
var cTrace = vTimer.GridTrace.AddGridColumn("Trace", aas.ColumnType.Bootstrap.BootstrapSpan);
cTrace.Text.BindData(aas.Expression('Timer call commands on ' + vTimer.GridTrace.DataSource.DateEvent));
vTimer.BtnResetTrace.click.BindCommand(aas.Services.Browser.DataService.ClearData(aas.Path.MainData.TimerTrace));

