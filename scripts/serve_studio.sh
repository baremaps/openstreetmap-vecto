#!/bin/bash

HOST=${POSTGRES_HOST}
PORT=${POSTGRES_PORT}

source scripts/setup_studio.sh --source-only
source scripts/wait_for_db.sh

wait_for_db
setup_studio

baremaps studio \
  --database "jdbc:postgresql://${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?user=${POSTGRES_USER}&password=${POSTGRES_PASSWORD}" \
  --port $APP_PORT
