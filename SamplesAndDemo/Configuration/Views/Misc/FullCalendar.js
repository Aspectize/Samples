
var vFullCalendar = Aspectize.CreateView('FullCalendar', aas.Controls.FullCalendarControl, aas.Zones.SideBarContent.ZoneContent);
vFullCalendar.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.FullCalendar));

vFullCalendar.Calendar.BindGrid(aas.Data.MainData.CalendarEvent);
vFullCalendar.Calendar.OnNewEvent.BindCommand(aas.Services.Browser.ClientService.AddCalendarEvent(''));
vFullCalendar.Calendar.EditMode.BindData(vFullCalendar.CheckBoxEditMode.checked);
vFullCalendar.Calendar.CenterButtons.BindData(vFullCalendar.TxtCenterButtons.value, '', aas.Enum.BindingMode.OnValidation);
vFullCalendar.Calendar.LeftButtons.BindData(vFullCalendar.TxtLeftButtons.value, '', aas.Enum.BindingMode.OnValidation);
vFullCalendar.Calendar.RightButtons.BindData(vFullCalendar.TxtRightButtons.value, '', aas.Enum.BindingMode.OnValidation);
vFullCalendar.Calendar.View.BindData(vFullCalendar.TxtView.value, '', aas.Enum.BindingMode.OnValidation);
vFullCalendar.Calendar.WeekEnds.BindData(vFullCalendar.CheckBoxWeekEnds.checked);
vFullCalendar.Calendar.WeekNumbers.BindData(vFullCalendar.CheckBoxWeekNumbers.checked);
vFullCalendar.Calendar.Locale.BindData(vFullCalendar.TxtLocale.value, '', aas.Enum.BindingMode.OnValidation);

vFullCalendar.Calendar.OnNewEvent.BindCommand(aas.Services.Browser.SystemServices.Alert('display your own view to manage event properties'));

var cEvent = vFullCalendar.Calendar.AddGridColumn('xxx', aas.ColumnType.FullCalendar.CalendarEvent);
cEvent.Start.BindData(vFullCalendar.Calendar.DataSource.DateStart);
cEvent.End.BindData(vFullCalendar.Calendar.DataSource.DateEnd);
cEvent.Text.BindData(vFullCalendar.Calendar.DataSource.Description);
cEvent.EditMode.BindData(aas.View.FullCalendar.CheckBoxEditMode.checked);
cEvent.OnEventClick.BindCommand(aas.Services.Browser.SystemServices.Alert('display your own view to manage event properties'))

vFullCalendar.GridEvent.BindGrid(aas.Data.MainData.CalendarEvent);
var cStart = vFullCalendar.GridEvent.AddGridColumn('Start', aas.ColumnType.Span);
cStart.Text.BindData(vFullCalendar.GridEvent.DataSource.DateStart, 'dd/MM/yyyy HH:mm');
var cEnd = vFullCalendar.GridEvent.AddGridColumn('End', aas.ColumnType.Span);
cEnd.Text.BindData(vFullCalendar.GridEvent.DataSource.DateEnd, 'dd/MM/yyyy HH:mm');
var cDesc = vFullCalendar.GridEvent.AddGridColumn('Description', aas.ColumnType.Span);
cDesc.Text.BindData(vFullCalendar.GridEvent.DataSource.Description);