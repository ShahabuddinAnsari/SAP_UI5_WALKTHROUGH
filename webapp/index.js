sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  // new Text({
  //   text: "Hello, SAP UI5 Walkthrough!",
  //   id: "helloText",
  // }).placeAt("content");

  XMLView.create({
    viewName: "ui5.walkthrough.view.App",
  })
    .then((oView) => {
      oView.placeAt("content");
    })
    .catch((error) => {
      console.error("Error creating view:", error);
    });
});
