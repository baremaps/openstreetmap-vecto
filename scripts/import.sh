#!/bin/bash

function import_naturalearth() {
    echo "Import Natural Earth data"
    wget -O naturalearth.zip http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
    unzip -d natural_earth naturalearth.zip 
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:4326 \
        -t_srs EPSG:3857 \
        -clipsrc -180 -85.0511 180.1 85.0511 \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -lco GEOMETRY_NAME=geometry \
        -lco OVERWRITE=YES \
        -lco DIM=2 \
        -nlt GEOMETRY \
        -overwrite \
        "natural_earth/packages/natural_earth_vector.sqlite"
    psql -d "host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" < ../scripts/naturalearth.sql
}

function import_osm_water_polygons() {
    echo "Import OpenStreetMap water polygons"
    wget -O water-polygons-split-3857.zip https://osmdata.openstreetmap.de/download/water-polygons-split-3857.zip
    unzip water-polygons-split-3857.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:3857 \
        -t_srs EPSG:3857 \
        -lco OVERWRITE=YES \
        -lco GEOMETRY_NAME=geometry \
        -overwrite \
        -nln osm_water_polygons \
        -nlt geometry \
        --config PG_USE_COPY YES \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        "water-polygons-split-3857/water_polygons.shp"
    psql -d "host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -c "CREATE INDEX osm_water_polygons_gix ON osm_water_polygons USING SPGIST(geometry);"
}

function import_osm_simplified_water_polygons() {
    echo "Import simplified OpenStreetMap water polygons"
    wget -O simplified-water-polygons-split-3857.zip https://osmdata.openstreetmap.de/download/simplified-water-polygons-split-3857.zip
    unzip simplified-water-polygons-split-3857.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:3857 \
        -t_srs EPSG:3857 \
        -lco OVERWRITE=YES \
        -lco GEOMETRY_NAME=geometry \
        -overwrite \
        -nln osm_simplified_water_polygons \
        -nlt geometry \
        --config PG_USE_COPY YES \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        "simplified-water-polygons-split-3857/simplified_water_polygons.shp"
    psql -d "host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -c "CREATE INDEX osm_simplified_water_polygons_gix ON osm_simplified_water_polygons USING SPGIST(geometry);"
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -O openstreetmap.pbf https://download.geofabrik.de/europe/switzerland-latest.osm.pbf
    baremaps import \
        --input 'openstreetmap.pbf' \
        --database "jdbc:postgresql://localhost:5432/osmvecto?allowMultiQueries=true&user=osmvecto&password=osmvecto"
}

function main {
    rm -fr data
    mkdir -p data
    cd data
    import_naturalearth
    import_osm_water_polygons
    import_osm_simplified_water_polygons
    import_openstreetmap
}

main
