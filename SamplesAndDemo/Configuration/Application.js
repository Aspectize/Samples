var app = newApplication();

app.Directories = "Bootstrap, GoogleExtension, JQueryExtension";

var ctxData0 = newContextData();

ctxData0.Name = "AdventureWorksData";
ctxData0.NameSpaceList = "AdventureWorks.HumanResources,AdventureWorks.Person,AdventureWorks.Production,AdventureWorks.Purchasing,AdventureWorks.Sales";

var ctxData1 = newContextData();

ctxData1.Name = "MainData";
ctxData1.NameSpaceList = "Samples";

var ctxData2 = newContextData();

ctxData2.Name = "UploadData";
ctxData2.NameSpaceList = "Upload";


