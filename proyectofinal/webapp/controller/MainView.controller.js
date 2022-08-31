sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.proyectofinal.controller.MainView", {
            onInit: function () {

            },
            
            onCreateEmployee : function(oEvent) {

                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateEmployee");
            },
            
            onViewEmployees : function(oEvent) {

                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("ViewEmployees");
            }
        });
    });
