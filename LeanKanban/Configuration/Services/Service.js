
var dbSvc = Aspectize.ConfigureNewService("MyDataService", aas.ConfigurableServices.DataBaseService);

dbSvc.ConnectionString = "AccountName=aspectizedemo;AccountKey=rN7wk88Tm9ehztSARsVTA7pAxljZCNi0Qespkq54iewtXA4H8AODlJtyOAksBRxPQ+fB0wTx7q5Sq6bUCpUm0Q==;DefaultEndpointsProtocol=https;StorageStrategy=NewSort;UseAsync=true;";
dbSvc.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
dbSvc.BuildNewTableOnSave = true;

var basicAuth = Aspectize.ConfigureNewService("LeanKanbanBasicAuth", aas.ConfigurableServices.BasicAuthenticationService);
basicAuth.DataBaseService = "MyDataService";

var securityService = Aspectize.ConfigureNewService("LeanKanbanSecurityService", aas.ConfigurableServices.SecurityServices);
securityService.AuthenticationServiceName = "LeanKanbanBasicAuth";
securityService.LoginViewName = "Login";
securityService.UserProfileServiceName = "LeanKanbanBasicAuth";





