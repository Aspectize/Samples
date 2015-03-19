Global.AuthClientService = {

   aasService:'AuthClientService',
   aasPublished: true,

   aasCommandAttributes: { ConfirmUserCommand: { CanExecuteOnStart: true } },
      
   SignUp: function (firstName, lastName, email) {

       $('.RegisterAlert').removeClass('alert-danger');
       $('.RegisterAlert').html('');

       var message = '';

       var re = /\b[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/;
       if (!email || !re.test(email)) {
           message = 'Invalid email';
       }

       if (!lastName) {
           message = 'Invalid last name';
       }
    
       if (!firstName) {
           message = 'Invalid first name';
       }

       if (!message) {
           var userValid = Aspectize.Host.ExecuteCommand('Server/InscriptionService.IsEmailAvailable', email);

           if (!userValid) {
               message = 'Email is not available';
           }
       }

       if (message) {
           $('.RegisterAlert').addClass('alert-danger');
           $('.RegisterAlert').html(message);
           $('.RegisterAlert').alert();
           return;
       }

       var cmd = Aspectize.Host.PrepareCommand();

       cmd.Attributes.aasAsynchronousCall = true;
       cmd.Attributes.aasShowWaiting = true;
       
       cmd.OnComplete = function (result) {

           if (result) {
               $('.HideFormOnSuccess').hide();
               $('.RegisterAlert').addClass('alert-success');
               $('.RegisterAlert').html('Register succeeded ! Check your emails, to confirm your registration.');
               $('.RegisterAlert').alert();
           } else {
               $('.RegisterAlert').addClass('alert-danger');
               $('.RegisterAlert').html('Register failed');
               $('.RegisterAlert').alert();
           }
       }

       cmd.Call('Server/InscriptionService.SignUp', firstName, lastName, email);

   },

   ResetRegister: function() {
       $('.RegisterAlert').removeClass('alert-danger');
       $('.RegisterAlert').html('');
       $('.HideFormOnSuccess').show();
       $('#Register-TxtFirstName').val('');
       $('#Register-TxtLastName').val('');
       $('#Register-TxtEmail').val('');
   },

   Login: function (email, pwd) {

       Aspectize.Host.ExecuteCommand('Browser/SecurityServices.Authenticate', email, pwd);

       var currentUser = Aspectize.ExecutingContext.GetCurrentUser();

       if (!currentUser.IsAuthenticated) {

           $('.LoginAlert').addClass('alert-danger');
           $('.LoginAlert').html('Invalid user name or password.');
           $('.LoginAlert').alert();
       } else {
           Aspectize.Host.ExecuteCommand('Browser/UIService.ShowView', 'MyBoards');
       }
   },

   ConfirmUserCommand: function (code) {

       if (Aspectize.Host.UrlArgs.StartingViewOrCommandName === 'AuthClientService.ConfirmUserCommand') {

           var cmd = Aspectize.Host.PrepareCommand();

           cmd.Attributes.aasDataName = 'UserConfirmation';
           cmd.Attributes.aasAsynchronousCall = true;

           cmd.OnComplete = function (result) {

               if (result) {
                   var uiService = Aspectize.Host.GetService('UIService');

                   uiService.SetContextValue('ConfirmationCode', code);

                   Aspectize.Host.ExecuteCommand('Browser/BootStrapClientService.ShowModal', 'ConfirmUser', false, 'static');
               }
               else {
                   var href = window.location.href;

                   window.location.href = href.split('?')[0];
               }
           }
           
            cmd.Call('Server/InscriptionService.GetInscription', code);
       }
   },

   ValidateInscription: function (login, pwd, pwdConfirm, rememberMe) {
       if (pwd && pwd == pwdConfirm) {
           $('.ConfirmUserAlert').removeClass('alert-danger');
           $('.ConfirmUserAlert').html('');

           var uiService = Aspectize.Host.GetService('UIService');

           var code = uiService.GetContextValue('ConfirmationCode');

           var pwdHash = Aspectize.Md5HashBase64(pwd);

           Aspectize.Host.ExecuteCommand('Server/InscriptionService.ValidateInscription', code, login, pwdHash);
           Aspectize.Host.ExecuteCommand('Browser/SecurityServices.Authenticate', login, pwd, rememberMe);
           Aspectize.Host.ExecuteCommand('Browser/BootStrapClientService.CloseModal', 'ConfirmUser');
           Aspectize.Host.ExecuteCommand('Browser/UIService.ShowView', 'MyBoards');
       }
       else {
           $('.ConfirmUserAlert').addClass('alert-danger');
           $('.ConfirmUserAlert').html("Password and confirmation don't match.");
           $('.ConfirmUserAlert').alert();
       }
   }

   

};

