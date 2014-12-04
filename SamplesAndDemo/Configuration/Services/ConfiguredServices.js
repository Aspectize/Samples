var ADWDB = Aspectize.ConfigureNewService("ADWDB", "DataBaseService");

ADWDB.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
ADWDB.ConnectionString = "";
ADWDB.Trace = false;
ADWDB.EnsureAuthenticationOnWrite = true;
ADWDB.BuildNewTableOnSave = false;

var ADWFileService = Aspectize.ConfigureNewService("ADWFileService", "FileService");

ADWFileService.StorageType = aas.ConfigurableServices.FileService.Storage.Azure;
ADWFileService.ConnectionString = "";
ADWFileService.RootDirectory = "~\Demo";
ADWFileService.Trace = false;
ADWFileService.AccessMode = aas.ConfigurableServices.FileService.FileAccessMode.Private;

