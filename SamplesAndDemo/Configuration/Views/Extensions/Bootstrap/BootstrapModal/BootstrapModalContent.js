
var vBootstrapModalContent = Aspectize.CreateView("BootstrapModalContent", aas.Controls.DialogContent);
vBootstrapModalContent.BtnClose.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal, {});

