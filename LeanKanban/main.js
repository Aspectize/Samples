function Main() {
    Aspectize.Host.InitApplication();

    var currentUser = Aspectize.ExecutingContext.GetCurrentUser();

    if (currentUser.IsAuthenticated) {
        Aspectize.Host.ExecuteCommand('UIService.ShowView', 'MyBoards');
    }
    else {
        Aspectize.Host.ExecuteCommand('UIService.ShowView', 'Welcome');
    }
}
