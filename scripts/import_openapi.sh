#!/bin/bash

curl -v POST "http://localhost:8080/tilesets" -d @tileset_openapi.json \
--header "Content-Type: application/json"

curl -v POST "http://localhost:8080/styles" -d @style_openapi.json \
--header "Content-Type: application/vnd.mapbox.style+json"
