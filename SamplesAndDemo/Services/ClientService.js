Global.ClientService = {

    aasService: 'ClientService',
    aasPublished: true,
    MainData: 'MainData',

    ComplexLayoutTrace: function (trace) {
        var em = Aspectize.EntityManagerFromContextDataName(this.MainData);

        var complexLayoutTrace = em.CreateInstance('ComplexLayoutTrace');

        complexLayoutTrace.Trace = trace;
    },

    SelectProduct: function (aasEventArg) {
        // aasEventArg contains ProductID;
        var result = '';
        if (aasEventArg) {
            result = 'Product Id ' + aasEventArg + ' has been selected';
        }
        Aspectize.Host.ExecuteCommand('UIService.SetControlProperty', 'JQueryAutoComplete', 'Result', result);
    },

    AddPointFromClick: function (aasEventArg) {

        if (aasEventArg) {
            //{ Location: event.latLng, FormatAdress: '', country: '', locality: '', postal_code: '', route: '', street_number: '' };
            var em = Aspectize.EntityManagerFromContextDataName('MapData');

            var place = em.CreateInstance('Place');

            place.SetField('Longitude', aasEventArg.Longitude);
            place.SetField('Latitude', aasEventArg.Latitude);
            place.SetField('Adress_FullAdress', aasEventArg.FormatAdress);
            place.SetField('Adress_Country', aasEventArg.country);
            place.SetField('Adress_City', aasEventArg.locality);
            place.SetField('Adress_Zip', aasEventArg.postal_code);
            place.SetField('Adress_Route', aasEventArg.route);
            place.SetField('Adress_StreetNumber', aasEventArg.street_number);
        }
    },

    MovePointEnd: function (aasEventArg, placeId) {
        if (aasEventArg) {
            var em = Aspectize.EntityManagerFromContextDataName('MapData');

            var place = em.GetInstance('Place', { Id: aasEventArg.item.id});

            place.SetField('Longitude', aasEventArg.adressComponent.Longitude);
            place.SetField('Latitude', aasEventArg.adressComponent.Latitude);
            place.SetField('Adress_FullAdress', aasEventArg.adressComponent.FormatAdress);
            place.SetField('Adress_Country', aasEventArg.adressComponent.country);
            place.SetField('Adress_City', aasEventArg.adressComponent.locality);
            place.SetField('Adress_Zip', aasEventArg.adressComponent.postal_code);
            place.SetField('Adress_Route', aasEventArg.adressComponent.route);
            place.SetField('Adress_StreetNumber', aasEventArg.adressComponent.street_number);
        }
    },

    AddCalendarEvent: function (aasEventArg) {

        var em = Aspectize.EntityManagerFromContextDataName('MainData');
        
        var newCalendarEvent = em.CreateInstance('CalendarEvent');

        newCalendarEvent.SetField('DateStart', aasEventArg.start);
        newCalendarEvent.SetField('DateEnd', aasEventArg.end);
        newCalendarEvent.SetField('Description', 'this is a new calendar event');

    }
};

