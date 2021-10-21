sap.ui.define([
	"sap/ui/demo/walkthrough/base/BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";
	return BaseController.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		onRowPress: function (oEvent) {
			// Obtener el objeto seleccionado dentro del array
			var oSelectedRow = oEvent.getSource().getBindingContextPath();
		},

		onShowSelected: function (oEvent) {},

		onRowSelect: function (oEvent) {}

	});
});