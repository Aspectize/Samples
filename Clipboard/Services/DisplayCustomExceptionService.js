
Global.DisplayCustomExceptionService = {

    aasService: 'DisplayCustomExceptionService',
    aasPublished: true,

    Display: function (x, m) {

        var defaultMessage = "Your request could not be completed. Please try again. If the problem persists, thank you for contacting us.";

        try {
            if (Aspectize.Host.IsLocalHost) alert(m);

            var uiService = Aspectize.Host.GetService('UIService');

            var message = defaultMessage;

            if (x.Level && x.Level > 0) {

                if (x.Message) {
                    message = x.Message;
                }

                if (x.Errors && x.Errors.length > 0 && x.Errors[0].ErrorMessages.length > 0) {
                    message = x.Errors[0].ErrorMessages[0];
                }

            }

            // Show Error Modal
            uiService.SetContextValue('ErrorMessage', message);

            Aspectize.Host.ExecuteCommand('BootStrapClientService.ShowModal', 'ErrorView');
        }
        catch (e) {
            alert(defaultMessage);

            Aspectize.Host.ExecuteCommand('Server/BrowserException.Log', e.message, -1);
        }

    }
};

