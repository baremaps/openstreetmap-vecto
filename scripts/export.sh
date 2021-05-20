#!/bin/bash

baremaps export \
  --database 'jdbc:postgresql://'${POSTGRES_HOST}':'${POSTGRES_PORT}'/'${POSTGRES_DB}'?user='${POSTGRES_USER}'&password='${POSTGRES_PASSWORD} \
  --tileset 'tileset.yml' \
  --repository 'static/tiles/osm/'
