/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.ClientService = {

   aasService:'ClientService',
   aasPublished: true,

   SignUp: function (userName, pwd, pwdConfirm) {

       var message = '';

       if (!userName) {
           message = 'Invalid User Name';
       }

       if (!pwd || !pwdConfirm) {
           message = message || 'Invalid password';
       }

       if (pwd !== pwdConfirm) {
           message = message || 'Password and confirmation do not match';
       }

       if (!message) {
           var userValid = Aspectize.Host.ExecuteCommand('Server/LeanKanbanBasicAuth.IsUserNameAvailable', userName);

           if (!userValid) {
               message = 'User Name is not valid';
           }
       }

       if (message) {
           $('.RegisterAlert').addClass('alert-danger');
           $('.RegisterAlert').html(message);
           $('.RegisterAlert').alert();
           return;
       }

       $('.RegisterAlert').removeClass('alert-danger');
       $('.RegisterAlert').html('');

       var pwdhash = Aspectize.Md5HashBase64(pwd);
       var result = Aspectize.Host.ExecuteCommand('Server/LeanKanbanBasicAuth.SignUp', userName, pwdhash);

       if (result) {
           $('.RegisterAlert').addClass('alert-success');
           $('.RegisterAlert').html('Register succeeded');
           $('.RegisterAlert').alert();

           this.Login(userName, pwd);

       } else {
           $('.RegisterAlert').addClass('alert-danger');
           $('.RegisterAlert').html('Register failed');
           $('.RegisterAlert').alert();
       }

   },

   Login: function (userName, pwd) {

       Aspectize.Host.ExecuteCommand('Browser/SecurityServices.Authenticate', userName, pwd);

       var currentUser = Aspectize.ExecutingContext.GetCurrentUser();

       if (!currentUser.IsAuthenticated) {

           $('.LoginAlert').addClass('alert-danger');
           $('.LoginAlert').html('Invalid email or password.');
           $('.LoginAlert').alert();
       }
       else {
           Aspectize.Host.ExecuteCommand('BootStrapClientService.ShowView', 'MyBoards');
       }
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

