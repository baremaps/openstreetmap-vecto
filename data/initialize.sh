#!/bin/bash

function import_naturalearth() {
    echo "Import naturalearth"
    wget -O naturalearth.zip http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
    unzip -o -d natural_earth naturalearth.zip 
    docker run --rm \
        --network host \
        -v $(pwd):/home osgeo/gdal:alpine-normal-3.0.2 ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:4326 \
        -t_srs EPSG:3857 \
        -clipsrc -180 -85.0511 180.1 85.0511 \
        PG:"host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" \
        -lco GEOMETRY_NAME=geometry \
        -lco OVERWRITE=YES \
        -lco DIM=2 \
        -nlt GEOMETRY \
        -overwrite \
        "/home/natural_earth/packages/natural_earth_vector.sqlite"
    docker run --rm \
        --network host \
        -v $(pwd):/home baremaps/postgis \
        psql -d "host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" < /home/sql/naturalearth.sql
}

function import_simplified_water_polygons() {
    echo "Import simplified water polygons"
    wget -O simplified-water-polygons-split-3857.zip https://osmdata.openstreetmap.de/download/simplified-water-polygons-split-3857.zip
    unzip -o simplified-water-polygons-split-3857.zip
    docker run --rm \
        --network host \
        -v $(pwd):/home osgeo/gdal:alpine-normal-3.0.2 ogr2ogr \
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
        PG:"host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" \
        "/home/simplified-water-polygons-split-3857/simplified_water_polygons.shp"
    docker run --rm \
        --network host \
        baremaps/postgis \
        psql -d "host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" \
        -c "CREATE INDEX osm_simplified_water_polygons_gix ON osm_simplified_water_polygons USING SPGIST(geometry);"
}

function import_simplified_land_polygons() {
    echo "Import simplified land polygons"
    wget -O simplified-land-polygons-complete-3857.zip https://osmdata.openstreetmap.de/download/simplified-land-polygons-complete-3857.zip
    unzip -o simplified-land-polygons-complete-3857.zip
    docker run --rm \
        --network host \
        -v $(pwd):/home osgeo/gdal:alpine-normal-3.0.2 ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:3857 \
        -t_srs EPSG:3857 \
        -lco OVERWRITE=YES \
        -lco GEOMETRY_NAME=geometry \
        -overwrite \
        -nln osm_simplified_land_polygons \
        -nlt geometry \
        --config PG_USE_COPY YES \
        PG:"host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" \
        "/home/simplified-land-polygons-complete-3857/simplified_land_polygons.shp"
    docker run --rm \
        --network host \
        baremaps/postgis \
        psql -d "host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" \
        -c "CREATE INDEX osm_simplified_land_polygons_gix ON osm_simplified_land_polygons USING SPGIST(geometry);"
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -O openstreetmap.pbf https://download.geofabrik.de/europe/switzerland-latest.osm.pbf
    baremaps import \
    --input 'openstreetmap.pbf' \
    --database "jdbc:postgresql://localhost:5432/baremaps?allowMultiQueries=true&user=baremaps&password=baremaps"
}

function main {
    import_naturalearth
    import_simplified_water_polygons
    import_simplified_land_polygons
    #import_openstreetmap
}

main

