sap.ui.define([
	"sap/ui/demo/walkthrough/base/BaseController",
	"sap/m/MessageToast",
	"../util/formatter",
	"sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
], function (BaseController, MessageToast, formatter, Filter, FilterOperator, Sorter) {
	"use strict";
	return BaseController.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,

		oProductNameFilter: null,

    oShipperNameFilter: null,

		onRowPress: function (oEvent) {
			// Obtener el objeto seleccionado dentro del array
			var oSelectedRow = oEvent.getSource().getBindingContextPath();
		},

		onShowSelected: function (oEvent) {

		},

		onRowSelect: function (oEvent) {

		},
		
		onFilterProductName: function (oEvent) {
			// build filter array
			var aFilters = [];
			var aFinalFilters = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
					this.oProductNameFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
					aFinalFilters = [this.oProductNameFilter];
					if (this.oShipperNameFilter !== null) {
							aFinalFilters.push(this.oShipperNameFilter);
					}
			} else {
					this.oProductNameFilter = null;
					if (this.oShipperNameFilter !== null) {
							aFinalFilters.push(this.oShipperNameFilter);
					}
			}
			aFilters.push(new sap.ui.model.Filter({
					filters: aFinalFilters,
					and: true
			}));

			// filter binding
			this.byId("myInvoicesTable").getBinding("items").filter(aFilters);
		},

		onFilterShipperName: function (oEvent) {
			// build filter array
			var aFilters = [];
			var aFinalFilters = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
					this.oShipperNameFilter = new Filter("ShipperName", FilterOperator.Contains, sQuery);
					aFinalFilters = [this.oShipperNameFilter];
					if (this.oProductNameFilter !== null) {
							aFinalFilters.push(this.oProductNameFilter);
					}
			} else {
					this.oShipperNameFilter = null;
					if (this.oProductNameFilter !== null) {
							aFinalFilters.push(this.oProductNameFilter);
					}
			}
			aFilters.push(new sap.ui.model.Filter({
					filters: aFinalFilters,
					and: true
			}));

			// filter binding
			this.byId("myInvoicesTable").getBinding("items").filter(aFilters);
		},

		onPressSort: function (oEvent) {
			var oIcon = oEvent.getSource();
			var sIconSrc = oIcon.getSrc();

			//SORT JAVASCRIPT CUSTOM
			/*var aData = this.getModel("invoice").getData().Invoices;
			aData.sort(function (a, b) {
					var aField = a["ShipperName"];
					var bField = b["ShipperName"];
					if (
							sIconSrc === "sap-icon://sort-descending"
					) {
							if (aField > bField) {
									return 1;
							} else if (bField > aField) {
									return -1;
							}
					} else if (sIconSrc === "sap-icon://sort-ascending") {
							if (aField < bField) {
									return 1;
							} else if (bField < aField) {
									return -1;
							}
					}
					return 0;
			});
			this.getModel("invoice").updateBindings();*/

			//SORT UI5 STANDARD
			var bDescdending = sIconSrc === "sap-icon://sort-descending" ? false : true;
			var bGrouping = true;
			var oSort = new Sorter("ShipperName", bDescdending, bGrouping)
			this.byId("myInvoicesTable").getBinding("items").sort(oSort);

			//CHANGE SOURCE ICON TO REFLECT NEW SORTING
			if (
					sIconSrc === "sap-icon://sort" ||
					sIconSrc === "sap-icon://sort-descending"
			) {
					oIcon.setSrc("sap-icon://sort-ascending");
			} else if (sIconSrc === "sap-icon://sort-ascending") {
					oIcon.setSrc("sap-icon://sort-descending");
			}
		}
	});
});