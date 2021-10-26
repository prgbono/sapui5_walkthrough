sap.ui.define([], function () {
  'use strict';
  return{
    statusText: function (sStatus) {
      switch (sStatus) {
        case 'A':
          return this.getText('statusA');
        case 'B':
          return this.getText('statusB');
        case 'C':
          return this.getText('statusC');
        default:
          return sStatus;
      }
    }
  }
})