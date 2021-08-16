#!/bin/bash

is_data_already_present() {
    res=$(PGPASSWORD=$POSTGRES_PASSWORD psql -t -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER $POSTGRES_DB -c "SELECT count(*)<>1 FROM ne_10m_admin_0_antarctic_claim_limit_lines" 2>/dev/null)
    if [[ res -eq "t" ]]; then
        return 1
    else
        return 0
    fi
}
function import_ne_vector() {
    echo "Import NaturalEarth Vector"
    mkdir -p "${OSMVECTO_PATH}/data"
    if [[ ! is_data_already_present ]]; then
        wget -N -P "${OSMVECTO_PATH}/data" "http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip"
        unzip -o -d "${OSMVECTO_PATH}/data/natural_earth_vector" "${OSMVECTO_PATH}/data/natural_earth_vector.sqlite.zip"
        CMD="SELECT f_table_name FROM geometry_columns;"
        readarray -t arr < <( sqlite3 ${OSMVECTO_PATH}/data/natural_earth_vector/packages/natural_earth_vector.sqlite "${CMD}" )
        for t in "${arr[@]}";
        do
          echo "Processing ${t}";
          ogrinfo "${OSMVECTO_PATH}/data/natural_earth_vector/packages/natural_earth_vector.sqlite" \
            -sql "UPDATE ${t} SET geometry = ST_MakeValid(geometry)";
        done
        ogr2ogr \
            -progress \
            -f Postgresql \
            PG:"host=${POSTGRES_HOST} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
            -s_srs EPSG:4326 \
            -t_srs EPSG:3857 \
            -clipsrc -180 -85.0511 180 85.0511 \
            -lco GEOMETRY_NAME=geometry \
            -lco OVERWRITE=YES \
            -lco DIM=2 \
            -nlt GEOMETRY \
            -overwrite \
            "${OSMVECTO_PATH}/data/natural_earth_vector/packages/natural_earth_vector.sqlite"
        baremaps execute \
            --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
            --file "${OSMVECTO_PATH}/queries/create_index_ne_spgist.sql"
    fi
}

if [ "${1}" != "--source-only" ]; then
    ne_import_vector
fi
