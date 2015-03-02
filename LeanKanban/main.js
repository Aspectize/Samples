function Main() {
    Aspectize.Host.InitApplication();

    if (Aspectize.Host.UrlArgs.StartingViewName != null) {
        Aspectize.Host.ActivateViewByName(Aspectize.Host.UrlArgs.StartingViewName);
    } else if (!Aspectize.Host.UrlArgs.StartingCommandName) {
        Aspectize.Host.ActivateViewByName('MainControl');
    }
}
