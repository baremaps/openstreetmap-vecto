#!/bin/bash

create_extension() {
    psql -d "host=${POSTGRES_HOST} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
        -f "${OSMVECTO_PATH}/queries/create_extension.sql"
}

if [ "${1}" != "--source-only" ]; then
    create_extension
fi
