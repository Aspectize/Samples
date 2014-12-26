
var app = newApplication();

app.Directories = "Bootstrap, BasicAuth";
app.SecurityEnabled = true;
app.SecurityServicesConfiguration = "LeanKanbanSecurityService";

app.AddAuthorizationRole(aas.Roles.Anonymous, aas.Enum.AccessControl.Forbidden);
app.AddAuthorizationRole("Registered", aas.Enum.AccessControl.ReadWrite);

var ctxData = newContextData();

ctxData.IsProfile = true;
ctxData.Name = "MainData";
ctxData.NameSpaceList = "LeanKanban, BasicAuth";
