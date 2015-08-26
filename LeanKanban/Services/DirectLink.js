/// <reference path="S:\Delivery\Aspectize.core\AspectizeIntellisenseLibrary.js" />

Global.DirectLink = {

   aasService:'DirectLink',
   aasPublished:true,
      
   AccessBoard: function (boardId) {
       var cmd = Aspectize.Host.PrepareCommand();

       cmd.Attributes.aasAsynchronousCall = true;
       cmd.Attributes.aasShowWaiting = true;
       cmd.Attributes.aasDataName = this.MainData;
       cmd.Attributes.aasMergeData = true;

       cmd.OnComplete = function (result) {
           Aspectize.Host.ExecuteCommand('UIService.SetCurrent', 'MainData.Board', boardId);
           Aspectize.Host.ExecuteCommand('UIService.ShowView', 'Board');
       };

       cmd.Call('Server/LoadDataService.LoadBoard', boardId);
   }
};

