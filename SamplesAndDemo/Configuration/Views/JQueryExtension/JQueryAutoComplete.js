var vJQueryAutoComplete = Aspectize.CreateView('JQueryAutoComplete', aas.Controls.JQueryAutoCompleteControl, aas.Zones.SideBarContent.ZoneContent);
vJQueryAutoComplete.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.JQueryAutoComplete));
vJQueryAutoComplete.Result.BindData('');
vJQueryAutoComplete.TxtSearch.Url.BindData('LoadDataService.SearchProduct.jsonx.cmd.ashx');
vJQueryAutoComplete.TxtSearch.OnSelectItem.BindCommand(aas.Services.Browser.ClientService.SelectProduct(''));
vJQueryAutoComplete.TxtSearch.FillSelected.BindData(vJQueryAutoComplete.CheckFillSelected.checked);
vJQueryAutoComplete.TxtSearch.Custom.BindData(vJQueryAutoComplete.CheckCustom.checked);
