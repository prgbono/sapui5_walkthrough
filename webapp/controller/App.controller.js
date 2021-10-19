sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/m/MessageToast"
], function (BaseController, MessageToast) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {

      onInit: function () {

      },

      onAfterRendering: function () {
         this.byId("TEST").addStyleClass("MyCustomButton2");
      },

      onShowHello: function () {
         var sRecipient = this.getModel("MiModelo").getProperty("/recipient/name");
         // show message
         MessageToast.show(this.getText("helloMsg", [sRecipient]));
         this.byId("TEST").removeStyleClass("MyCustomButton2");
      }
   });
});