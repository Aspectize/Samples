
var dbSvc = Aspectize.ConfigureNewService("MyDataService", aas.ConfigurableServices.DataBaseService);

// Fill your own ConnectionString
dbSvc.ConnectionString = "";
dbSvc.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
dbSvc.BuildNewTableOnSave = true;

var myFileService = Aspectize.ConfigureNewService("MyFileService", aas.ConfigurableServices.FileService);

// Fill your own ConnectionString
myFileService.AccessMode = aas.ConfigurableServices.FileService.FileAccessMode.Private;
myFileService.ConnectionString = "";
myFileService.RootDirectory = "Attachment";
myFileService.StorageType = aas.ConfigurableServices.FileService.Storage.Azure;


var securityService = Aspectize.ConfigureNewService("LeanKanbanSecurityService", aas.ConfigurableServices.SecurityServices);
securityService.AuthenticationServiceName = "MyAuthenticateService";
securityService.LoginViewName = "Login";
securityService.UserProfileServiceName = "MyAuthenticateService";
securityService.algorithm = aas.ConfigurableServices.SecurityServices.Algorithm.MD5;
securityService.protocol = aas.ConfigurableServices.SecurityServices.AuthenticationProtocol.ChallengeResponse;

var mailService = Aspectize.ConfigureNewService('MyMailService', aas.ConfigurableServices.AspectizeSMTPService);

// Fill your own smtp parameters
mailService.Host = "";
mailService.Login = "";
mailService.Password = "";
mailService.Port = 587;
mailService.Ssl = true;





