function Main() {
    Aspectize.Host.InitApplication();

    Aspectize.Host.ExecuteCommand('UIService.ShowView', 'SampleHome');

    if (Aspectize.Host.UrlArgs.StartingViewName) {
        Aspectize.Host.ExecuteCommand('UIService.ShowView', Aspectize.Host.UrlArgs.StartingViewName);
    }
}
