var size = 0;
var placement = 'point';
function categories_ElmentsrestitusMoyenge_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Agricole':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(131,242,66,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Artisanat et Commerce':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,0.960784)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,177,0,0.719646054902)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Communication':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(172,187,200,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Cultuel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(240,158,197,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Défensif':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(182,76,18,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Domestique':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,187,114,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Funéraire':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(191,191,191,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Hydraulique':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(160,208,247,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Public':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,100,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(240,88,111,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Indéterminée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(242,242,241,0.749019607843)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_ElmentsrestitusMoyenge_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_FONCTION");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ElmentsrestitusMoyenge_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
