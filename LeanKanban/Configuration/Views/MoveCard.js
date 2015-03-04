
var moveCardFlyout = Aspectize.CreateView("MoveCardFlyOut", aas.Controls.AspectizeFlyOutPanel);

var moveCard = Aspectize.CreateView("MoveCard", aas.Controls.MoveCard, aas.Zones.MoveCardFlyOut.AspectizeFlyOutPanel, true);
moveCard.SelectState.BindList(aas.Data.MainData.Board.BoardState.State, "Id", "Title");
moveCard.SelectState.SelectedValue.BindData(aas.Data.MainData.WorkItem.WorkItemState.State_Id);

