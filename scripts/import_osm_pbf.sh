#!/bin/bash
source $(dirname $0)/check_data_already_exists.sh

import_osm_pbf() {
    echo "Import OpenStreetMap PBF"
    if [ -z $1 ]; then
        osm_url="https://download.geofabrik.de/europe/switzerland-latest.osm.pbf"
    else
        osm_url=$1
    fi
    osm_file=$(basename "${osm_url}")
    mkdir -p ${OSMVECTO_PATH}/data
    if (( !$(is_data_already_present "osm_ways") )); then
        wget -N -P "${OSMVECTO_PATH}/data/" "${osm_url}"
        baremaps execute \
            --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
            --file "${OSMVECTO_PATH}/queries/drop_view_osm.sql" \
            --file "${OSMVECTO_PATH}/queries/drop_table_osm.sql" \
            --file "${OSMVECTO_PATH}/queries/create_table_osm.sql"
        baremaps import \
            --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
            --file "${OSMVECTO_PATH}/data/${osm_file}"
        baremaps execute \
            --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
            --file "${OSMVECTO_PATH}/queries/create_view_osm.sql" \
            --file "${OSMVECTO_PATH}/queries/create_index_osm_gin.sql" \
            --file "${OSMVECTO_PATH}/queries/create_index_osm_spgist.sql"
    fi
}

if [ "${1}" != "--source-only" ]; then
    osm_import_pbf "${@}"
fi
