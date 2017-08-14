var vJQueryRateIt = Aspectize.CreateView("JQueryRateIt", aas.Controls.JQueryRateItControl, aas.Zones.SideBarContent.ZoneContent);
vJQueryRateIt.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.JQueryRateIt));

vJQueryRateIt.SalesPersonRate.Value.BindData(aas.Data.AdventureWorksData.SalesPerson.Rate);
vJQueryRateIt.SalesPersonRate.EditMode.BindData(vJQueryRateIt.CheckEditMode.checked);

vJQueryRateIt.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vJQueryRateIt.GridSalesPerson.AddGridColumn("FirstName", "Span");
cFirstName.Text.BindData(vJQueryRateIt.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cRate = vJQueryRateIt.GridSalesPerson.AddGridColumn("Rate", "Span");
cRate.Text.BindData(vJQueryRateIt.GridSalesPerson.DataSource.Rate, 'F1');

