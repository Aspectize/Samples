
var vSubcategoryDetail = Aspectize.CreateView("SubcategoryDetail", aas.Controls.SubcategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory);
vSubcategoryDetail.SubCategoryName.BindData(vSubcategoryDetail.ParentData.Name);

