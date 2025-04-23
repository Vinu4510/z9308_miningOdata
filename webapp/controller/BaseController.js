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
        },
        _getData:function(){
          let oModel=this.getOwnerComponent().getModel();
          let entity="/MiningTableSet"
          oModel.read(entity,{
              success:(odata,resp)=>{
                  let jModel=this.getOwnerComponent().getModel("MiningModel1")
                      jModel.setData(odata.results)

                  
                  
              },
              error:(error)=>{
                  console.log(error)
              }
          })
      }
        
    });
  });