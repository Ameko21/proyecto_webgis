var map = L.map('map', {
    center: [-12.065829796371943, -77.01656674335665],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
	   layers: "web_victoria:curvas de nivel", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
curvas.addTo(map);



var baseMaps = {
    "OSM": basemapOSM,
    "Google Satellite":googleSat
};

var overlayMaps = {
    "Curvas de Nivel": curvas
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);


L.control.scale({
    imperial: false
  }).addTo(map);
  
  