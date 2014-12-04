var dbSvc = Aspectize.ConfigureNewService("DataService", aas.ConfigurableServices.DataBaseService);

dbSvc.ConnectionString = "AccountName=aspectizeclipboard;AccountKey=9Fe0LFBGXbJcBccyYslgtlKkEAmvRXmRq0qq9fywEvzvc+PPoaRbejuhOQb9uhienphIeFIjW/LQukA9X0BuTw==;DefaultEndpointsProtocol=https;StorageStrategy=NewSort;UseAsync=true;";
dbSvc.DataBaseType = aas.ConfigurableServices.DataBaseService.DBMS.AzureStorage;
dbSvc.BuildNewTableOnSave = true;


