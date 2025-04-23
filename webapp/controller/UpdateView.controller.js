sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
  ], (BaseController,MessageBox) => {
    "use strict";
  
    return BaseController.extend("app.miningdata.controller.UpdateView", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._routeMatched,this)
        },
        
        _routeMatched:function(oEvent){
            let index=oEvent.getParameter("arguments").indexUpdate
            let sPath="MiningModel1>/"+index
            let oView=this.getView()
            oView.bindElement(sPath)
        },

        onUpdate:function(){

            // payload
            var oLocId=this.getView().byId("idLocUp");
            var oLocDesc=this.getView().byId("idLocDescUp");
            var oMinResc=this.getView().byId("idMinRescUp");
            var oTotalCost=this.getView().byId("idTotalCostUp");
            var oCurr=this.getView().byId("idCurrUp");
            var oPosMin=this.getView().byId("idPosMinUp");
            var oNumOfDrills=this.getView().byId("idNumOfDrillsUp");
            var oTypeOfMin=this.getView().byId("idTypeOfMinUp");
            var oProbOfMin=this.getView().byId("idProbOfMinUp");
            //values for all the fields

            let sLocId=oLocId.getValue();
            let sLocDesc=oLocDesc.getValue();
            let sMinResc=oMinResc.getValue();
            let sTotalCost=oTotalCost.getValue();
            let sCurr=oCurr.getValue();
            let sPosMin=oPosMin.getValue();
            let sNumOfDrills=oNumOfDrills.getValue();
            let sTypeOfMin=oTypeOfMin.getValue();
            let sProbOfMin=oProbOfMin.getValue();

            let payload={
                //"LocId":sLocId,
                "LocDesc":sLocDesc,
                "MiningResc":sMinResc,
                "TotalCost":sTotalCost,
                "Currency":sCurr,
                "PossibleMineral":sPosMin,
                "NumberOfDrills":sNumOfDrills,
                "TypeOfMineral":sTypeOfMin,
                "ProbabilityOfOutcome":sProbOfMin
 
            }
            // first step: get the model
            let oModel=this.getOwnerComponent().getModel()
 
            // second step: we need the entity
            let entity="/MiningTableSet(LocId='"+sLocId+"')"

            let that=this
            oModel.update(entity,payload,{
                success:function(){
                    MessageBox.success("record updated",{
                        onClose:function(){
                            let oRouter=that.getRouter()
                            oRouter.navTo("RouteMiningView")
                        

                        }
                    })
                    
                },
                error:function(error){
                    MessageBox.error("record failed")
                }
            })

            // first step get the model
            // we need the entity
            // method (theentity,payload{})
        }



    });
  });