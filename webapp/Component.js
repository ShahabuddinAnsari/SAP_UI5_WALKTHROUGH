sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        // create & set JSON model
        const oModel = new JSONModel({
          recipient: {
            name: "World of SAP",
          },
        });
        this.setModel(oModel);
      },
    });
  }
);
