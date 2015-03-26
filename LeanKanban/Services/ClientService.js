/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.ClientService = {

    aasService:'ClientService',
    aasPublished: true,
    MainData: 'MainData',

    CreateBoard: function (schemaPath) {
        var currentUser = Aspectize.ExecutingContext.GetCurrentUser();

        var em = Aspectize.EntityManagerFromContextDataName(this.MainData);

        var newBoard = em.CreateInstance('Board');

        var user = em.GetInstance('User', { Id: currentUser.UserId });

        var boardUser = em.AssociateInstance('BoardUser', user, 'User', newBoard, 'Board');

        boardUser.SetField('IsOwner', true);

        Aspectize.Host.ExecuteCommand('UIService.SetCurrent', schemaPath, newBoard.Id);
    },

    ClearAttachment: function (attachmentId) {
        var em = Aspectize.EntityManagerFromContextDataName(this.MainData);

        em.ClearInstance('Attachment', { Id: attachmentId });

    }

};

