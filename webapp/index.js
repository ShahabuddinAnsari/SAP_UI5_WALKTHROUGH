sap.ui.define(["sap/m/Text"], (Text) => {
  "use strict";

  new Text({
    text: "Hello, SAP UI5 Walkthrough!",
    id: "helloText",
  }).placeAt("content");
});
