#!/bin/bash

import_esa_landcover() {
    echo "Import ESA Landcover"
    gdal_translate NETCDF:"C3S-LC-L4-LCCS-Map-300m-P1Y-2019-v2.1.1.nc":lccs_class landcover.tiff
    rm -f landcover-*
    i = 0
    for x in {0..9}
    do
        xmin=$(((x*36)-180))
        xmax=$((xmin+36))
        for y in {0..9}
        do
            ymin=$(((y*18)-90))
            ymax=$((ymin+18))
            echo "---------"
            echo "Part" $i
            gdalwarp \
                -te $xmin $ymin $xmax $ymax \
                landcover.tiff \
                landcover-$i.tiff
            gdal_polygonize.py \
                landcover-$i.tiff \
                -f PostgreSQL \
                PG:"host=${HOST} port=${PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" \
                landcover
            rm landcover-$i.tiff
            i=$((i+1))
        done
    done
}

if [ "${1}" != "--source-only" ]; then
    esa_import_landcover "${@}"
fi