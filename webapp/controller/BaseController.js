sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("app.miningdata.controller.BaseController", {
        onInit() {
        },
        getRouter:function(model){
            return this.getOwnerComponent().getRouter(model);
        },
        getModel:function(){
          return this.getOwnerComponent().getModel()
        }
        
    });
  });