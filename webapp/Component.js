sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/m/MessageBox",
   "sap/ui/core/BusyIndicator"
], function (UIComponent, JSONModel, MessageBox, BusyIndicator) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata : {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel, "MiModelo");
         BusyIndicator.show(0);
         this.getModel("invoice").read("/Invoices", {
            success: function (oData) {
               this.setModel(new JSONModel(oData.results), "MisFacturas");
               BusyIndicator.hide();
            }.bind(this),
            error: function (oError) {
               MessageBox.error(oError);
               BusyIndicator.hide();
            }
         });
      }
   });
});