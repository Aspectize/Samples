
var vProductDetail = Aspectize.CreateView("ProductDetail", aas.Controls.ProductDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vProductDetail.ProductName.BindData(vProductDetail.ParentData.Name);

