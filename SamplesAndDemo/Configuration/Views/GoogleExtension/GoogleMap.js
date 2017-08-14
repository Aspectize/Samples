var vGoogleMap = Aspectize.CreateView('GoogleMap', aas.Controls.GoogleMapControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleMap.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GoogleMap));

vGoogleMap.GridPlace.BindGrid(aas.Data.MapData.Place);
var cFullAdress = vGoogleMap.GridPlace.AddGridColumn('Adress', 'Span');
cFullAdress.Text.BindData(vGoogleMap.GridPlace.DataSource.Adress_FullAdress);
var cLatitude = vGoogleMap.GridPlace.AddGridColumn('Latitude', 'Span');
cLatitude.Text.BindData(vGoogleMap.GridPlace.DataSource.Latitude);
var cLongitude = vGoogleMap.GridPlace.AddGridColumn('Longitude', 'Span');
cLongitude.Text.BindData(vGoogleMap.GridPlace.DataSource.Longitude);

vGoogleMap.Map.BindGrid(aas.Data.MapData.Place);
var map = vGoogleMap.Map.AddGridColumn("Place", "GoogleExtension.GoogleMarkerPart");
map.Latitude.BindData(vGoogleMap.Map.DataSource.Latitude);
map.Longitude.BindData(vGoogleMap.Map.DataSource.Longitude);
map.Draggable.BindData(vGoogleMap.CheckMapDraggable.checked);
map.OnDragEnd.BindCommand(aas.Services.Browser.ClientService.MovePointEnd(''));

vGoogleMap.Map.AddMarkerOnClick.BindData(true);

vGoogleMap.Map.OnMapClick.BindCommand(aas.Services.Browser.ClientService.AddPointFromClick(''));

//vGoogleMap.Place.OnFullAdressChanged.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MapData.Place));

//vGoogleMap.Place.FullAdress.BindData(aas.Data.MapData.Place.Adress_FullAdress);
//vGoogleMap.Place.City.BindData(aas.Data.MapData.Place.Adress_City);
//vGoogleMap.Place.Country.BindData(aas.Data.MapData.Place.Adress_Country);
//vGoogleMap.Place.Latitude.BindData(aas.Data.MapData.Place.Latitude);
//vGoogleMap.Place.Longitude.BindData(aas.Data.MapData.Place.Longitude);
//vGoogleMap.Place.Route.BindData(aas.Data.MapData.Place.Adress_Route);
//vGoogleMap.Place.StreetNumber.BindData(aas.Data.MapData.Place.Adress_StreetNumber);
//vGoogleMap.Place.Zip.BindData(aas.Data.MapData.Place.Adress_Zip);



