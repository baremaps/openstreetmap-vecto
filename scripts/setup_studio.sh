#!/bin/bash

function setup_studio() {
  echo "Set up ogcapi tables"
  baremaps execute \
        --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
        --file "${OSMVECTO_PATH}/queries/create_table_ogcapi.sql"
  echo "Set up studio tables"
  baremaps execute \
        --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
        --file "${OSMVECTO_PATH}/queries/create_table_studio.sql"
}

if [ "${1}" != "--source-only" ]; then
    setup_studio
fi
