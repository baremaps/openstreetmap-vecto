#!/bin/bash

readonly PGCLIENTENCODING=UTF8
readonly PGUSER=baremaps
readonly PGPASSWORD=baremaps
readonly PGDATABASE=baremaps
readonly PGHOST=localhost
readonly PGPORT=5432

readonly NATURALEARTH=http://naciscdn.org/naturalearth/packages/natural_earth_vector.sqlite.zip
readonly OPENSTREETMAP=https://download.geofabrik.de/europe/switzerland-latest.osm.pbf

function import_naturalearth() {
    echo "Import naturalearth"
    wget -O naturalearth.zip $NATURALEARTH
    unzip -o -d natural_earth naturalearth.zip 
    ogr2ogr \
        -progress \
        -f Postgresql \
        -s_srs EPSG:4326 \
        -t_srs EPSG:3857 \
        -clipsrc -180.1 -85.0511 180.1 85.0511 \
        PG:"host=$PGHOST port=$PGPORT dbname=$PGDATABASE user=$PGUSER password=$PGPASSWORD" \
        -lco GEOMETRY_NAME=geometry \
        -lco OVERWRITE=YES \
        -lco DIM=2 \
        -nlt GEOMETRY \
        -overwrite \
        "natural_earth/packages/natural_earth_vector.sqlite"
    psql -d "host=$PGHOST port=$PGPORT dbname=$PGDATABASE user=$PGUSER password=$PGPASSWORD" < sql/naturalearth.sql
}

function import_openstreetmap() {
    echo "Import openstreetmap"
    wget -O openstreetmap.pbf $OPENSTREETMAP
    baremaps import \
    --input 'openstreetmap.pbf' \
    --database "jdbc:postgresql://$PGHOST:$PGPORT/$PGDATABASE?allowMultiQueries=true&user=$PGUSER&password=$PGPASSWORD"
}

function main {
    import_naturalearth
    import_openstreetmap
}

main
