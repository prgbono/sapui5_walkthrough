sap.ui.define([
	"sap/ui/demo/walkthrough/base/BaseController",
	"sap/m/MessageToast",
	"../util/formatter"
], function (BaseController, MessageToast, formatter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onRowPress: function (oEvent) {
			// Obtener el objeto seleccionado dentro del array
			var oSelectedRow = oEvent.getSource().getBindingContextPath();
		},

		onShowSelected: function (oEvent) {},

		onRowSelect: function (oEvent) {}

	});
});