#!/bin/bash

HOST=${POSTGRES_HOST}
PORT=${POSTGRES_PORT}

baremaps export \
  --database 'jdbc:postgresql://'${HOST}':'${PORT}'/'${POSTGRES_DB}'?user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
  --config 'config.yml' \
  --repository 'tiles/'
