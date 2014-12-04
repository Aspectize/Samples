Global.ClientService = {

    aasService: 'ClientService',
    aasPublished: true,
    MainData: 'MainData',

    ComplexLayoutTrace: function (trace) {
        var em = Aspectize.EntityManagerFromContextDataName(this.MainData);

        var complexLayoutTrace = em.CreateInstance('ComplexLayoutTrace');

        complexLayoutTrace.Trace = trace;
    },

    ResetTrace: function (entityName) {
        var em = Aspectize.EntityManagerFromContextDataName(this.MainData);

        em.ClearAllInstances(entityName);
    }
};

