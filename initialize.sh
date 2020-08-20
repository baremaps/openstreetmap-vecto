#!/bin/bash

readonly NATURALEARTH=http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
readonly OPENSTREETMAP=https://download.geofabrik.de/europe/switzerland-latest.osm.pbf

function import_naturalearth() {
    echo "Import naturalearth"
    wget -O naturalearth.zip $NATURALEARTH
    unzip -o -d natural_earth naturalearth.zip 

    docker run --rm \
        --network host \
        -v $(pwd):/home osgeo/gdal:alpine-normal-v2.4.1 ogr2ogr \
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
        psql -d "host=localhost port=5432 dbname=baremaps user=baremaps password=baremaps" < sql/naturalearth.sql
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -O openstreetmap.pbf $OPENSTREETMAP
    baremaps import \
    --input 'openstreetmap.pbf' \
    --database "jdbc:postgresql://localhost:5432/baremaps?allowMultiQueries=true&user=baremaps&password=baremaps"
}

function main {
    import_naturalearth
    #import_openstreetmap
}

main
