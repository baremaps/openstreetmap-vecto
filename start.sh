#!/bin/bash
HOST=${POSTGRES_HOST}
PORT=${POSTGRES_PORT}

baremaps preview \
  --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?allowMultiQueries=true&user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
  --config 'config.yaml'
