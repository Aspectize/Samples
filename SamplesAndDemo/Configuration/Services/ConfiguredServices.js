var ADWDB = Aspectize.ConfigureNewService("ADWDB", "DataBaseService");

ADWDB.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
ADWDB.ConnectionString = "AccountName=adventureworks;AccountKey=bpF8EHuzmIl+WEdFox77OIhC+QrEDhFSnHt2CHSyXHYgk5aTkgpkkzv9Q2EaBR1JNXlfHuae4HeUOcD1V4yJBw==;DefaultEndpointsProtocol=https;StorageStrategy=NewSort;";
ADWDB.Trace = false;
ADWDB.EnsureAuthenticationOnWrite = true;
ADWDB.BuildNewTableOnSave = false;

var ADWFileService = Aspectize.ConfigureNewService("ADWFileService", "FileService");

ADWFileService.StorageType = aas.ConfigurableServices.FileService.Storage.Azure;
ADWFileService.ConnectionString = "AccountName=adventureworks;AccountKey=bpF8EHuzmIl+WEdFox77OIhC+QrEDhFSnHt2CHSyXHYgk5aTkgpkkzv9Q2EaBR1JNXlfHuae4HeUOcD1V4yJBw==;DefaultEndpointsProtocol=https;StorageStrategy=Standard;";
ADWFileService.RootDirectory = "~\Demo";
ADWFileService.Trace = false;
ADWFileService.AccessMode = aas.ConfigurableServices.FileService.FileAccessMode.Private;

