
var vBootstrapModal = Aspectize.CreateView("BootstrapModal", aas.Controls.BootstrapModal, aas.Zones.SideBarContent.ZoneContent);
vBootstrapModal.BtnDisplayModal.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal, {viewName: aas.ViewName.BootstrapModalContent, keyboard: vBootstrapModal.CheckBoxKeyboard.checked, backdrop: aas.Expression(IIF(vBootstrapModal.CheckBoxBackdrop.checked, 'true', 'static'))});
vBootstrapModal.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.BootstrapModal});

