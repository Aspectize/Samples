
var vBootstrapModalContent = Aspectize.CreateView("BootstrapModalContent", aas.Controls.DialogContent, aas.Zones.MainControl.ZoneModalContent);
vBootstrapModalContent.BtnClose.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal, {});

