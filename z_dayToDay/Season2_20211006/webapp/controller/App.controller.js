sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/m/MessageToast"
], function (BaseController, JSONModel, ResourceModel, MessageToast) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {

      onInit: function () {
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
         // set data model on view
         var oData = {
            recipient: {
               name: "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel, "MiModelo");
      },

      onShowHello: function () {
         var sRecipient = this.getModel("MiModelo").getProperty("/recipient/name");
         // show message
         MessageToast.show(this.getText("helloMsg", [sRecipient]));
      }
   })
});