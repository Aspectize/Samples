
var vUpload = Aspectize.CreateView("Upload", aas.Controls.Upload, aas.Zones.SideBarContent.ZoneContent);
vUpload.DisplayNbFileUploaded.BindData(aas.Expression(IIF(vUpload.GridUploadedFiles.RowCount, '', 'hidden')));
vUpload.NbFileUploaded.BindData(vUpload.GridUploadedFiles.RowCount);
vUpload.OnActivated.BindCommand(aas.Services.Browser.BootStrapClientService.ActiveLiElement, {element: aas.ViewName.Upload});
vUpload.Uploader.MultipleFiles.BindData(vUpload.CheckBoxMultiple.checked);
vUpload.Uploader.Text.BindData(aas.Expression(IIF(vUpload.CheckBoxMultiple.checked, 'You can choose multiple files', 'Choose a single file')));
vUpload.Uploader.ToolTip.BindData("All modern browser are supported");
vUpload.Uploader.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, {uploadedFiles: vUpload.Uploader.SelectedFile}, aas.Data.UploadData, false, true);
vUpload.UploaderButton.Text.BindData("Click on me to upload");
vUpload.UploaderButton.className.BindData("btn btn-default");
vUpload.UploaderButton.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, {uploadedFiles: vUpload.UploaderButton.SelectedFile}, aas.Data.UploadData, false, true);
vUpload.UploaderButton.MultipleFiles.BindData(true);
vUpload.UploaderImage.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, { uploadedFiles: vUpload.UploaderImage.SelectedFile }, aas.Data.UploadData, false, true);
vUpload.UploaderImage.Text.BindData('');
vUpload.UploaderImage.MultipleFiles.BindData(true);
vUpload.UploaderLink.Text.BindData("Click on me to upload");
vUpload.UploaderLink.OnFileSelected.BindCommand(aas.Services.Server.UploaderService.UploadFiles, {uploadedFiles: vUpload.UploaderLink.SelectedFile}, aas.Data.UploadData, false, true);
vUpload.UploaderLink.MultipleFiles.BindData(true);

vUpload.GridUploadedFiles.BindGrid(aas.Data.UploadData.FileUploaded);
vUpload.GridUploadedFiles.EmptyGridMessage.BindData("");
vUpload.GridUploadedFiles.AutoSort.BindData(false);
var cName = vUpload.GridUploadedFiles.AddGridColumn("Name", "Bootstrap.BootstrapSpan");
cName.Text.BindData(vUpload.GridUploadedFiles.DataSource.Name);
var cContentType = vUpload.GridUploadedFiles.AddGridColumn("ContentType", "Bootstrap.BootstrapSpan");
cContentType.Text.BindData(vUpload.GridUploadedFiles.DataSource.ContentType);
var cSize = vUpload.GridUploadedFiles.AddGridColumn("Size", "Bootstrap.BootstrapSpan");
cSize.Text.BindData(vUpload.GridUploadedFiles.DataSource.Size, "# ### ###");

