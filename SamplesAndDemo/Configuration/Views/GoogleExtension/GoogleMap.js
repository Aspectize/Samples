var vGoogleMap = Aspectize.CreateView('GoogleMap', aas.Controls.GoogleMapControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleMap.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GoogleMap));

vGoogleMap.GridPlace.BindGrid(aas.Data.MapData.Place);
var cFullAdress = vGoogleMap.GridPlace.AddGridColumn('Adress', aas.ColumnType.Span);
cFullAdress.Text.BindData(vGoogleMap.GridPlace.DataSource.Adress_FullAdress);
var cLatitude = vGoogleMap.GridPlace.AddGridColumn('Latitude', aas.ColumnType.Span);
cLatitude.Text.BindData(vGoogleMap.GridPlace.DataSource.Latitude);
var cLongitude = vGoogleMap.GridPlace.AddGridColumn('Longitude', aas.ColumnType.Span);
cLongitude.Text.BindData(vGoogleMap.GridPlace.DataSource.Longitude);

vGoogleMap.Map.BindGrid(aas.Data.MapData.Place);
var map = vGoogleMap.Map.AddGridColumn("Place", aas.ColumnType.GoogleExtension.GoogleMarkerPart);
map.Latitude.BindData(vGoogleMap.Map.DataSource.Latitude);
map.Longitude.BindData(vGoogleMap.Map.DataSource.Longitude);
map.Draggable.BindData(vGoogleMap.CheckMapDraggable.checked);
map.OnDragEnd.BindCommand(aas.Services.Browser.ClientService.MovePointEnd(''));

vGoogleMap.Map.AddMarkerOnClick.BindData(true);

vGoogleMap.Map.OnMapClick.BindCommand(aas.Services.Browser.ClientService.AddPointFromClick(''));


