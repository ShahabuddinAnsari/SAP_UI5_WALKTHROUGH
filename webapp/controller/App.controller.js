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

        // create & set JSON model
        const oModel = new JSONModel({
          recipient: {
            name: "World of SAP",
          },
        });
        this.getView().setModel(oModel);

        // i18n model
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
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
