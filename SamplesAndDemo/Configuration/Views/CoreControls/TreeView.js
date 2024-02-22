
var vTreeView = Aspectize.CreateView("TreeView", aas.Controls.TreeView, aas.Zones.SideBarContent.ZoneContent);
vTreeView.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement(aas.ViewName.TreeView));

var n0Category = vTreeView.TreeViewProduct.AddNodeBinding('TreeNode', aas.Data.AdventureWorksData.Category, false, false, "Name ASC");
n0Category.Text.BindData(n0Category.DataSource.Name);
//n0Category.OnFirstExpand.BindCommand(aas.Services.Server.LoadDataService.LoadSubcategories, {categoryID: "ContextualData:[Current].CategoryID"}, aas.Data.AdventureWorksData, true, true);
n0Category.Click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.CategoryDetail));

var n1Subcategory = n0Category.AddNodeBinding('TreeNode', n0Category.ParentData.CategorySubcategory.Subcategory, true, false, "Name ASC");
n1Subcategory.Text.BindData(n1Subcategory.DataSource.Name);
//n1Subcategory.OnFirstExpand.BindCommand(aas.Services.Server.LoadDataService.LoadProducts, {subcategoryID: "ContextualData:[Current].SubcategoryID"}, aas.Data.AdventureWorksData, true, true);
n1Subcategory.Click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView(aas.ViewName.SubcategoryDetail));

var n2Product = n1Subcategory.AddNodeBinding('TreeNode', n1Subcategory.ParentData.ProductSubcategory.Product, true, false, "Name ASC");
n2Product.Text.BindData(n2Product.DataSource.Name);
n2Product.Click.BindCommand(aas.Services.Browser.UIService.ShowView(aas.ViewName.ProductDetail));

var n0Employee = vTreeView.TreeViewEmployee.AddNodeBinding('TreeNode', aas.Data.AdventureWorksData.Employee, false, false, "", "EmployeeID = 109");
n0Employee.Text.BindData(aas.Expression(n0Employee.DataSource.EmployeeContact.Contact.FirstName + ' ' + n0Employee.DataSource.EmployeeContact.Contact.LastName));

var n1Employee = n0Employee.AddNodeBinding('TreeNode', n0Employee.ParentData.EmployeeManager_ROLE_Manager.Employee, true, true);
n1Employee.Text.BindData(aas.Expression(n1Employee.DataSource.EmployeeContact.Contact.FirstName + ' ' + n1Employee.DataSource.EmployeeContact.Contact.LastName));

var vCategoryDetail = Aspectize.CreateView("CategoryDetail", aas.Controls.CategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category);
vCategoryDetail.CategoryName.BindData(vCategoryDetail.ParentData.Name);

var vEmployeeDetail = Aspectize.CreateView("EmployeeDetail", aas.Controls.EmployeeDetail, aas.Zones.TreeView.ZoneEmployeeDetail, false, aas.Data.AdventureWorksData.Employee_STAR);
vEmployeeDetail.EmployeeName.BindData(aas.Expression(vEmployeeDetail.ParentData.EmployeeContact.Contact.FirstName + ' ' + vEmployeeDetail.ParentData.EmployeeContact.Contact.LastName));

var vProductDetail = Aspectize.CreateView("ProductDetail", aas.Controls.ProductDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vProductDetail.ProductName.BindData(vProductDetail.ParentData.Name);

var vSubcategoryDetail = Aspectize.CreateView("SubcategoryDetail", aas.Controls.SubcategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory);
vSubcategoryDetail.SubCategoryName.BindData(vSubcategoryDetail.ParentData.Name);

