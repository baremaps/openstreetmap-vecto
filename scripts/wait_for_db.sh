#/bin/bash

function wait_for_db() {
    until wait-for-it $POSTGRES_HOST:5432 > /dev/null 2>&1; do
      echo "Waiting for postgres server ${POSTGRES_HOST}"
      sleep 1
    done
    echo "Postgres server '${POSTGRES_HOST}' available."
}
