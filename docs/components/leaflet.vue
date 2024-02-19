<script setup>
    // import des fonctions nécessaires depuis le package 'Vue'
    import { onMounted, reactive, ref } from 'vue';

    // Import du fichier leaflet.css permettant le bon affichage de la carte
    import 'leaflet/dist/leaflet.css';

    // Import de la bibliothèque Leaflet installée dans node_modules (via package.json)
    // Leaflet est accessible via 'L'
    import L from 'leaflet';
    import 'leaflet-basemaps/L.Control.Basemaps.css';
    import 'leaflet-basemaps/L.Control.Basemaps.css';

    // Création du titre 
    const title1 = "Cartographie des lieux d'alternance et de stage";

    // fonction qui est appelée lorsque que le composant est chargé par le navigateur
    onMounted(() => {

        // MAP
        var map = L.map('map', {
            center: [43.5348484, 1.4948745], // center on Toulouse
            zoom: 22,
        });
        
        // BASEMAPS //
            // Basemaps definition
        var basemaps = [
            L.tileLayer('https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=HR.ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&FORMAT=image/jpeg&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
            attribution: '<a href="https://www.geoportail.gouv.fr/" title="Orthophotos IGN" target="_blank">&copy; <b>Orthophotos</b></a> &copy; <a href="https://www.geoportail.gouv.fr/">IGN</a>',
            tileSize : 256,
            maxzoom: 24,
            }),
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 24,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })];
        
            // Add basemaps to the map
        map.addControl(L.control.basemaps({
        position: 'bottomright',
        basemaps: basemaps,
        tileX: 66,  // tile X coordinate
        tileY: 46,  // tile Y coordinate
        tileZ: 7   // tile zoom  
        }));
        
        coord_capsule = [43.5348484, 1.4948745]
        var marker = L.marker(coord_capsule).addTo(map);
        marker.bindPopup("<b>La capsule est ici !</b><br>"+ coord_capsule).openPopup();

    })
</script>
<template>
    <div id="map_alternance" class="mapleaflet"></div>
</template>

<style scoped>
/* Surcharge de la taille de la police pour la balise html h3 */
h3{
  font-size: 0.8rem;
}
.mapleaflet{
  margin: 10px;
  height: 600px;
  width: 100%;
}
</style>