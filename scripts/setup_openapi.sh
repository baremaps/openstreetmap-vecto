#!/bin/bash

function setup_openapi() {
  echo "Set up openapi stuff"
  baremaps execute \
        --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
        --file "${OSMVECTO_PATH}/queries/ceate_table_openapi.sql"
}

if [ "${1}" != "--source-only" ]; then
    setup_openapi
fi