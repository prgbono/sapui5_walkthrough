sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.base.BaseController", {

        onInit: function () {

        },

        getModel: function (sModelName) {
            return this.getView().getModel(sModelName);
        },

        getText: function (sId, aArguments) {
            return this.getModel("i18n").getResourceBundle().getText(sId, aArguments);
        },

        setModel: function (oModel, sName) {
            if (sName !== undefined && sName !== null) {
                this.getView().setModel(oModel, sName);
            } else {
                this.getView().setModel(oModel);
            }
        }
    });
});