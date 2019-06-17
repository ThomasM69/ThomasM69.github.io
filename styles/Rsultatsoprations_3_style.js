var size = 0;
var placement = 'point';
function categories_Rsultatsoprations_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'nc':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(186,186,186,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'négatif':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,180,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'positif':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,168,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Rsultatsoprations_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("RESULTAT");
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
    
var style = categories_Rsultatsoprations_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
