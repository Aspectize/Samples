
var vCategoryDetail = Aspectize.CreateView("CategoryDetail", aas.Controls.CategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category);
vCategoryDetail.CategoryName.BindData(vCategoryDetail.ParentData.Name);

