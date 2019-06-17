ol.proj.get("EPSG:3946").setExtent([1780810.000000, 5111630.000000, 1905820.000000, 5242220.000000]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Fonds de plans',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Orthophotographie2015duGrandLyon_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://download.data.grandlyon.com/wms/grandlyon?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "Ortho2015_vue_ensemble_16cm_CC46",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "<strong>Orthophotographie</strong> @grandlyon - mai 2015<br />",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Orthophotographie2015duGrandLyon_0, 0]);var format_Voies_1 = new ol.format.GeoJSON();
var features_Voies_1 = format_Voies_1.readFeatures(json_Voies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_Voies_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Voies_1.addFeatures(features_Voies_1);var lyr_Voies_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Voies_1, 
                style: style_Voies_1,
                title: '<img src="styles/legend/Voies_1.png" /> Voies'
            });var format_Oprations_2 = new ol.format.GeoJSON();
var features_Oprations_2 = format_Oprations_2.readFeatures(json_Oprations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_Oprations_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Oprations_2.addFeatures(features_Oprations_2);var lyr_Oprations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oprations_2, 
                style: style_Oprations_2,
                title: '<strong><img src="styles/legend/Oprations_2.png" /> Opérations</strong><br />'
            });var format_Rsultatsoprations_3 = new ol.format.GeoJSON();
var features_Rsultatsoprations_3 = format_Rsultatsoprations_3.readFeatures(json_Rsultatsoprations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_Rsultatsoprations_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rsultatsoprations_3.addFeatures(features_Rsultatsoprations_3);var lyr_Rsultatsoprations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rsultatsoprations_3, 
                style: style_Rsultatsoprations_3,
    title: '<strong>Résultats opérations</strong><br />\
    <img src="styles/legend/Rsultatsoprations_3_0.png" /> nc<br />\
    <img src="styles/legend/Rsultatsoprations_3_1.png" /> négatif<br />\
    <img src="styles/legend/Rsultatsoprations_3_2.png" /> positif<br />'
        });var format_ElmentsrestitusPrhistoire_4 = new ol.format.GeoJSON();
var features_ElmentsrestitusPrhistoire_4 = format_ElmentsrestitusPrhistoire_4.readFeatures(json_ElmentsrestitusPrhistoire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusPrhistoire_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusPrhistoire_4.addFeatures(features_ElmentsrestitusPrhistoire_4);var lyr_ElmentsrestitusPrhistoire_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusPrhistoire_4, 
                style: style_ElmentsrestitusPrhistoire_4,
    title: '<strong>Eléments restitués - Préhistoire</strong><br />\
    <img src="styles/legend/ElmentsrestitusPrhistoire_4_0.png" /> Agricole<br />\
    <img src="styles/legend/ElmentsrestitusPrhistoire_4_1.png" /> Indéterminée<br />'
        });var format_FaitsPrhistoire_5 = new ol.format.GeoJSON();
var features_FaitsPrhistoire_5 = format_FaitsPrhistoire_5.readFeatures(json_FaitsPrhistoire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsPrhistoire_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsPrhistoire_5.addFeatures(features_FaitsPrhistoire_5);var lyr_FaitsPrhistoire_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsPrhistoire_5, 
                style: style_FaitsPrhistoire_5,
    title: '<strong>Faits - Préhistoire</strong><br />\
    <img src="styles/legend/FaitsPrhistoire_5_0.png" /> autre<br />\
    <img src="styles/legend/FaitsPrhistoire_5_1.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsPrhistoire_5_2.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsPrhistoire_5_3.png" /> fosse<br />\
    <img src="styles/legend/FaitsPrhistoire_5_4.png" /> stockage<br />\
    <img src="styles/legend/FaitsPrhistoire_5_5.png" /> structure foyère<br />'
        });var format_ElmentsrestitusProtohisoire_6 = new ol.format.GeoJSON();
var features_ElmentsrestitusProtohisoire_6 = format_ElmentsrestitusProtohisoire_6.readFeatures(json_ElmentsrestitusProtohisoire_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusProtohisoire_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusProtohisoire_6.addFeatures(features_ElmentsrestitusProtohisoire_6);var lyr_ElmentsrestitusProtohisoire_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusProtohisoire_6, 
                style: style_ElmentsrestitusProtohisoire_6,
    title: '<strong>Eléments restitués - Protohisoire</strong><br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_0.png" /> Agricole<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_1.png" /> Artisanat et Commerce<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_2.png" /> Communication<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_3.png" /> Défensif<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_4.png" /> Domestique<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_5.png" /> Public<br />\
    <img src="styles/legend/ElmentsrestitusProtohisoire_6_6.png" /> Indéterminée<br />'
        });var format_FaitsProtohistoire_7 = new ol.format.GeoJSON();
var features_FaitsProtohistoire_7 = format_FaitsProtohistoire_7.readFeatures(json_FaitsProtohistoire_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsProtohistoire_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsProtohistoire_7.addFeatures(features_FaitsProtohistoire_7);var lyr_FaitsProtohistoire_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsProtohistoire_7, 
                style: style_FaitsProtohistoire_7,
    title: '<strong>Faits - Protohistoire</strong><br />\
    <img src="styles/legend/FaitsProtohistoire_7_0.png" /> autre<br />\
    <img src="styles/legend/FaitsProtohistoire_7_1.png" /> élément de circulation<br />\
    <img src="styles/legend/FaitsProtohistoire_7_2.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsProtohistoire_7_3.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsProtohistoire_7_4.png" /> fosse<br />\
    <img src="styles/legend/FaitsProtohistoire_7_5.png" /> funéraire<br />\
    <img src="styles/legend/FaitsProtohistoire_7_6.png" /> hydraulique<br />\
    <img src="styles/legend/FaitsProtohistoire_7_7.png" /> stockage<br />\
    <img src="styles/legend/FaitsProtohistoire_7_8.png" /> structure foyère<br />'
        });var format_ElmentsrestitusAntique_8 = new ol.format.GeoJSON();
var features_ElmentsrestitusAntique_8 = format_ElmentsrestitusAntique_8.readFeatures(json_ElmentsrestitusAntique_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusAntique_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusAntique_8.addFeatures(features_ElmentsrestitusAntique_8);var lyr_ElmentsrestitusAntique_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusAntique_8, 
                style: style_ElmentsrestitusAntique_8,
    title: '<strong>Eléments restitués - Antique</strong><br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_0.png" /> Agricole<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_1.png" /> Artisanat et Commerce<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_2.png" /> Communication<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_3.png" /> Cultuel<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_4.png" /> Défensif<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_5.png" /> Domestique<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_6.png" /> Funéraire<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_7.png" /> Hydraulique<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_8.png" /> Public<br />\
    <img src="styles/legend/ElmentsrestitusAntique_8_9.png" /> Indéterminée<br />'
        });var format_FaitsAntique_9 = new ol.format.GeoJSON();
var features_FaitsAntique_9 = format_FaitsAntique_9.readFeatures(json_FaitsAntique_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsAntique_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsAntique_9.addFeatures(features_FaitsAntique_9);var lyr_FaitsAntique_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsAntique_9, 
                style: style_FaitsAntique_9,
    title: '<strong>Faits - Antique</strong><br />\
    <img src="styles/legend/FaitsAntique_9_0.png" /> autre<br />\
    <img src="styles/legend/FaitsAntique_9_1.png" /> élément de circulation<br />\
    <img src="styles/legend/FaitsAntique_9_2.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsAntique_9_3.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsAntique_9_4.png" /> fosse<br />\
    <img src="styles/legend/FaitsAntique_9_5.png" /> funéraire<br />\
    <img src="styles/legend/FaitsAntique_9_6.png" /> hydraulique<br />\
    <img src="styles/legend/FaitsAntique_9_7.png" /> stockage<br />\
    <img src="styles/legend/FaitsAntique_9_8.png" /> structure foyère<br />'
        });var format_ElmentsrestitusMoyenge_10 = new ol.format.GeoJSON();
var features_ElmentsrestitusMoyenge_10 = format_ElmentsrestitusMoyenge_10.readFeatures(json_ElmentsrestitusMoyenge_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusMoyenge_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusMoyenge_10.addFeatures(features_ElmentsrestitusMoyenge_10);var lyr_ElmentsrestitusMoyenge_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusMoyenge_10, 
                style: style_ElmentsrestitusMoyenge_10,
    title: '<strong>Eléments restitués - Moyen-Âge</strong><br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_0.png" /> Agricole<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_1.png" /> Artisanat et Commerce<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_2.png" /> Communication<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_3.png" /> Cultuel<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_4.png" /> Défensif<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_5.png" /> Domestique<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_6.png" /> Funéraire<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_7.png" /> Hydraulique<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_8.png" /> Public<br />\
    <img src="styles/legend/ElmentsrestitusMoyenge_10_9.png" /> Indéterminée<br />'
        });var format_FaitsMoyenge_11 = new ol.format.GeoJSON();
var features_FaitsMoyenge_11 = format_FaitsMoyenge_11.readFeatures(json_FaitsMoyenge_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsMoyenge_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsMoyenge_11.addFeatures(features_FaitsMoyenge_11);var lyr_FaitsMoyenge_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsMoyenge_11, 
                style: style_FaitsMoyenge_11,
    title: '<strong>Faits - Moyen-Âge</strong><br />\
    <img src="styles/legend/FaitsMoyenge_11_0.png" /> autre<br />\
    <img src="styles/legend/FaitsMoyenge_11_1.png" /> élément de circulation<br />\
    <img src="styles/legend/FaitsMoyenge_11_2.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsMoyenge_11_3.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsMoyenge_11_4.png" /> fosse<br />\
    <img src="styles/legend/FaitsMoyenge_11_5.png" /> funéraire<br />\
    <img src="styles/legend/FaitsMoyenge_11_6.png" /> hydraulique<br />\
    <img src="styles/legend/FaitsMoyenge_11_7.png" /> stockage<br />\
    <img src="styles/legend/FaitsMoyenge_11_8.png" /> structure foyère<br />'
        });var format_ElmentsrestitusModerne_12 = new ol.format.GeoJSON();
var features_ElmentsrestitusModerne_12 = format_ElmentsrestitusModerne_12.readFeatures(json_ElmentsrestitusModerne_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusModerne_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusModerne_12.addFeatures(features_ElmentsrestitusModerne_12);var lyr_ElmentsrestitusModerne_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusModerne_12, 
                style: style_ElmentsrestitusModerne_12,
    title: '<strong>Eléments restitués - Moderne</strong><br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_0.png" /> Artisanat et Commerce<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_1.png" /> Communication<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_2.png" /> Cultuel<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_3.png" /> Défensif<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_4.png" /> Domestique<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_5.png" /> Funéraire<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_6.png" /> Hydraulique<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_7.png" /> Public<br />\
    <img src="styles/legend/ElmentsrestitusModerne_12_8.png" /> Indéterminée<br />'
        });var format_FaitsModerne_13 = new ol.format.GeoJSON();
var features_FaitsModerne_13 = format_FaitsModerne_13.readFeatures(json_FaitsModerne_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsModerne_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsModerne_13.addFeatures(features_FaitsModerne_13);var lyr_FaitsModerne_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsModerne_13, 
                style: style_FaitsModerne_13,
    title: '<strong>Faits - Moderne</strong><br />\
    <img src="styles/legend/FaitsModerne_13_0.png" /> autre<br />\
    <img src="styles/legend/FaitsModerne_13_1.png" /> élément de circulation<br />\
    <img src="styles/legend/FaitsModerne_13_2.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsModerne_13_3.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsModerne_13_4.png" /> fosse<br />\
    <img src="styles/legend/FaitsModerne_13_5.png" /> funéraire<br />\
    <img src="styles/legend/FaitsModerne_13_6.png" /> hydraulique<br />\
    <img src="styles/legend/FaitsModerne_13_7.png" /> stockage<br />\
    <img src="styles/legend/FaitsModerne_13_8.png" /> structure foyère<br />'
        });var format_ElmentsrestitusContemporain_14 = new ol.format.GeoJSON();
var features_ElmentsrestitusContemporain_14 = format_ElmentsrestitusContemporain_14.readFeatures(json_ElmentsrestitusContemporain_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_ElmentsrestitusContemporain_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ElmentsrestitusContemporain_14.addFeatures(features_ElmentsrestitusContemporain_14);var lyr_ElmentsrestitusContemporain_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElmentsrestitusContemporain_14, 
                style: style_ElmentsrestitusContemporain_14,
    title: '<strong>Eléments restitués - Contemporain</strong><br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_0.png" /> Artisanat et Commerce<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_1.png" /> Cultuel<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_2.png" /> Défensif<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_3.png" /> Domestique<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_4.png" /> Hydraulique<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_5.png" /> Public<br />\
    <img src="styles/legend/ElmentsrestitusContemporain_14_6.png" /> Indéterminée<br />'
        });var format_FaitsContemporain_15 = new ol.format.GeoJSON();
var features_FaitsContemporain_15 = format_FaitsContemporain_15.readFeatures(json_FaitsContemporain_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3946'});
var jsonSource_FaitsContemporain_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FaitsContemporain_15.addFeatures(features_FaitsContemporain_15);var lyr_FaitsContemporain_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FaitsContemporain_15, 
                style: style_FaitsContemporain_15,
    title: '<strong>Faits - Contemporain</strong><br />\
    <img src="styles/legend/FaitsContemporain_15_0.png" /> autre<br />\
    <img src="styles/legend/FaitsContemporain_15_1.png" /> élément de circulation<br />\
    <img src="styles/legend/FaitsContemporain_15_2.png" /> élément de construction<br />\
    <img src="styles/legend/FaitsContemporain_15_3.png" /> élément surfacique<br />\
    <img src="styles/legend/FaitsContemporain_15_4.png" /> fosse<br />\
    <img src="styles/legend/FaitsContemporain_15_5.png" /> funéraire<br />\
    <img src="styles/legend/FaitsContemporain_15_6.png" /> hydraulique<br />\
    <img src="styles/legend/FaitsContemporain_15_7.png" /> stockage<br />\
    <img src="styles/legend/FaitsContemporain_15_8.png" /> structure foyère<br />'
        });

lyr_Orthophotographie2015duGrandLyon_0.setVisible(false);lyr_Voies_1.setVisible(false);lyr_Oprations_2.setVisible(true);lyr_Rsultatsoprations_3.setVisible(true);lyr_ElmentsrestitusPrhistoire_4.setVisible(false);lyr_FaitsPrhistoire_5.setVisible(false);lyr_ElmentsrestitusProtohisoire_6.setVisible(false);lyr_FaitsProtohistoire_7.setVisible(false);lyr_ElmentsrestitusAntique_8.setVisible(false);lyr_FaitsAntique_9.setVisible(false);lyr_ElmentsrestitusMoyenge_10.setVisible(false);lyr_FaitsMoyenge_11.setVisible(false);lyr_ElmentsrestitusModerne_12.setVisible(false);lyr_FaitsModerne_13.setVisible(false);lyr_ElmentsrestitusContemporain_14.setVisible(false);lyr_FaitsContemporain_15.setVisible(false);
var layersList = [baseLayer,lyr_Orthophotographie2015duGrandLyon_0,lyr_Voies_1,lyr_Oprations_2,lyr_Rsultatsoprations_3,lyr_ElmentsrestitusPrhistoire_4,lyr_FaitsPrhistoire_5,lyr_ElmentsrestitusProtohisoire_6,lyr_FaitsProtohistoire_7,lyr_ElmentsrestitusAntique_8,lyr_FaitsAntique_9,lyr_ElmentsrestitusMoyenge_10,lyr_FaitsMoyenge_11,lyr_ElmentsrestitusModerne_12,lyr_FaitsModerne_13,lyr_ElmentsrestitusContemporain_14,lyr_FaitsContemporain_15];
lyr_Voies_1.set('fieldAliases', {'codetronco': 'codetronco', 'nomvoie': 'nomvoie', });
lyr_Oprations_2.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'NUMERO_SRA': 'NUMERO_SRA', 'ADRESSE': 'ADRESSE', 'NOTE': 'NOTE', 'TYPE': 'TYPE', 'RESULTAT': 'RESULTAT', 'RESUME': 'RESUME', 'DEBUT': 'DEBUT', 'FIN': 'FIN', 'ANNEE': 'ANNEE', 'RESPONSABLE': 'RESPONSABLE', 'ORGANISME': 'ORGANISME', 'RAPPORT': 'RAPPORT', 'COTE_BIBLIO': 'COTE_BIBLIO', 'INTITULE_BIBLIO': 'INTITULE_BIBLIO', 'TN_ALTI': 'TN_ALTI', 'TN_TYPE': 'TN_TYPE', 'NUM_OP': 'NUM_OP', });
lyr_Rsultatsoprations_3.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'NUMERO_SRA': 'NUMERO_SRA', 'ADRESSE': 'ADRESSE', 'NOTE': 'NOTE', 'TYPE': 'TYPE', 'RESULTAT': 'RESULTAT', 'RESUME': 'RESUME', 'DEBUT': 'DEBUT', 'FIN': 'FIN', 'ANNEE': 'ANNEE', 'RESPONSABLE': 'RESPONSABLE', 'ORGANISME': 'ORGANISME', 'RAPPORT': 'RAPPORT', 'COTE_BIBLIO': 'COTE_BIBLIO', 'INTITULE_BIBLIO': 'INTITULE_BIBLIO', 'TN_ALTI': 'TN_ALTI', 'TN_TYPE': 'TN_TYPE', 'NUM_OP': 'NUM_OP', });
lyr_ElmentsrestitusPrhistoire_4.set('fieldAliases', {'ID_STR': 'ID_STR', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_FaitsPrhistoire_5.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_ElmentsrestitusProtohisoire_6.set('fieldAliases', {'ID_STR': 'ID_STR', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', 'ID_ENS': 'ID_ENS', });
lyr_FaitsProtohistoire_7.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_ElmentsrestitusAntique_8.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'ID_ENS': 'ID_ENS', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_FaitsAntique_9.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_ElmentsrestitusMoyenge_10.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'ID_ENS': 'ID_ENS', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', 'ID_STR': 'ID_STR', });
lyr_FaitsMoyenge_11.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_ElmentsrestitusModerne_12.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'ID_ENS': 'ID_ENS', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', 'ID_STR': 'ID_STR', });
lyr_FaitsModerne_13.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_ElmentsrestitusContemporain_14.set('fieldAliases', {'ID_OPE': 'ID_OPE', 'ID_ENS': 'ID_ENS', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'NATURE': 'NATURE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', 'ID_STR': 'ID_STR', });
lyr_FaitsContemporain_15.set('fieldAliases', {'ID_FAIT': 'ID_FAIT', 'ID_OPE': 'ID_OPE', 'ID_SITE': 'ID_SITE', 'NUMERO': 'NUMERO', 'NUM_CREE': 'NUM_CREE', 'CARTO': 'CARTO', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'AFF_MATIERE': 'AFF_MATIERE', 'FONCTION': 'FONCTION', 'TPQ': 'TPQ', 'TAQ': 'TAQ', 'PERIODE_DEBUT': 'PERIODE_DEBUT', 'PERIODE_FIN': 'PERIODE_FIN', 'ALTI_SUP': 'ALTITUDE SUP', 'ALTI_INF': 'ALTITUDE INF', 'COMMENT': 'COMMENTAIRE', 'SAISIE': 'SAISIE', 'AUTEUR': 'AUTEUR', 'SOURCE': 'SOURCE', 'MODIF_SAISIE': 'MODIF_SAISIE', 'MODIF_AUTEUR': 'MODIF_AUTEUR', 'MODIF_SOURCE': 'MODIF_SOURCE', });
lyr_Voies_1.set('fieldImages', {'codetronco': 'TextEdit', 'nomvoie': 'TextEdit', });
lyr_Oprations_2.set('fieldImages', {'ID_OPE': 'Hidden', 'NUMERO_SRA': 'Hidden', 'ADRESSE': 'TextEdit', 'NOTE': 'Hidden', 'TYPE': 'TextEdit', 'RESULTAT': 'TextEdit', 'RESUME': 'Hidden', 'DEBUT': 'Hidden', 'FIN': 'Hidden', 'ANNEE': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'ORGANISME': 'TextEdit', 'RAPPORT': 'Hidden', 'COTE_BIBLIO': 'Hidden', 'INTITULE_BIBLIO': 'TextEdit', 'TN_ALTI': 'Hidden', 'TN_TYPE': 'Hidden', 'NUM_OP': 'Hidden', });
lyr_Rsultatsoprations_3.set('fieldImages', {'ID_OPE': 'Hidden', 'NUMERO_SRA': 'Hidden', 'ADRESSE': 'TextEdit', 'NOTE': 'Hidden', 'TYPE': 'TextEdit', 'RESULTAT': 'TextEdit', 'RESUME': 'Hidden', 'DEBUT': 'Hidden', 'FIN': 'Hidden', 'ANNEE': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'ORGANISME': 'TextEdit', 'RAPPORT': 'Hidden', 'COTE_BIBLIO': 'Hidden', 'INTITULE_BIBLIO': 'TextEdit', 'TN_ALTI': 'Hidden', 'TN_TYPE': 'Hidden', 'NUM_OP': 'Hidden', });
lyr_ElmentsrestitusPrhistoire_4.set('fieldImages', {'ID_STR': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_FaitsPrhistoire_5.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_ElmentsrestitusProtohisoire_6.set('fieldImages', {'ID_STR': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', 'ID_ENS': 'Hidden', });
lyr_FaitsProtohistoire_7.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_ElmentsrestitusAntique_8.set('fieldImages', {'ID_OPE': 'Hidden', 'ID_ENS': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_FaitsAntique_9.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'TextEdit', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_ElmentsrestitusMoyenge_10.set('fieldImages', {'ID_OPE': 'Hidden', 'ID_ENS': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', 'ID_STR': 'Hidden', });
lyr_FaitsMoyenge_11.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_ElmentsrestitusModerne_12.set('fieldImages', {'ID_OPE': 'Hidden', 'ID_ENS': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', 'ID_STR': 'Hidden', });
lyr_FaitsModerne_13.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_ElmentsrestitusContemporain_14.set('fieldImages', {'ID_OPE': 'Hidden', 'ID_ENS': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'NATURE': 'TextEdit', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', 'ID_STR': 'Hidden', });
lyr_FaitsContemporain_15.set('fieldImages', {'ID_FAIT': 'Hidden', 'ID_OPE': 'Hidden', 'ID_SITE': 'Hidden', 'NUMERO': 'Hidden', 'NUM_CREE': 'Hidden', 'CARTO': 'Hidden', 'CATEGORIE': 'Hidden', 'NATURE': 'TextEdit', 'AFF_MATIERE': 'Hidden', 'FONCTION': 'Hidden', 'TPQ': 'TextEdit', 'TAQ': 'TextEdit', 'PERIODE_DEBUT': 'Hidden', 'PERIODE_FIN': 'Hidden', 'ALTI_SUP': 'TextEdit', 'ALTI_INF': 'TextEdit', 'COMMENT': 'TextEdit', 'SAISIE': 'Hidden', 'AUTEUR': 'Hidden', 'SOURCE': 'Hidden', 'MODIF_SAISIE': 'Hidden', 'MODIF_AUTEUR': 'Hidden', 'MODIF_SOURCE': 'Hidden', });
lyr_Voies_1.set('fieldLabels', {'codetronco': 'no label', 'nomvoie': 'no label', });
lyr_Oprations_2.set('fieldLabels', {'ADRESSE': 'header label', 'TYPE': 'header label', 'RESULTAT': 'header label', 'ANNEE': 'header label', 'RESPONSABLE': 'header label', 'ORGANISME': 'header label', 'INTITULE_BIBLIO': 'header label', });
lyr_Rsultatsoprations_3.set('fieldLabels', {'ADRESSE': 'header label', 'TYPE': 'header label', 'RESULTAT': 'header label', 'ANNEE': 'header label', 'RESPONSABLE': 'header label', 'ORGANISME': 'header label', 'INTITULE_BIBLIO': 'header label', });
lyr_ElmentsrestitusPrhistoire_4.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsPrhistoire_5.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_ElmentsrestitusProtohisoire_6.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsProtohistoire_7.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_ElmentsrestitusAntique_8.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsAntique_9.set('fieldLabels', {'NATURE': 'header label', 'FONCTION': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_ElmentsrestitusMoyenge_10.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsMoyenge_11.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_ElmentsrestitusModerne_12.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsModerne_13.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_ElmentsrestitusContemporain_14.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'COMMENT': 'header label', });
lyr_FaitsContemporain_15.set('fieldLabels', {'NATURE': 'header label', 'TPQ': 'header label', 'TAQ': 'header label', 'ALTI_SUP': 'header label', 'ALTI_INF': 'header label', 'COMMENT': 'header label', });
lyr_FaitsContemporain_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});