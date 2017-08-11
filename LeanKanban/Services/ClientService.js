/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.ClientService = {

    aasService: 'ClientService',
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

    },

    InitDrag: function () {
        var uiService = Aspectize.Host.GetService('UIService');

        $('.WorkItem').off('dragstart');

        $('.WorkItem').on('dragstart', function (e) {

            var id = $(this)[0].id;

            var workItemId = id.substring(id.lastIndexOf(":") + 1, id.lastIndexOf("-"));

            uiService.SetContextValue('DragWorkItem', workItemId);

            e.originalEvent.dataTransfer.setData('text/plain', workItemId);

            e.stopPropagation();
        });
    },

    InitDrop: function () {
        var that = this;

        var em = Aspectize.EntityManagerFromContextDataName('MainData');

        var uiService = Aspectize.Host.GetService('UIService');

        $('.DropZone').on('dragover', function (e) {

            var workItemId = uiService.GetContextValue('DragWorkItem');

            if (workItemId) {
                var workItem = em.GetInstance('WorkItem', { Id: workItemId });

                if (workItem) {
                    e.preventDefault();
                }
            }

        });

        $('.DropZone').on('drop', function (e) {

            var workItemId = uiService.GetContextValue('DragWorkItem');

            var workItem = em.GetInstance('WorkItem', { Id: workItemId });

            var stateId = $(this)[0].dataset.stateid;

            var dropState = em.GetInstance('State', { Id: stateId });

            if (workItem && dropState) {
                var oldState = workItem.GetAssociated('WorkItemState', 'State')[0];

                if (oldState.Id !== stateId) {
                    em.DissociateInstance('WorkItemState', oldState, 'State', workItem, 'WorkItem');
                    em.AssociateInstance('WorkItemState', dropState, 'State', workItem, 'WorkItem');

                    Aspectize.Host.ExecuteCommand(aas.Services.Server.MyDataService.SaveTransactional, em.GetDataSet());

                    that.InitDrag();
                }
            }

            uiService.SetContextValue('DragWorkItem', null);

            e.preventDefault();

        });

    }

};

