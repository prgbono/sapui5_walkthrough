sap.ui.define([
   "sap/ui/demo/walkthrough/base/BaseController",
   "sap/m/MessageToast",
], function (BaseController, MessageToast) {
   "use strict";
   return BaseController.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello : function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
      },

      onShowHello: function () {
        var sRecipient = this.getModel("MiModelo").getProperty("/recipient/name");
        // show message
        MessageToast.show(this.getText("helloMsg", [sRecipient]));
      },

      onOpenDialog: function () {
        
        // create dialog lazily
        if (!this.pDialog) {
            this.pDialog = sap.ui.xmlfragment("sap.ui.demo.walkthrough.view.fragments.HelloDialog", this)
            this.getView().addDependent(this.pDialog);
        }
        this.pDialog.open();
      },

      onCloseDialog: function () {
        this.pDialog.close();
      }
   });
});