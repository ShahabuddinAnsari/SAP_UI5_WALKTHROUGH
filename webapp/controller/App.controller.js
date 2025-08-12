sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        console.log("App controller.js");
      },

      onShowHello() {
        const oResourceBundle = this.getView()
          .getModel("i18n")
          .getResourceBundle();

        const sRecipientName = this.getView()
          .getModel()
          .getProperty("/recipient")?.name;

        const sMsg = oResourceBundle.getText("helloMsg", [sRecipientName]);

        MessageToast.show(sMsg);
      },
    });
  }
);
