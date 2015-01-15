
var vDialogDemo = Aspectize.CreateView("DialogDemo", aas.Controls.Dialog);
vDialogDemo.FixedPosition.BindData(aas.View.Dialog.CheckBoxFixed.checked);
vDialogDemo.Modal.BindData(aas.View.Dialog.CheckBoxModal.checked);
vDialogDemo.Text.BindData(aas.View.Dialog.DialogTitle.value);
vDialogDemo.WithCloseButton.BindData(aas.View.Dialog.CheckBoxClosedbutton.checked);

