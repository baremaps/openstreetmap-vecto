#!/bin/bash

osm_url=$1
osm_file=$(basename "${osm_url}")
HOST=${POSTGRES_HOST}
PORT=${POSTGRES_PORT}
OSMVECTO_PATH=${OSMVECTO_PATH}

function import_naturalearth() {
    echo "Import Natural Earth vector data"
    wget -q -N http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
    unzip -o -d natural_earth_vector natural_earth_vector.sqlite.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:4326 \
        -t_srs EPSG:3857 \
        -clipsrc -180 -85.0511 180.1 85.0511 \
        PG:"host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        -lco GEOMETRY_NAME=geometry \
        -lco OVERWRITE=YES \
        -lco DIM=2 \
        -nlt GEOMETRY \
        -overwrite \
        "natural_earth_vector/packages/natural_earth_vector.sqlite"
    baremaps execute \
        --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?&user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
        --file ${OSMVECTO_PATH}'/queries/ne_create_indexes.sql'
}

function import_osm_water_polygons() {
    echo "Import OpenStreetMap water polygons"
    wget -q -N https://osmdata.openstreetmap.de/download/water-polygons-split-3857.zip
    unzip -o water-polygons-split-3857.zip
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
        PG:"host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        "water-polygons-split-3857/water_polygons.shp"
    psql -d "host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        -c "CREATE INDEX CONCURRENTLY osm_water_polygons_gix ON osm_water_polygons USING SPGIST(geometry);"
}

function import_osm_simplified_water_polygons() {
    echo "Import simplified OpenStreetMap water polygons"
    wget -q -N https://osmdata.openstreetmap.de/download/simplified-water-polygons-split-3857.zip
    unzip -o simplified-water-polygons-split-3857.zip
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
        PG:"host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        "simplified-water-polygons-split-3857/simplified_water_polygons.shp"
    psql -d "host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        -c "CREATE INDEX CONCURRENTLY osm_simplified_water_polygons_gix ON osm_simplified_water_polygons USING SPGIST(geometry);"
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -q -N "${osm_url}"
    baremaps execute \
        --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?&user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
        --file ${OSMVECTO_PATH}'/queries/osm_create_extensions.sql' \
        --file ${OSMVECTO_PATH}'/queries/osm_drop_views.sql' \
        --file ${OSMVECTO_PATH}'/queries/osm_drop_tables.sql' \
        --file ${OSMVECTO_PATH}'/queries/osm_create_tables.sql'
    baremaps import \
        --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?allowMultiQueries=true&user='${POSTGRES_PASSWORD}'&password='${POSTGRES_PASSWORD} \
        --file "${osm_file}"
    baremaps execute \
        --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?&user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
        --file ${OSMVECTO_PATH}'/queries/osm_create_gin_indexes.sql' \
        --file ${OSMVECTO_PATH}'/queries/osm_create_views.sql' \
        --file ${OSMVECTO_PATH}'/queries/osm_create_gist_indexes.sql'
}

function main {
    mkdir -p ${OSMVECTO_PATH}/data
    cd ${OSMVECTO_PATH}/data
    import_naturalearth
    import_osm_water_polygons
    import_osm_simplified_water_polygons
    import_openstreetmap
}

main
