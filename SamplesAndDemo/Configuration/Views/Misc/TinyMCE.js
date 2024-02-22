
var vTinyMCE = Aspectize.CreateView("TinyMCE", aas.Controls.TinyMCEControl, aas.Zones.SideBarContent.ZoneContent);
vTinyMCE.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.TinyMCE));

vTinyMCE.BtnEdit.click.BindCommand(aas.Services.Browser.UIService.SetEditMode(aas.ViewName.TinyMCE, aas.Expression(!aas.View.TinyMCE.Content.EditMode)));
vTinyMCE.Content.EditMode.BindData(false);
vTinyMCE.Content.Value.BindData(aas.Data.Content);

vTinyMCE.HtmlViewer.HtmlFragment.BindData(aas.Data.Content);

