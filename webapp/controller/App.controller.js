sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.App", {

      onInit: function () {
         var oData = {
            "SelectedProduct": "HT-1001",
            "SelectedProduct2": "HT-1001",
            "SelectedProduct3": "HT-1001",
            "ProductCollection": [
               {
                  "ProductId": "HT-1000",
                  "Name": "Notebook Basic 15"
               },
               {
                  "ProductId": "HT-1001",
                  "Name": "Notebook Basic 17"
               },
               {
                  "ProductId": "HT-1002",
                  "Name": "Notebook Basic 18"
               },
               {
                  "ProductId": "HT-1003",
                  "Name": "Notebook Basic 19"
               },
               {
                  "ProductId": "HT-1007",
                  "Name": "ITelO Vault"
               }
            ],
            "ProductCollection2": [
               {
                  "ProductId": "HT-1000",
                  "Name": "Notebook Basic 15"
               },
               {
                  "ProductId": "HT-1001",
                  "Name": "Notebook Basic 17"
               },
               {
                  "ProductId": "HT-1002",
                  "Name": "Notebook Basic 18"
               },
               {
                  "ProductId": "HT-1003",
                  "Name": "Notebook Basic 19"
               },
               {
                  "ProductId": "HT-1007",
                  "Name": "ITelO Vault"
               }
            ],
            "ProductCollection3": [
               {
                  "ProductId": "HT-1000",
                  "Name": "Notebook Basic 15"
               },
               {
                  "ProductId": "HT-1001",
                  "Name": "Notebook Basic 17"
               },
               {
                  "ProductId": "HT-1002",
                  "Name": "Notebook Basic 18"
               },
               {
                  "ProductId": "HT-1003",
                  "Name": "Notebook Basic 19"
               },
               {
                  "ProductId": "HT-1007",
                  "Name": "ITelO Vault"
               }
            ],
            "Editable": true,
            "Enabled": true
         };

         // set explored app's demo model on this sample
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel, "productos");
      },

      onAfterRendering: function () {
         this.byId("TEST").addStyleClass("MyCustomButton2");
      },

   });
});