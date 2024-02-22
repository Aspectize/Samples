var vJQueryMask = Aspectize.CreateView('JQueryMask', aas.Controls.JQueryMaskControl, aas.Zones.SideBarContent.ZoneContent);
vJQueryMask.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.JQueryMask));
vJQueryMask.JQueryDateMaskSample.Mask.BindData(vJQueryMask.Mask.value);
