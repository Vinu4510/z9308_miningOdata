sap.ui.define([
    
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"

], (BaseController,Filter,FilterOperator,MessageBox) => {
    "use strict";

    return BaseController.extend("app.miningdata.controller.MiningView", {
        onInit() {
            this._getData();
        },
        // _getData:function(){
        //     let oModel=this.getOwnerComponent().getModel();
        //     let entity="/MiningTableSet"
        //     oModel.read(entity,{
        //         success:(odata,resp)=>{
        //             let jModel=this.getOwnerComponent().getModel("MiningModel1")
        //                 jModel.setData(odata.results)

                    
                    
        //         },
        //         error:(error)=>{
        //             console.log(error)
        //         }
        //     })
        // },


        onRowSelection:function(oEvent){
            let oItem=oEvent.getParameter("listItem")
            let oContext=oItem.getBindingContextPath("MiningModel1")
            let aItems=oContext.split("/")
            let index=aItems[aItems.length-1]
            let oRouter=this.getOwnerComponent().getRouter()
                oRouter.navTo("RouteDetailView",{
                    indexDetail:index
                })
                
        },


        onDelete:function(oEvent){
            let oContext =oEvent.getSource().getBindingContext("MiningModel1").getObject()
            MessageBox.confirm("are you sure you want to delete",{
            onClose:(choice)=>{
                if(choice==='OK'){
                    // call function over here
                    this._onDeleteCall(oContext)

                }
                
            }
        })
        
        },
        _onDeleteCall:function(parm){
            let key1=parm.LocId;
           
            let oModel=this.getOwnerComponent().getModel();
            
            let entity="/MiningTableSet(LocId='"+key1+"')";
            oModel.remove(entity,{
                success:(resp)=>{
                    MessageBox.success("Record Deleted",{
                        onClose:function(){
                            this._getData()
                        }.bind(this)
                    })
                    
                },
                error:(err)=>{
                    MessageBox.error("deletion failed")
                }

            })

        },
        







        onCreate:function(){
            var oRouter=this.getRouter();
            oRouter.navTo("RouteCreateView");
        },
        onSearch:function(){
            let aFilters=[]
            let sLocId=this.getView().byId("idfilterLoc").getValue();
            let sLocDesc=this.getView().byId("idfilterLocDesc").getValue();


        if(sLocId){
            let filterName=new Filter("LocId", FilterOperator.Contains,sLocId)                    
            aFilters.push(filterName)
          }
          if(sLocDesc){
           let filterName=new Filter("LocDesc", FilterOperator.Contains,sLocDesc)                    
           aFilters.push(filterName)
          }
       
          let oTable=this.getView().byId("idMiningTab")
          let bindingInfo=oTable.getBinding("items")
          if (bindingInfo) {
              bindingInfo.filter(aFilters);
          }

      }
    });
});