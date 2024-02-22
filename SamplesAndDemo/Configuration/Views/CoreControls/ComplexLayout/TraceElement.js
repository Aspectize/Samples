
var vTraceElement = Aspectize.CreateRepeatedView("TraceElement", aas.Controls.TraceElementControl, aas.Zones.ComplexLayout.RepeaterTrace, aas.Data.MainData.ComplexLayoutTrace, "DateEvent DESC", "Literal:");
vTraceElement.Trace.BindData(vTraceElement.ParentData.Trace);

