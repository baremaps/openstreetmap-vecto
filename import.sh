#!/bin/bash

osm_url=$1
osm_file=$(basename "${osm_url}")

function import_naturalearth() {
    echo "Import Natural Earth vector data"
    wget -N http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
    unzip -o -d natural_earth_vector natural_earth_vector.sqlite.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:4326 \
        -t_srs EPSG:3857 \
        -clipsrc -180 -85.0511 180.1 85.0511 \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -lco GEOMETRY_NAME=geometry \
        -lco OVERWRITE=YES \
        -lco DIM=2 \
        -nlt GEOMETRY \
        -overwrite \
        "natural_earth_vector/packages/natural_earth_vector.sqlite"
    baremaps execute \
        --database 'jdbc:postgresql://localhost:5432/osmvecto?&user=osmvecto&password=osmvecto' \
        --file '../queries/ne_create_indexes.sql'
}

function import_osm_water_polygons() {
    echo "Import OpenStreetMap water polygons"
    wget -N https://osmdata.openstreetmap.de/download/water-polygons-split-3857.zip
    unzip -o water-polygons-split-3857.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:3857 \
        -t_srs EPSG:3857 \
        -lco OVERWRITE=YES \
        -lco GEOMETRY_NAME=geometry \
        -overwrite \
        -nln osm_water_polygons \
        -nlt geometry \
        --config PG_USE_COPY YES \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        "water-polygons-split-3857/water_polygons.shp"
    psql -d "host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -c "CREATE INDEX CONCURRENTLY osm_water_polygons_gix ON osm_water_polygons USING SPGIST(geometry);"
}

function import_osm_simplified_water_polygons() {
    echo "Import simplified OpenStreetMap water polygons"
    wget -N https://osmdata.openstreetmap.de/download/simplified-water-polygons-split-3857.zip
    unzip -o simplified-water-polygons-split-3857.zip
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:3857 \
        -t_srs EPSG:3857 \
        -lco OVERWRITE=YES \
        -lco GEOMETRY_NAME=geometry \
        -overwrite \
        -nln osm_simplified_water_polygons \
        -nlt geometry \
        --config PG_USE_COPY YES \
        PG:"host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        "simplified-water-polygons-split-3857/simplified_water_polygons.shp"
    psql -d "host=localhost port=5432 dbname=osmvecto user=osmvecto password=osmvecto" \
        -c "CREATE INDEX CONCURRENTLY osm_simplified_water_polygons_gix ON osm_simplified_water_polygons USING SPGIST(geometry);"
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -N "${osm_url}"
    baremaps execute \
        --database 'jdbc:postgresql://localhost:5432/osmvecto?&user=osmvecto&password=osmvecto' \
        --file '../queries/osm_create_extensions.sql' \
        --file '../queries/osm_drop_views.sql' \
        --file '../queries/osm_drop_tables.sql' \
        --file '../queries/osm_create_tables.sql'
    baremaps import \
        --database "jdbc:postgresql://localhost:5432/osmvecto?allowMultiQueries=true&user=osmvecto&password=osmvecto" \
        --file "${osm_file}"
    baremaps execute \
        --database 'jdbc:postgresql://localhost:5432/osmvecto?&user=osmvecto&password=osmvecto' \
        --file '../queries/osm_create_gin_indexes.sql' \
        --file '../queries/osm_create_views.sql' \
        --file '../queries/osm_create_gist_indexes.sql'
}

function main {
    mkdir -p /home/data
    cd /home/data
    import_naturalearth
    import_osm_water_polygons
    import_osm_simplified_water_polygons
    import_openstreetmap
}

main
