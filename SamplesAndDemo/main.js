function Main() {
    Aspectize.Host.InitApplication();

    Aspectize.Host.ExecuteCommand('UIService.ShowView', 'SampleHome');

    var bootStrapClientService = Aspectize.Host.GetService('BootStrapClientService');

    bootStrapClientService.InitBootstrap();
}
