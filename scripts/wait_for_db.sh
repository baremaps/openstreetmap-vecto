#/bin/bash

function wait_for_db() {
    until wait-for-it $POSTGRES_HOST:${POSTGRES_PORT} > /dev/null 2>&1; do
      echo "Waiting for postgres server ${POSTGRES_HOST}:${POSTGRES_PORT}"
      sleep 1
    done
    echo "Postgres server '${POSTGRES_HOST}:${POSTGRES_PORT}' available."
}
