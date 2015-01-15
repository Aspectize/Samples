
var vTabPageCategory = Aspectize.CreateView("TabPageCategory", aas.Controls.DynamicTabPage, "DynamicTab.0:Category", true, aas.Data.AdventureWorksData.Category);
vTabPageCategory.Text.BindData(vTabPageCategory.ParentData.Name);
vTabPageCategory.GridSubCategory.BindGrid(vTabPageCategory.ParentData.CategorySubcategory.Subcategory);
var cName = vTabPageCategory.GridSubCategory.AddGridColumn("Name", "Span");
cName.Text.BindData(vTabPageCategory.GridSubCategory.DataSource.Name);

