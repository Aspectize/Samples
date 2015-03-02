
var dbSvc = Aspectize.ConfigureNewService("MyDataService", aas.ConfigurableServices.DataBaseService);

dbSvc.ConnectionString = "";
dbSvc.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
dbSvc.BuildNewTableOnSave = true;

var securityService = Aspectize.ConfigureNewService("LeanKanbanSecurityService", aas.ConfigurableServices.SecurityServices);
securityService.AuthenticationServiceName = "MyAuthenticateService";
securityService.LoginViewName = "Login";
securityService.UserProfileServiceName = "MyAuthenticateService";

var mailService = Aspectize.ConfigureNewService('MyMailService', aas.ConfigurableServices.AspectizeSMTPService);

mailService.Host = "";
mailService.Login = "";
mailService.Password = "";
mailService.Port = 587;
mailService.Ssl = true;





