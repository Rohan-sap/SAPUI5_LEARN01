sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", 'sap/viz/ui5/format/ChartFormatter', 'sap/viz/ui5/api/env/Format',
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ChartFormatter, Format) {
    "use strict";

    return Controller.extend("app.first.sapui5project1.controller.covid.Pie", {
        dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
        oVizFrame: null,

        onInit: function () {
            Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;
            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
            oVizFrame.setVizProperties({
                legend: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false
                }
            });
            var dataModel = new JSONModel(this.dataPath);
            oVizFrame.setModel(dataModel);

            var oPopOver = this.getView().byId("idPopOverPie");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


        }

    });
});
