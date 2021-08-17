#!/bin/bash
source $(dirname $0)/check_data_already_exists.sh

import_osm_water() {
    echo "Import OpenStreetMap Water"
    mkdir -p "${OSMVECTO_PATH}/data"
    if (( !$(is_data_already_present "osm_water_polygons") )); then
        wget -N -P "${OSMVECTO_PATH}/data" "https://osmdata.openstreetmap.de/download/water-polygons-split-3857.zip"
        unzip -o -d "${OSMVECTO_PATH}/data" "${OSMVECTO_PATH}/data/water-polygons-split-3857.zip"
        ogr2ogr \
            -progress \
            -f Postgresql \
            PG:"host=${POSTGRES_HOST} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
            -s_srs EPSG:3857 \
            -t_srs EPSG:3857 \
            -lco OVERWRITE=YES \
            -lco GEOMETRY_NAME=geometry \
            -overwrite \
            -nln osm_water_polygons \
            -nlt geometry \
            --config PG_USE_COPY YES \
            "${OSMVECTO_PATH}/data/water-polygons-split-3857/water_polygons.shp"
        psql -d "host=${POSTGRES_HOST} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
            -c "DROP INDEX IF EXISTS osm_water_polygons_gix;" \
            -c "CREATE INDEX osm_water_polygons_gix ON osm_water_polygons USING SPGIST(geometry);"
    fi
}    

if [ "${1}" != "--source-only" ]; then
    osm_import_water "${@}"
fi
