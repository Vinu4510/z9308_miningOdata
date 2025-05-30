sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
  ], (BaseController,MessageBox) => {
    "use strict";
  
    return BaseController.extend("app.miningdata.controller.CreateView", {
        onInit() {
            // this._getData();
        },
        
        onSubmit:function(){

            // payload
            var oLocId=this.getView().byId("idLoc");
            var oLocDesc=this.getView().byId("idLocDesc");
            var oMinResc=this.getView().byId("idMinResc");
            var oTotalCost=this.getView().byId("idTotalCost");
            var oCurr=this.getView().byId("idCurr");
            var oPosMin=this.getView().byId("idPosMin");
            var oNumOfDrills=this.getView().byId("idNumOfDrills");
            var oTypeOfMin=this.getView().byId("idTypeOfMin");
            var oProbOfMin=this.getView().byId("idProbOfMin");
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
                "LocId":sLocId,
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
            let entity="/MiningTableSet"

            let that=this
            oModel.create(entity,payload,{
                success:function(){
                    MessageBox.success("record inserted",{
                        onClose:function(){
                            let oRouter=that.getRouter()
                            oRouter.navTo("RouteMiningView")
                            oLocId.setValue()
                            oLocDesc.setValue()
                            oMinResc.setValue()
                            oTotalCost.setValue()
                            oCurr.setValue()
                            oPosMin.setValue()
                            oNumOfDrills.setValue()
                            oTypeOfMin.setValue()
                            oProbOfMin.setValue()
                            that._getData()
        

                        }.bind(that)
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