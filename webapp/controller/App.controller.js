sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/ui/model/json/JSONModel",
   "../util/formatter"
], function (BaseController, JSONModel, formatter) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {
      formatter: formatter,
      onInit: function () {
         var a = "Test";
         var b = a === "Test" ? "OK" : "FAIL";
      },

      onAfterRendering: function () {
         this.byId("TEST").addStyleClass("MyCustomButton2");
      },

   });
});