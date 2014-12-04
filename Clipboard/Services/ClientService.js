
Global.ClientService = {

   aasService:'ClientService',
   aasPublished: true,

   ShowModal: function (viewName) {
       Aspectize.Host.ExecuteCommand(aas.Services.Browser.UIService.ShowView, viewName);
       $('#' + viewName + ' .modal').modal('show');

       $('#' + viewName).on('hidden.bs.modal', function (e) {
           Aspectize.Host.ExecuteCommand(aas.Services.Browser.UIService.UnactivateView, viewName);
       })
   },

   CloseModal: function (viewName) {
       $('#' + viewName + ' .modal').modal('hide');
   }
};

