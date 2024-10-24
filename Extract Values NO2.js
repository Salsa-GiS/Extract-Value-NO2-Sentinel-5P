var STASIUN_BANDUNG = ee.Geometry.Point([107.625601, -6.901417]);

//extract value NO2//
var NO2_S5 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
 .select('NO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-01-01', '2021-06-30');

var NO2_multiply = NO2_S5.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(NO2_S5.mean(), viz_band, 'Sentinel-5P N02');
Map.setCenter(109.816, -7.5, 7);

var chart = ui.Chart.image.series({
  imageCollection: NO2_multiply.select('NO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'NO2_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi NO2-S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chart)

var NO2_S5_2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
 .select('NO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-07-01', '2021-12-31');

var NO2_multiply_2 = NO2_S5_2.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(NO2_S5_2.mean(), viz_band, 'Sentinel-5P N02-jilid 2');
Map.setCenter(109.816, -7.5, 7);

var chart_2 = ui.Chart.image.series({
  imageCollection: NO2_multiply_2.select('NO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'NO2_Stasiun STASIUN_BANDUNG_jilid 2',
 vAxis: {title: 'Konsentrasi NO2-S5P_jilid 2'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chart_2);

var NO2_S5_TP = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
 .select('tropospheric_NO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-01-01', '2021-06-30');

var NO2_multiply_TP = NO2_S5_TP.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(NO2_S5_TP.mean(), viz_band, 'Sentinel-5P N02 TP');
Map.setCenter(109.816, -7.5, 7);

var chart_tp = ui.Chart.image.series({
  imageCollection: NO2_multiply_TP.select('tropospheric_NO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'TP_NO2_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi TP-NO2_S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chart_tp);

var NO2_S5_TP2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
 .select('tropospheric_NO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-07-01', '2021-12-31');

var NO2_multiply_TP2 = NO2_S5_TP2.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(NO2_S5_TP2.mean(), viz_band, 'Sentinel-5P N02 TP');
Map.setCenter(109.816, -7.5, 7);

var chart_tp2 = ui.Chart.image.series({
  imageCollection: NO2_multiply_TP2.select('tropospheric_NO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'TP2_NO2_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi TP2-NO2_S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chart_tp2);

//extract value CO//
var CO_S5 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
 .select('CO_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-01-01', '2021-06-30');

var CO_multiply = CO_S5.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(CO_S5.mean(), viz_band, 'Sentinel-5P CO');
Map.setCenter(109.816, -7.5, 7);

var chartCO = ui.Chart.image.series({
  imageCollection: CO_multiply.select('CO_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'CO_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi CO-S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartCO);

var CO_S5_2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CO')
 .select('CO_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-07-01', '2021-12-31');

var CO_multiply_2 = CO_S5_2.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(CO_S5_2.mean(), viz_band, 'Sentinel-5P CO-jilid 2');
Map.setCenter(109.816, -7.5, 7);

var chartCO_2 = ui.Chart.image.series({
  imageCollection: CO_multiply_2.select('CO_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'CO_Stasiun STASIUN_BANDUNG_jilid 2',
 vAxis: {title: 'Konsentrasi CO-S5P_jilid 2'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartCO_2);

//Extract value SO2//
var SO2_S5 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
 .select('SO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-01-01', '2021-06-30');

var SO2_multiply = SO2_S5.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(SO2_S5.mean(), viz_band, 'Sentinel-5P SO2');
Map.setCenter(109.816, -7.5, 7);

var chartSO2 = ui.Chart.image.series({
  imageCollection: SO2_multiply.select('SO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'SO2_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi SO2-S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartSO2);

var SO2_S5_2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2')
 .select('SO2_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-07-01', '2021-12-31');

var SO2_multiply_2 = SO2_S5_2.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(SO2_S5_2.mean(), viz_band, 'Sentinel-5P SO2-jilid 2');
Map.setCenter(109.816, -7.5, 7);

var chartSO2_2 = ui.Chart.image.series({
  imageCollection: SO2_multiply_2.select('SO2_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'SO2_Stasiun STASIUN_BANDUNG_jilid 2',
 vAxis: {title: 'Konsentrasi SO2-S5P_jilid 2'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartSO2_2);

//extract value ozone//
var O3_S5 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3')
 .select('O3_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-01-01', '2021-06-30');

var O3_multiply = O3_S5.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(O3_S5.mean(), viz_band, 'Sentinel-5P O3');
Map.setCenter(109.816, -7.5, 7);

var chartO3 = ui.Chart.image.series({
  imageCollection: O3_multiply.select('O3_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'O3_Stasiun STASIUN_BANDUNG',
 vAxis: {title: 'Konsentrasi O3-S5P'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartO3);

var O3_S5_2 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3')
 .select('O3_column_number_density')
 .filterBounds(aoi)
 .filterDate('2021-07-01', '2021-12-31');

var O3_multiply_2 = O3_S5_2.map(function (image) {
  return image.multiply(1000000).copyProperties(image).set('system:time_start', image.get('system:time_start'));
});

var viz_band = {
 min: 0,
 max: 0.02,
 palette: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red']
};

Map.addLayer(O3_S5_2.mean(), viz_band, 'Sentinel-5P O3-jilid 2');
Map.setCenter(109.816, -7.5, 7);

var chartO3_2 = ui.Chart.image.series({
  imageCollection: O3_multiply_2.select('O3_column_number_density'), 
  region: STASIUN_BANDUNG
}).setOptions({
 lineWidth: 1,
 pointSize: 3,
 interpolateNulls: true,
 title: 'O3_Stasiun STASIUN_BANDUNG_jilid 2',
 vAxis: {title: 'Konsentrasi O3-S5P_jilid 2'},
 hAxis: {title: 'Waktu', format: 'YYYY-MM-dd', gridlines: {count: 6}}
});

print(chartO3_2);
