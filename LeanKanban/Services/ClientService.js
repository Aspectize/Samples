/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.ClientService = {

   aasService:'ClientService',
   aasPublished: true,

   ClearAttachment: function (attachmentId) {
       var em = Aspectize.EntityManagerFromContextDataName('MainData');

       em.ClearInstance('Attachment', { Id: attachmentId });

   }

};

