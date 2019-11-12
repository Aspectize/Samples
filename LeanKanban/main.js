/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

function Main() {
    Aspectize.App.Initialize(function () {

        var currentUser = Aspectize.GetCurrentUser();

        if (currentUser.IsAuthenticated) {
            Aspectize.ExecuteCommand('UIService.ShowView', 'MyBoards');
        }
        else {
            Aspectize.ExecuteCommand('UIService.ShowView', 'Welcome');
        }
    });


}
