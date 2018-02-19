var vGooglePlace = Aspectize.CreateView('GooglePlace', aas.Controls.GooglePlaceControl, aas.Zones.SideBarContent.ZoneContent);
vGooglePlace.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.GooglePlace));
vGooglePlace.OnLoad.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MapData.Place));
//vGooglePlace.Place.OnFullAdressChanged.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect(aas.Path.MapData.Place));

vGooglePlace.Place.Country.BindData(aas.Data.MapData.Place.Adress_Country);
vGooglePlace.Place.Latitude.BindData(aas.Data.MapData.Place.Latitude);
vGooglePlace.Place.Longitude.BindData(aas.Data.MapData.Place.Longitude);
vGooglePlace.Place.Route.BindData(aas.Data.MapData.Place.Adress_Route);
vGooglePlace.Place.StreetNumber.BindData(aas.Data.MapData.Place.Adress_StreetNumber);
vGooglePlace.Place.Zip.BindData(aas.Data.MapData.Place.Adress_Zip);
vGooglePlace.Place.City.BindData(aas.Data.MapData.Place.Adress_City);

vGooglePlace.City.BindData(aas.Data.MapData.Place.Adress_City);
vGooglePlace.Country.BindData(aas.Data.MapData.Place.Adress_Country);
vGooglePlace.Route.BindData(aas.Data.MapData.Place.Adress_Route);
vGooglePlace.StreetNumber.BindData(aas.Data.MapData.Place.Adress_StreetNumber);
vGooglePlace.Zip.BindData(aas.Data.MapData.Place.Adress_Zip);
vGooglePlace.Latitude.BindData(aas.Data.MapData.Place.Latitude);
vGooglePlace.Longitude.BindData(aas.Data.MapData.Place.Longitude);

