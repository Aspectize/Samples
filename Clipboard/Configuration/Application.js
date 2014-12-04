
var app = newApplication();

app.Directories = "Bootstrap";
app.DisplayExceptionEnabled = true;
app.DisplayExceptionServiceName = "DisplayCustomExceptionService";

var ctxData = newContextData();

ctxData.Name = "MainData";
ctxData.NameSpaceList = "Clipboard";
