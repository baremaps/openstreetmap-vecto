#!/bin/bash

baremaps serve \
  --database 'jdbc:postgresql://localhost:5432/osmvecto?allowMultiQueries=true&user=osmvecto&password=osmvecto' \
  --config 'config.yaml' \
  --watch-changes --log-level DEBUG
  