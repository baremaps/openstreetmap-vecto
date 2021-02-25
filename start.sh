#!/bin/bash

HOST=${POSTGRES_HOST}
PORT=${POSTGRES_PORT}

if [ -z $1 ]; then
    config_file='config.yml'
else
    config_file=$1
fi

baremaps preview \
  --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?allowMultiQueries=true&user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
  --config "${config_file}" \
  --log-level=DEBUG
