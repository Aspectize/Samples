/// <reference path="H:\TestAspectize\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.ClientService = {

   aasService:'ClientService',
   aasPublished:true,
      
   ShowModal: function (viewName) {
       Aspectize.Host.ExecuteCommand(aas.Services.Browser.UIService.ShowView, viewName);
       $('#' + viewName + ' .modal').modal('show');

       $('#' + viewName).on('hidden.bs.modal', function (e) {
           Aspectize.Host.ExecuteCommand(aas.Services.Browser.UIService.UnactivateView, viewName);
       })

       $('#' + viewName).on('shown.bs.modal', function () {
           $('#' + viewName + ' [autofocus]:first').focus();
       })

   },

   CloseModal: function (viewName) {
       $('#' + viewName + ' .modal').modal('hide');
   },

   DisplayValidator: function (control, message) {
       var controlName = control.name;

       var formGroupSelector = '.form-group-' + controlName;
       var errorControlSelector = '.error-' + controlName;

       if (message) {
           $(formGroupSelector).addClass('has-error');
           $(errorControlSelector).removeClass('hidden');
       }
       else {
           $(formGroupSelector).removeClass('has-error');
           $(errorControlSelector).addClass('hidden');
       }
       $(errorControlSelector).html(message);
   },

   DisplayValidatorCommand: function (scopeInfo) {

       var invalidDatas = scopeInfo.InvalidData;

       var scopeViews = scopeInfo.Scope.Views;

       var currentViewName = '';

       for (var field in scopeViews) {
           currentViewName = field;
           break;
       }

       var retVal = true;

       var numErrors = invalidDatas.length;

       for (var i = 0; i < invalidDatas.length; i++) {
           var invalidData = invalidDatas[i];

           var control = invalidData.Control;

           var message = null;
           for (var Error in invalidData.Errors) {
               message = invalidData.Errors[Error];
               break;
           }

           this.DisplayValidator(control, message);

           if (message) {
               retVal = false;
           }
       }

       return retVal;
   },

};

