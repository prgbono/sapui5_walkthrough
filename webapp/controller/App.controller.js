sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {

      onInit: function () {
      },

      onAfterRendering: function () {
         this.byId("TEST").addStyleClass("MyCustomButton2");
      },

   });
});