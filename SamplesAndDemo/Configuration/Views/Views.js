
var vMainControl = Aspectize.CreateView("MainControl", aas.Controls.MainControl);
vMainControl.Home.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: aas.ViewName.SampleHome });

var vSideBarContent = Aspectize.CreateView("SideBarContent", aas.Controls.SideBarContent, aas.Zones.MainControl.ZoneMainContent);
vSideBarContent.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadDataDemo, {}, aas.Data.AdventureWorksData, true, true);

var vSampleHome = Aspectize.CreateView("SampleHome", aas.Controls.SampleHome, aas.Zones.MainControl.ZoneMainContent, true);

var vBootstrapModalContent = Aspectize.CreateView("BootstrapModalContent", aas.Controls.BootstrapModalExample);
vBootstrapModalContent.BtnClose.click.BindCommand(aas.Services.Browser.BootStrapClientService.CloseModal(aas.ViewName.BootstrapModalContent));

var vHomeMenuLiItemBootstrapControl = Aspectize.CreateRepeatedView("HomeMenuLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuBootstrapExtension, aas.Data.MainData.EnumBootstrapExtension, "", "Literal:");
vHomeMenuLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement });
vHomeMenuLiItemBootstrapControl.LinkName.BindData(vHomeMenuLiItemBootstrapControl.ParentData.EnumerationElement);

var vHomeMenuLiItemCoreControl = Aspectize.CreateRepeatedView("HomeMenuLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl, "", "Literal:");
vHomeMenuLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vHomeMenuLiItemCoreControl.ParentData.EnumerationElement });
vHomeMenuLiItemCoreControl.LinkName.BindData(vHomeMenuLiItemCoreControl.ParentData.EnumerationElement);

var vHomeMenuLiItemGoogleControl = Aspectize.CreateRepeatedView("HomeMenuLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuGoogleExtension, aas.Data.MainData.EnumGoogleExtension, "", "Literal:");
vHomeMenuLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement });
vHomeMenuLiItemGoogleControl.LinkName.BindData(vHomeMenuLiItemGoogleControl.ParentData.EnumerationElement);

var vHomeMenuLiItemLayoutControl = Aspectize.CreateRepeatedView("HomeMenuLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SampleHome.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout, "", "Literal:");
vHomeMenuLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement });
vHomeMenuLiItemLayoutControl.LinkName.BindData(vHomeMenuLiItemLayoutControl.ParentData.EnumerationElement);

var vSideBarLiItemBootstrapControl = Aspectize.CreateRepeatedView("SideBarLiItemBootstrapControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuBootstrap, aas.Data.MainData.EnumBootstrapExtension, "", "Literal:");
vSideBarLiItemBootstrapControl.LinkName.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.className.BindData(vSideBarLiItemBootstrapControl.ParentData.EnumerationElement);
vSideBarLiItemBootstrapControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vSideBarLiItemBootstrapControl.ParentData.EnumerationElement });

var vSideBarLiItemCoreControl = Aspectize.CreateRepeatedView("SideBarLiItemCoreControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuCoreControl, aas.Data.MainData.EnumCoreControl, "", "Literal:");
vSideBarLiItemCoreControl.LinkName.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.className.BindData(vSideBarLiItemCoreControl.ParentData.EnumerationElement);
vSideBarLiItemCoreControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vSideBarLiItemCoreControl.ParentData.EnumerationElement });

var vSideBarLiItemGoogleControl = Aspectize.CreateRepeatedView("SideBarLiItemGoogleControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuGoogle, aas.Data.MainData.EnumGoogleExtension, "", "Literal:");
vSideBarLiItemGoogleControl.LinkName.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.className.BindData(vSideBarLiItemGoogleControl.ParentData.EnumerationElement);
vSideBarLiItemGoogleControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vSideBarLiItemGoogleControl.ParentData.EnumerationElement });

var vSideBarLiItemLayoutControl = Aspectize.CreateRepeatedView("SideBarLiItemLayoutControl", aas.Controls.LiItem, aas.Zones.SideBarContent.RepeaterPanelMenuLayout, aas.Data.MainData.EnumLayout, "", "Literal:");
vSideBarLiItemLayoutControl.LinkName.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.className.BindData(vSideBarLiItemLayoutControl.ParentData.EnumerationElement);
vSideBarLiItemLayoutControl.Link.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: vSideBarLiItemLayoutControl.ParentData.EnumerationElement });

var vUpload = Aspectize.CreateView("Upload", aas.Controls.Upload, aas.Zones.SideBarContent.ZoneContent);
vUpload.DisplayNbFileUploaded.BindData(aas.Expression(IIF(vUpload.GridUploadedFiles.RowCount, '', 'hidden')));
vUpload.NbFileUploaded.BindData(vUpload.GridUploadedFiles.RowCount);
vUpload.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Upload });
vUpload.Uploader.MultipleFiles.BindData(vUpload.CheckBoxMultiple.checked);
vUpload.Uploader.Text.BindData(aas.Expression(IIF(vUpload.CheckBoxMultiple.checked, 'You can choose multiple files', 'Choose a single file')));
vUpload.Uploader.ToolTip.BindData("All modern browser are supported");
vUpload.Uploader.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, { uploadedFiles: vUpload.Uploader.SelectedFile }, aas.Data.UploadData, false, true);
vUpload.UploaderButton.Text.BindData("Click on the button to upload");
vUpload.UploaderButton.className.BindData("btn btn-default");
vUpload.UploaderButton.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, { uploadedFiles: vUpload.UploaderButton.SelectedFile }, aas.Data.UploadData, false, true);
vUpload.UploaderImage.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, { uploadedFiles: vUpload.UploaderImage.SelectedFile }, aas.Data.UploadData, false, true);
vUpload.UploaderLink.Text.BindData("Click on the link to upload");
vUpload.UploaderLink.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, { uploadedFiles: vUpload.UploaderLink.SelectedFile }, aas.Data.UploadData, false, true);
vUpload.GridUploadedFiles.BindGrid(aas.Data.UploadData.FileUploaded);
vUpload.GridUploadedFiles.EmptyGridMessage.BindData("");
vUpload.GridUploadedFiles.AutoSort.BindData("false");
var cName = vUpload.GridUploadedFiles.AddGridColumn("Name", "BootstrapSpan");
cName.Text.BindData(vUpload.GridUploadedFiles.DataSource.Name);
var cContentType = vUpload.GridUploadedFiles.AddGridColumn("ContentType", "BootstrapSpan");
cContentType.Text.BindData(vUpload.GridUploadedFiles.DataSource.ContentType);
var cSize = vUpload.GridUploadedFiles.AddGridColumn("Size", "BootstrapSpan");
cSize.Text.BindData(vUpload.GridUploadedFiles.DataSource.Size, "# ### ###");

var vComboBox = Aspectize.CreateView("ComboBox", aas.Controls.Combo, aas.Zones.SideBarContent.ZoneContent);
vComboBox.BUCurrentDisplay.BindData(vComboBox.SelectBU.CurrentDisplay);
vComboBox.BUCurrentValue.BindData(vComboBox.SelectBU.CurrentValue);
vComboBox.BUNVDCurrentDisplay.BindData(vComboBox.SelectBUNVD.CurrentDisplay);
vComboBox.BUNVDCurrentValue.BindData(vComboBox.SelectBUNVD.CurrentValue);
vComboBox.CurrentProduct.BindData(aas.Data.AdventureWorksData.Product.Name);
vComboBox.CurrentProductSubCategory.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory.Name);
vComboBox.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.ComboBox });
vComboBox.SelectBU.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectBU.CurrentSyncDisabled.BindData("true");
vComboBox.SelectBUNVD.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectBUNVD.NullValueDisplay.BindData("Choose Category");
vComboBox.SelectBUNVD.CurrentSyncDisabled.BindData("true");
vComboBox.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectSubCategory.BindList(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "SubcategoryID", "Name", null, "Name ASC", "", "");
vComboBox.SelectProductSubCategory.BindList(aas.Data.AdventureWorksData.Subcategory, "SubcategoryID", "Name", aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory_SubcategoryID, "Name ASC", "", "");
vComboBox.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", null, "Name ASC", "", "");

var vRepeater = Aspectize.CreateView("Repeater", aas.Controls.Repeater, aas.Zones.SideBarContent.ZoneContent);
vRepeater.NbProduct.BindData(vRepeater.RepeaterPanelProduct.RowCount);
vRepeater.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Repeater });
vRepeater.TxtFilter.keyup.BindCommand(aas.Services.Browser.UIService.SetCustomFilter, { controlName: aas.ViewName.Repeater.RepeaterPanelProduct, customFilter: aas.Expression('(Name).toLowerCase().indexOf("' + vRepeater.TxtFilter.value + '".toLowerCase()) !== -1') }, null, false, true);
vRepeater.SelectOrder.BindList(aas.Data.MainData.EnumProductOrderField, "EnumerationElement", "EnumerationElement");
vRepeater.SelectOrder.NullValueDisplay.BindData("Choose Order Field");
vRepeater.SelectOrder.CurrentSyncDisabled.BindData("true");
vRepeater.SelectOrder.SelectedValueChanged.BindCommand(aas.Services.Browser.UIService.SetSortExpression, { controlName: aas.ViewName.Repeater.RepeaterPanelProduct, sortExpression: aas.Expression(IIF(vRepeater.SelectOrder.CurrentValue, vRepeater.SelectOrder.CurrentValue + ' ASC', '')) }, null, false, true);
vRepeater.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name", null, "Name ASC", "", "");
vRepeater.SelectSubCategory.BindList(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "SubcategoryID", "Name", null, "Name ASC", "", "");

var vGrid = Aspectize.CreateView("Grid", aas.Controls.Grid, aas.Zones.SideBarContent.ZoneContent);
vGrid.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Grid });
vGrid.TxtFilter.keyup.BindCommand(aas.Services.Browser.UIService.SetCustomFilter, { controlName: vGrid.GridDynamicFilter, customFilter: aas.Expression('(Name).toLowerCase().indexOf("' + vGrid.TxtFilter.value + '".toLowerCase()) !== -1') });
vGrid.SelectPageSize.BindList(aas.Data.MainData.EnumPageSize, "EnumerationValue", "EnumerationValue");
vGrid.GridProduct.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vGrid.GridProductPage.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vGrid.GridProductPage.PageSize.BindData(vGrid.SelectPageSize.CurrentValue);
vGrid.GridProductPage.AutoSort.BindData(vGrid.CheckBoxAutoSort.checked);
vGrid.GridSubCategory.BindGrid(aas.Data.AdventureWorksData.Subcategory, "CategorySubcategory.Category.Name ASC");
vGrid.GridSubCategory.GroupRows.BindData("true");
var cCategory = vGrid.GridSubCategory.AddGridColumn("Category", "Span");
cCategory.Text.BindData(vGrid.GridSubCategory.DataSource.CategorySubcategory.Category.Name);
var cName = vGrid.GridSubCategory.AddGridColumn("Name", "Span");
cName.Text.BindData(vGrid.GridSubCategory.DataSource.Name);
vGrid.GridProductColumns.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
var cName = vGrid.GridProductColumns.AddGridColumn("Name", "Span");
cName.Text.BindData(vGrid.GridProductColumns.DataSource.Name);
var cProductNumber = vGrid.GridProductColumns.AddGridColumn("ProductNumber", "Span");
cProductNumber.Text.BindData(vGrid.GridProductColumns.DataSource.ProductNumber);
var cSafetyStockLevel = vGrid.GridProductColumns.AddGridColumn("SafetyStockLevel", "TextBox");
cSafetyStockLevel.Text.BindData(vGrid.GridProductColumns.DataSource.SafetyStockLevel);
var cSize = vGrid.GridProductColumns.AddGridColumn("Size", "Span");
cSize.Text.BindData(vGrid.GridProductColumns.DataSource.Size);
var cSizeUnitMeasureCode = vGrid.GridProductColumns.AddGridColumn("SizeUnitMeasureCode", "Span");
cSizeUnitMeasureCode.Text.BindData(vGrid.GridProductColumns.DataSource.SizeUnitMeasureCode);
var cDynamicImage = vGrid.GridProductColumns.AddGridColumn("DynamicImage", "Image");
cDynamicImage.ImageUrl.BindData(aas.Expression('./LoadDataService.LoadImage.jpg.cmd.ashx?productId=' + vGrid.GridProductColumns.DataSource.ProductID));
var cRowClassRed = vGrid.GridProductColumns.AddGridColumn("RowClassRed", "RowClass");
cRowClassRed.className.BindData(aas.Expression(IIF(vGrid.GridProductColumns.DataSource.SafetyStockLevel < 100, 'Red', 'Green')));
vGrid.GridCategory.BindGrid(aas.Data.AdventureWorksData.Category, "Name ASC", "", true);
vGrid.GridSubCategoryChild.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory, "Name ASC", "", true);
vGrid.GridDynamicFilter.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);

var vTab = Aspectize.CreateView("Tab", aas.Controls.Tab, aas.Zones.SideBarContent.ZoneContent);
vTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Tab });
vTab.BtnActivateView.click.BindCommand(aas.Services.Browser.UIService.ActivateView, { viewName: aas.ViewName.TabPageCategory, schemaPath: aas.Path.AdventureWorksData.Category });
vTab.SelectCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name");

var vPanel = Aspectize.CreateView("Panel", aas.Controls.PanelControl, aas.Zones.SideBarContent.ZoneContent);
vPanel.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Panel });
vPanel.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ViewA });
vPanel.BtnViewB.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ViewB });
vPanel.BtnViewC.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ViewC });
vPanel.BtnViewD.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ViewD });

var vFlyout = Aspectize.CreateView("Flyout", aas.Controls.Flyout, aas.Zones.SideBarContent.ZoneContent);
vFlyout.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Flyout });
vFlyout.BtnShowFlyout.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.FlyoutPanel });

var vDialog = Aspectize.CreateView("Dialog", aas.Controls.DialogControl, aas.Zones.SideBarContent.ZoneContent);
vDialog.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Dialog });
vDialog.BtnShowDialog.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.DialogDemo });

var vTreeView = Aspectize.CreateView("TreeView", aas.Controls.TreeView, aas.Zones.SideBarContent.ZoneContent);
vTreeView.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.TreeView });
var n0Category = vTreeView.TreeViewProduct.AddNodeBinding(aas.Data.AdventureWorksData.Category, false, false, "Name ASC");
n0Category.Text.BindData(n0Category.DataSource.Name);
n0Category.OnFirstExpand.BindCommand(aas.Services.Server.LoadDataService.LoadSubcategories, { categoryID: "ContextualData:[Current].CategoryID" }, aas.Data.AdventureWorksData, true, true);
n0Category.Click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: aas.ViewName.CategoryDetail });
var n1Subcategory = n0Category.AddNodeBinding(n0Category.ParentData.CategorySubcategory.Subcategory, true, false, "Name ASC");
n1Subcategory.Text.BindData(n1Subcategory.DataSource.Name);
n1Subcategory.OnFirstExpand.BindCommand(aas.Services.Server.LoadDataService.LoadProducts, { subcategoryID: "ContextualData:[Current].SubcategoryID" }, aas.Data.AdventureWorksData, true, true);
n1Subcategory.Click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowView, { viewName: aas.ViewName.SubcategoryDetail });
var n2Product = n1Subcategory.AddNodeBinding(n1Subcategory.ParentData.ProductSubcategory.Product, true, false, "Name ASC");
n2Product.Text.BindData(n2Product.DataSource.Name);
n2Product.Click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ProductDetail });
var n0Employee = vTreeView.TreeViewEmployee.AddNodeBinding(aas.Data.AdventureWorksData.Employee);
n0Employee.Text.BindData(aas.Expression(n0Employee.DataSource.EmployeeContact.Contact.FirstName + ' ' + n0Employee.DataSource.EmployeeContact.Contact.LastName));
var n1Employee = n0Employee.AddNodeBinding(n0Employee.ParentData.EmployeeManager_ROLE_Manager.Employee, true, true);
n1Employee.Text.BindData(aas.Expression(n1Employee.DataSource.EmployeeContact.Contact.FirstName + ' ' + n1Employee.DataSource.EmployeeContact.Contact.LastName));

var vImage = Aspectize.CreateView("Image", aas.Controls.ImageControl, aas.Zones.SideBarContent.ZoneContent);
vImage.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Image });
vImage.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage, { productId: vImage.SelectProduct.CurrentValue });
vImage.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", null, "Name ASC", "", "");
vImage.SelectProduct.CurrentSyncDisabled.BindData("false");

var vBootstrapDatepicker = Aspectize.CreateView("BootstrapDatepicker", aas.Controls.BootstrapDatepickerControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapDatepicker.DateSelected.BindData(vBootstrapDatepicker.BootstrapDatePickerSample.Value, "dd MMMM yyyy");
vBootstrapDatepicker.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapDatepicker });

var vBootstrapGrid = Aspectize.CreateView("BootstrapGrid", aas.Controls.BootstrapGridControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapGrid.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapGrid });
vBootstrapGrid.SelectPageSize.BindList(aas.Data.MainData.EnumPageSize, "EnumerationValue", "EnumerationValue");
vBootstrapGrid.GridProduct.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProduct.className.BindData("table-hover table-condensed");
vBootstrapGrid.GridProductColumns.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProductColumns.className.BindData("table-hover table-condensed");
var cName = vBootstrapGrid.GridProductColumns.AddGridColumn("Name", "BootstrapSpan");
cName.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.Name);
var cProductNumber = vBootstrapGrid.GridProductColumns.AddGridColumn("ProductNumber", "BootstrapSpan");
cProductNumber.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.ProductNumber);
var cSafetyStockLevel = vBootstrapGrid.GridProductColumns.AddGridColumn("SafetyStockLevel", "BootstrapText");
cSafetyStockLevel.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.SafetyStockLevel);
var cSize = vBootstrapGrid.GridProductColumns.AddGridColumn("Size", "BootstrapSpan");
cSize.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.Size);
var cSizeUnitMeasureCode = vBootstrapGrid.GridProductColumns.AddGridColumn("SizeUnitMeasureCode", "BootstrapSpan");
cSizeUnitMeasureCode.Text.BindData(vBootstrapGrid.GridProductColumns.DataSource.SizeUnitMeasureCode);
var cDynamicImage = vBootstrapGrid.GridProductColumns.AddGridColumn("DynamicImage", "BootstrapImage");
cDynamicImage.ImageUrl.BindData(aas.Expression('./LoadDataService.LoadImage.jpg.cmd.ashx?productId=' + vBootstrapGrid.GridProductColumns.DataSource.ProductID));
var cRowClassRed = vBootstrapGrid.GridProductColumns.AddGridColumn("RowClassRed", "RowClass");
cRowClassRed.className.BindData(aas.Expression(IIF(vBootstrapGrid.GridProductColumns.DataSource.SafetyStockLevel < 100, 'danger', 'success')));
vBootstrapGrid.GridProductPage.BindGrid(aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vBootstrapGrid.GridProductPage.PageSize.BindData(vBootstrapGrid.SelectPageSize.CurrentValue);
vBootstrapGrid.GridProductPage.AutoSort.BindData(vBootstrapGrid.CheckBoxAutoSort.checked);
vBootstrapGrid.GridProductPage.className.BindData("table-hover table-condensed");
vBootstrapGrid.GridSubCategory.BindGrid(aas.Data.AdventureWorksData.Subcategory, "CategorySubcategory.Category.Name ASC");
vBootstrapGrid.GridSubCategory.GroupRows.BindData("true");
vBootstrapGrid.GridSubCategory.className.BindData("table-hover table-condensed");
var cCategory = vBootstrapGrid.GridSubCategory.AddGridColumn("Category", "BootstrapSpan");
cCategory.Text.BindData(vBootstrapGrid.GridSubCategory.DataSource.CategorySubcategory.Category.Name);
var cName = vBootstrapGrid.GridSubCategory.AddGridColumn("Name", "BootstrapSpan");
cName.Text.BindData(vBootstrapGrid.GridSubCategory.DataSource.Name);

var vBootstrapTab = Aspectize.CreateView("BootstrapTab", aas.Controls.BootstrapTabControl, aas.Zones.SideBarContent.ZoneContent);
vBootstrapTab.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapTab });
vBootstrapTab.RadioButtonOrientation.BindList(aas.Data.MainData.EnumBootstrapTabOrientation, "EnumerationValue", "EnumerationElement");

var vRadioButtons = Aspectize.CreateView("RadioButtons", aas.Controls.RadioButtons, aas.Zones.SideBarContent.ZoneContent);
vRadioButtons.CurrentProduct.BindData(aas.Data.AdventureWorksData.Product.Name);
vRadioButtons.CurrentProductSubCategory.BindData(aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory.Name);
vRadioButtons.CurrentDisplay.BindData(aas.Data.AdventureWorksData.Category.Name);
vRadioButtons.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.RadioButtons });
vRadioButtons.RadioButtonCategory.BindList(aas.Data.AdventureWorksData.Category, "CategoryID", "Name");
vRadioButtons.RadioButtonSubCategory.BindList(aas.Data.AdventureWorksData.Subcategory, "SubcategoryID", "Name", aas.Data.AdventureWorksData.Product.ProductSubcategory.Subcategory_SubcategoryID);
vRadioButtons.SelectProduct.BindList(aas.Data.AdventureWorksData.Product, "ProductID", "Name", null, "Name ASC", "", "");

var vBootstrapModal = Aspectize.CreateView("BootstrapModal", aas.Controls.BootstrapModal, aas.Zones.SideBarContent.ZoneContent);
vBootstrapModal.BtnDisplayModal.click.BindCommand(aas.Services.Browser.BootStrapClientService.ShowModal, { viewName: aas.ViewName.BootstrapModalContent, keyboard: vBootstrapModal.CheckBoxKeyboard.checked, backdrop: aas.Expression(IIF(vBootstrapModal.CheckBoxBackdrop.checked, 'true', 'static')) });
vBootstrapModal.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.BootstrapModal });

var vCheckBoxList = Aspectize.CreateView("CheckBoxList", aas.Controls.CheckBoxList, aas.Zones.SideBarContent.ZoneContent);
vCheckBoxList.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.CheckBoxList });
vCheckBoxList.OnLoad.BindCommand(aas.Services.Server.LoadDataService.LoadSalesOrdersHeader, { salesPersonId: aas.Data.AdventureWorksData.SalesPerson.SalesPersonID }, aas.Data.AdventureWorksData, true, true);
vCheckBoxList.CheckBoxListDemo.BindList(aas.Data.AdventureWorksData.SalesReason, "SalesReasonID", "Name", aas.Data.AdventureWorksData.SalesPerson.SalesOrderHeaderSalesPerson.SalesOrderHeader.SalesOrderHeaderSalesReason.SalesReason_SalesReasonID, "Name ASC", "", "");
vCheckBoxList.GridSalesOrder.BindGrid(aas.Data.AdventureWorksData.SalesPerson.SalesOrderHeaderSalesPerson.SalesOrderHeader);
var cOrderDate = vCheckBoxList.GridSalesOrder.AddGridColumn("OrderDate", "Span");
cOrderDate.Text.BindData(vCheckBoxList.GridSalesOrder.DataSource.OrderDate);
var cSalesOrderNumber = vCheckBoxList.GridSalesOrder.AddGridColumn("SalesOrderNumber", "Span");
cSalesOrderNumber.Text.BindData(vCheckBoxList.GridSalesOrder.DataSource.SalesOrderNumber);
vCheckBoxList.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
vCheckBoxList.GridSalesPerson.OnRowClick.BindCommand(aas.Services.Server.LoadDataService.LoadSalesOrdersHeader, { salesPersonId: aas.Data.AdventureWorksData.SalesPerson.SalesPersonID }, aas.Data.AdventureWorksData, true, true);
var cContact = vCheckBoxList.GridSalesPerson.AddGridColumn("Contact", "Span");
cContact.Text.BindData(aas.Expression(vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName + ' ' + vCheckBoxList.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName));

var vGoogleTable = Aspectize.CreateView("GoogleTable", aas.Controls.GoogleTableControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleTable.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.GoogleTable });
vGoogleTable.TextProductName.value.BindData(aas.Data.AdventureWorksData.Product.Name);
vGoogleTable.GoogleTableProduct.BindGrid(aas.Data.AdventureWorksData.Product);
vGoogleTable.GoogleTableProduct.PageSize.BindData("10");
vGoogleTable.GoogleTableProduct.ShowRowNumber.BindData("true");
vGoogleTable.GoogleTableProduct.FirstRowNumber.BindData("12");
vGoogleTable.GoogleTableProduct.OnRowClick.BindCommand(aas.Services.Browser.TestingServices.Alert, { message: aas.Data.AdventureWorksData.Product.Name });
var cProductID = vGoogleTable.GoogleTableProduct.AddGridColumn("ProductID", "GoogleColumn");
cProductID.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.ProductID);
var cName = vGoogleTable.GoogleTableProduct.AddGridColumn("Name", "GoogleColumn");
cName.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.Name);
var cProductNumber = vGoogleTable.GoogleTableProduct.AddGridColumn("ProductNumber", "GoogleColumn");
cProductNumber.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.ProductNumber);
var cSafetyStockLevel = vGoogleTable.GoogleTableProduct.AddGridColumn("SafetyStockLevel", "GoogleColumn");
cSafetyStockLevel.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SafetyStockLevel);
var cSize = vGoogleTable.GoogleTableProduct.AddGridColumn("Size", "GoogleColumn");
cSize.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.Size);
var cSizeUnitMeasureCode = vGoogleTable.GoogleTableProduct.AddGridColumn("SizeUnitMeasureCode", "GoogleColumn");
cSizeUnitMeasureCode.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SizeUnitMeasureCode);
var cSellStartDate = vGoogleTable.GoogleTableProduct.AddGridColumn("SellStartDate", "GoogleColumn");
cSellStartDate.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SellStartDate);
var cSellEndDate = vGoogleTable.GoogleTableProduct.AddGridColumn("SellEndDate", "GoogleColumn");
cSellEndDate.Value.BindData(vGoogleTable.GoogleTableProduct.DataSource.SellEndDate);

var vGoogleLineChart = Aspectize.CreateView("GoogleLineChart", aas.Controls.GoogleLineChartControl, aas.Zones.SideBarContent.ZoneContent);
vGoogleLineChart.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.GoogleLineChart });
vGoogleLineChart.GoogleLineChartSales.BindGrid(aas.Data.AdventureWorksData.SalesPerson.QuotaHistory, "QuotaDate ASC");
vGoogleLineChart.GoogleLineChartSales.Title.BindData("Sales");
var cQuotaDate = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("QuotaDate", "GoogleLineChartColumn");
cQuotaDate.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.QuotaDate);
var cSalesQuota = vGoogleLineChart.GoogleLineChartSales.AddGridColumn("SalesQuota", "GoogleLineChartColumn");
cSalesQuota.Value.BindData(vGoogleLineChart.GoogleLineChartSales.DataSource.SalesQuota);
vGoogleLineChart.GridSalesPerson.BindGrid(aas.Data.AdventureWorksData.SalesPerson);
var cFirstName = vGoogleLineChart.GridSalesPerson.AddGridColumn("FirstName", "Span");
cFirstName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.FirstName);
var cLastName = vGoogleLineChart.GridSalesPerson.AddGridColumn("LastName", "Span");
cLastName.Text.BindData(vGoogleLineChart.GridSalesPerson.DataSource.ContactSalesPerson.Contact.LastName);

var vComplexLayout = Aspectize.CreateView("ComplexLayout", aas.Controls.ComplexLayout, aas.Zones.SideBarContent.ZoneContent);
vComplexLayout.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ChildViewA });
vComplexLayout.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.ComplexLayout });
vComplexLayout.BtnReset.click.BindCommand(aas.Services.Browser.UIService.UnactivateView, { viewName: aas.ViewName.ParentView });
vComplexLayout.BtnResetTrace.click.BindCommand(aas.Services.Browser.ClientService.ResetTrace, { entityName: "ComplexLayoutTrace" });
vComplexLayout.BtnParentView.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ParentView });

var vTimer = Aspectize.CreateView("Timer", aas.Controls.Timer, aas.Zones.SideBarContent.ZoneContent);
vTimer.ActivateTimer.click.BindCommand(aas.Services.Browser.UIService.ActivateTimer, { controlName: vTimer.Timer });
vTimer.BtnResetTrace.click.BindCommand(aas.Services.Browser.ClientService.ResetTrace, { entityName: "TimerTrace" });
vTimer.DeactivateTimer.click.BindCommand(aas.Services.Browser.UIService.DeactivateTimer, { controlName: vTimer.Timer });
vTimer.Timer.Count.BindData(vTimer.TxtCount.value);
vTimer.Timer.Period.BindData(vTimer.TxtPeriod.value);
vTimer.Timer.OnTimer.BindCommand(aas.Services.Browser.DataService.AddRowAndSelect, { schemaPath: aas.Path.MainData.TimerTrace });
vTimer.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, { element: aas.ViewName.Timer });
vTimer.GridTrace.BindGrid(aas.Data.MainData.TimerTrace, "DateEvent ASC");
var cTrace = vTimer.GridTrace.AddGridColumn("Trace", "BootstrapSpan");
cTrace.Text.BindData(aas.Expression('Timer call commands on ' + vTimer.GridTrace.DataSource.DateEvent));

var vProductItem = Aspectize.CreateRepeatedView("ProductItem", aas.Controls.ProductItem, aas.Zones.Repeater.RepeaterPanelProduct, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product, "", "Literal:");
vProductItem.ProductName.BindData(vProductItem.ParentData.Name);
vProductItem.ProductNumber.BindData(vProductItem.ParentData.ProductNumber);
vProductItem.ImageProduct.OnNeedImage.BindCommand(aas.Services.Server.LoadDataService.LoadImage, { productId: vProductItem.ParentData.ProductID });
vProductItem.Delete.click.BindCommand(aas.Services.Browser.DataService.DeleteRow, { schemaPath: vProductItem.ParentPath.ProductID });

var vViewA = Aspectize.CreateView("ViewA", aas.Controls.ViewA, aas.Zones.Panel.ZonePanelSample, true);

var vViewB = Aspectize.CreateView("ViewB", aas.Controls.ViewB, aas.Zones.Panel.ZonePanelSample);

var vViewC = Aspectize.CreateView("ViewC", aas.Controls.ViewC, aas.Zones.Panel.ZonePanelSample);

var vViewD = Aspectize.CreateView("ViewD", aas.Controls.ViewD, aas.Zones.Panel.ZonePanelSample);

var vDynamicTab = Aspectize.CreateView("DynamicTab", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneDynamicTab, true);

var vTabContainer = Aspectize.CreateView("TabContainer", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTab, true);

var vTabVertical = Aspectize.CreateView("TabVertical", aas.Controls.AspectizeNewTab, aas.Zones.Tab.ZoneTabVertical, true);
vTabVertical.className.BindData("TabVertical");

var vTabViewA = Aspectize.CreateView("TabViewA", aas.Controls.ViewA, "TabContainer.0:View A", true);

var vTabViewB = Aspectize.CreateView("TabViewB", aas.Controls.ViewB, "TabContainer.1:View B");

var vTabViewC = Aspectize.CreateView("TabViewC", aas.Controls.ViewC, "TabContainer.2:View C");

var vTabViewD = Aspectize.CreateView("TabViewD", aas.Controls.ViewD, "TabContainer.3:View D");

var vTabPageCategory = Aspectize.CreateView("TabPageCategory", aas.Controls.DynamicTabPage, "DynamicTab.0:Category", true, aas.Data.AdventureWorksData.Category);
vTabPageCategory.Text.BindData(vTabPageCategory.ParentData.Name);
vTabPageCategory.GridSubCategory.BindGrid(vTabPageCategory.ParentData.CategorySubcategory.Subcategory);
var cName = vTabPageCategory.GridSubCategory.AddGridColumn("Name", "Span");
cName.Text.BindData(vTabPageCategory.GridSubCategory.DataSource.Name);

var vDialogDemo = Aspectize.CreateView("DialogDemo", aas.Controls.Dialog);
vDialogDemo.FixedPosition.BindData(aas.View.Dialog.CheckBoxFixed.checked);
vDialogDemo.Modal.BindData(aas.View.Dialog.CheckBoxModal.checked);
vDialogDemo.Text.BindData(aas.View.Dialog.DialogTitle.value);
vDialogDemo.WithCloseButton.BindData(aas.View.Dialog.CheckBoxClosedbutton.checked);

var vDialogContent = Aspectize.CreateView("DialogContent", aas.Controls.DialogContent, aas.Zones.DialogDemo.Dialog, true);
vDialogContent.BtnClose.click.BindCommand(aas.Services.Browser.UIService.UnactivateView, { viewName: aas.ViewName.DialogDemo });

var vProductDetail = Aspectize.CreateView("ProductDetail", aas.Controls.ProductDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory.ProductSubcategory.Product);
vProductDetail.ProductName.BindData(vProductDetail.ParentData.Name);

var vSubcategoryDetail = Aspectize.CreateView("SubcategoryDetail", aas.Controls.SubcategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category.CategorySubcategory.Subcategory);
vSubcategoryDetail.SubCategoryName.BindData(vSubcategoryDetail.ParentData.Name);

var vCategoryDetail = Aspectize.CreateView("CategoryDetail", aas.Controls.CategoryDetail, aas.Zones.TreeView.ZoneDetail, false, aas.Data.AdventureWorksData.Category);
vCategoryDetail.CategoryName.BindData(vCategoryDetail.ParentData.Name);

var vEmployeeDetail = Aspectize.CreateView("EmployeeDetail", aas.Controls.EmployeeDetail, aas.Zones.TreeView.ZoneEmployeeDetail, true, aas.Data.AdventureWorksData.Employee_STAR);
vEmployeeDetail.EmployeeName.BindData(aas.Expression(vEmployeeDetail.ParentData.EmployeeContact.Contact.FirstName + ' ' + vEmployeeDetail.ParentData.EmployeeContact.Contact.LastName));

var vTabVerticalViewA = Aspectize.CreateView("TabVerticalViewA", aas.Controls.ViewA, "TabVertical.0:ViewA", true);

var vTabVerticalViewB = Aspectize.CreateView("TabVerticalViewB", aas.Controls.ViewB, "TabVertical.1:ViewB");

var vTabVerticalViewC = Aspectize.CreateView("TabVerticalViewC", aas.Controls.ViewC, "TabVertical.2:ViewC");

var vTabVerticalViewD = Aspectize.CreateView("TabVerticalViewD", aas.Controls.ViewD, "TabVertical.3:ViewD");

var vFlyoutPanel = Aspectize.CreateView("FlyoutPanel", aas.Controls.AspectizeFlyOutPanel);
vFlyoutPanel.Modal.BindData(aas.View.Flyout.CheckBoxModal.checked);

var vFlyoutContent = Aspectize.CreateView("FlyoutContent", aas.Controls.FlyoutContent, aas.Zones.FlyoutPanel.AspectizeFlyOutPanel, true);

var vBootstrapTabContainer = Aspectize.CreateView("BootstrapTabContainer", aas.Controls.BootstrapTab, aas.Zones.BootstrapTab.ZoneTab, true);
vBootstrapTabContainer.className.BindData(aas.Data.MainData.EnumBootstrapTabOrientation.EnumerationDescription);

var vBootstrapTabViewA = Aspectize.CreateView("BootstrapTabViewA", aas.Controls.ViewA, "BootstrapTabContainer.0:ViewA", true);

var vBootstrapTabViewB = Aspectize.CreateView("BootstrapTabViewB", aas.Controls.ViewB, "BootstrapTabContainer.1:ViewB");

var vBootstrapTabViewC = Aspectize.CreateView("BootstrapTabViewC", aas.Controls.ViewC, "BootstrapTabContainer.2:ViewC");

var vBootstrapTabViewD = Aspectize.CreateView("BootstrapTabViewD", aas.Controls.ViewD, "BootstrapTabContainer.3:ViewD");

var vChildViewA = Aspectize.CreateView("ChildViewA", aas.Controls.ControlA, aas.Zones.ParentView.ZoneContent, true);
vChildViewA.BtnViewC.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ChildViewC });
vChildViewA.BtnViewD.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ChildViewD });
vChildViewA.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewA OnActivated" });
vChildViewA.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewA OnDeactivated" });
vChildViewA.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewA OnLoad" });

var vChildViewB = Aspectize.CreateView("ChildViewB", aas.Controls.ControlB, aas.Zones.ParentView.ZoneContent);
vChildViewB.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewB OnActivated" });
vChildViewB.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewB OnDeactivated" });
vChildViewB.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewB OnLoad" });

var vHeaderView = Aspectize.CreateView("HeaderView", aas.Controls.HeaderControl, aas.Zones.ParentView.ZoneHeader, true);
vHeaderView.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "HeaderView OnActivated" });
vHeaderView.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "HeaderView OnDeactivated" });
vHeaderView.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "HeaderView OnLoad" });

var vChildViewC = Aspectize.CreateView("ChildViewC", aas.Controls.ControlC, aas.Zones.ChildViewA.ZoneDetail, true);
vChildViewC.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewC OnActivated" });
vChildViewC.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewC OnDeactivated" });
vChildViewC.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewC OnLoad" });

var vChildViewD = Aspectize.CreateView("ChildViewD", aas.Controls.ControlD, aas.Zones.ChildViewA.ZoneDetail);
vChildViewD.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewD OnActivated" });
vChildViewD.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewD OnDeactivated" });
vChildViewD.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ChildViewD OnLoad" });

var vTraceElement = Aspectize.CreateRepeatedView("TraceElement", aas.Controls.TraceElementControl, aas.Zones.ComplexLayout.RepeaterTrace, aas.Data.MainData.ComplexLayoutTrace, "DateEvent DESC", "Literal:");
vTraceElement.Trace.BindData(vTraceElement.ParentData.Trace);

var vParentView = Aspectize.CreateView("ParentView", aas.Controls.ParentControl, aas.Zones.ComplexLayout.ZoneMain);
vParentView.BtnViewA.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ChildViewA });
vParentView.BtnViewB.click.BindCommand(aas.Services.Browser.UIService.ShowView, { viewName: aas.ViewName.ChildViewB });
vParentView.OnActivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ParentView OnActivated" });
vParentView.OnDeactivated.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ParentView OnDeactivated" });
vParentView.OnLoad.BindCommand(aas.Services.Browser.ClientService.ComplexLayoutTrace, { trace: "ParentView OnLoad" });

