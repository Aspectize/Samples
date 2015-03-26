function Main() {
    Aspectize.Host.InitApplication();

    if (Aspectize.Host.UrlArgs.StartingViewName != null) {
        Aspectize.Host.ActivateViewByName(Aspectize.Host.UrlArgs.StartingViewName);
    } else if (!Aspectize.Host.UrlArgs.StartingCommandName) {
        var currentUser = Aspectize.ExecutingContext.GetCurrentUser();

        if (currentUser.IsAuthenticated) {
            Aspectize.Host.ActivateViewByName('MyBoards');
        }
        else {
            Aspectize.Host.ActivateViewByName('Welcome');
        }
    }
}
