
var vTab = Aspectize.CreateView("Tab", aas.Controls.Tab, aas.Zones.SideBarContent.ZoneContent);
vTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.Tab));
//vTab.BtnActivateView.click.BindCommand(aas.Services.Browser.UIService.ActivateView(aas.ViewName.TabPageCategory, aas.Path.AdventureWorksData.Category));
//vTab.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name");

var vTabContainer = Aspectize.CreateView("TabContainer", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTab, true);

var vTabViewA = Aspectize.CreateView("TabViewA", aas.Controls.ViewA, "TabContainer.0:View A", true);
var vTabViewB = Aspectize.CreateView("TabViewB", aas.Controls.ViewB, "TabContainer.1:View B");
var vTabViewC = Aspectize.CreateView("TabViewC", aas.Controls.ViewC, "TabContainer.2:View C");
var vTabViewD = Aspectize.CreateView("TabViewD", aas.Controls.ViewD, "TabContainer.3:View D");

var vTabVertical = Aspectize.CreateView("TabVertical", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTabVertical, true);
vTabVertical.className.BindData("TabVertical");

var vTabVerticalViewA = Aspectize.CreateView("TabVerticalViewA", aas.Controls.ViewA, "TabVertical.0:ViewA", true);
var vTabVerticalViewB = Aspectize.CreateView("TabVerticalViewB", aas.Controls.ViewB, "TabVertical.1:ViewB");
var vTabVerticalViewC = Aspectize.CreateView("TabVerticalViewC", aas.Controls.ViewC, "TabVertical.2:ViewC");
var vTabVerticalViewD = Aspectize.CreateView("TabVerticalViewD", aas.Controls.ViewD, "TabVertical.3:ViewD");

//var vDynamicTab = Aspectize.CreateView("DynamicTab", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneDynamicTab, true);

//var vTabPageCategory = Aspectize.CreateView("TabPageCategory", aas.Controls.DynamicTabPage, "DynamicTab.0:Category", false, aas.Data.AdventureWorksData.Category);
//vTabPageCategory.Text.BindData(vTabPageCategory.ParentData.Name);
//vTabPageCategory.GridSubCategory.BindGrid(vTabPageCategory.ParentData.CategorySubcategory.Subcategory);
//var cName = vTabPageCategory.GridSubCategory.AddGridColumn("Name", aas.ColumnType.Span);
//cName.Text.BindData(vTabPageCategory.GridSubCategory.DataSource.Name);

