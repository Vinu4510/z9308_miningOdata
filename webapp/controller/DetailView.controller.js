sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
  ], (BaseController,MessageBox) => {
    "use strict";
  
    return BaseController.extend("app.miningdata.controller.DetailView", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._onRouteMatched,this)
        },
        _onRouteMatched:function(oEvent){
            this.index=oEvent.getParameter("arguments").indexDetail
            let sPath="MiningModel1>/"+this.index
            let oView=this.getView()
            oView.bindElement(sPath)
        },
        onPressEdit:function(){
            let oRouter=this.getRouter()
            oRouter.navTo("RouteUpdateView",{
                indexUpdate:this.index
            })

        }

        
        
        



    });
  });