
var vBootstrapModal = Aspectize.CreateView("BootstrapModal", aas.Controls.BootstrapModal, aas.Zones.SideBarContent.ZoneContent);
vBootstrapModal.BtnDisplayModal.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal, { viewName: aas.ViewName.BootstrapModalExample, keyboard: vBootstrapModal.CheckBoxKeyboard.checked, backdrop: aas.Expression(IIF(vBootstrapModal.CheckBoxBackdrop.checked, 'true', 'static')) });
vBootstrapModal.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapModal });

var vBootstrapModalExample = Aspectize.CreateView("BootstrapModalExample", aas.Controls.BootstrapModalExample);
vBootstrapModalExample.BtnClose.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal, { viewName: aas.ViewName.BootstrapModalExample });

