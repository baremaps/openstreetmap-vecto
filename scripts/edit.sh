#!/bin/bash

if [ -z $1 ]; then
    tileset_file="tileset.json"
else
    tileset_file=$1
fi

if [ -z $2 ]; then
    style_file="style.json"
else
    style_file=$2
fi

baremaps edit \
  --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
  --tileset "${tileset_file}" \
  --style "${style_file}" \
  --port "${APP_PORT}"
