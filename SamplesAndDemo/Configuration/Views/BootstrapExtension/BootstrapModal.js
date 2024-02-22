
var vBootstrapModal = Aspectize.CreateView("BootstrapModal", aas.Controls.BootstrapModal, aas.Zones.SideBarContent.ZoneContent);
vBootstrapModal.BtnDisplayModal.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal(aas.ViewName.BootstrapModalExample, vBootstrapModal.CheckBoxKeyboard.checked, aas.Expression(IIF(vBootstrapModal.CheckBoxBackdrop.checked, 'true', 'static'))));
vBootstrapModal.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.BootstrapModal));

var vBootstrapModalExample = Aspectize.CreateView("BootstrapModalExample", aas.Controls.BootstrapModalExample);
vBootstrapModalExample.BtnClose.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.BootstrapModalExample));

