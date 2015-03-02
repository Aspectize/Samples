
var app = newApplication();

app.Directories = "Bootstrap";
app.SecurityEnabled = true;
app.SecurityServicesConfiguration = "LeanKanbanSecurityService";

app.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.Forbidden);
app.AddAuthorizationRole(aas.Roles.Registered, aas.Enum.AccessControl.ReadWrite);

var ctxData = newContextData();

ctxData.IsProfile = true;
ctxData.Name = "MainData";
ctxData.NameSpaceList = "LeanKanban";

var ctxUserConfirmation = newContextData();

ctxUserConfirmation.IsDataSet = false;
ctxUserConfirmation.Name = "UserConfirmation";

