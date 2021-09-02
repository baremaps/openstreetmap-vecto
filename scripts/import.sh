#!/bin/bash

source scripts/create_extension.sh --source-only
source scripts/setup_studio.sh --source-only
source scripts/import_ne_vector.sh --source-only
source scripts/import_osm_pbf.sh --source-only
source scripts/import_osm_water.sh --source-only
source scripts/import_osm_water_simplified.sh --source-only
source scripts/wait_for_db.sh

wait_for_db
create_extension
setup_studio
import_ne_vector
import_osm_pbf "${1}"
import_osm_water
import_osm_water_simplified

echo "[INFO ] $(date +%F' '%T.%3N) Imports finished successfully."
