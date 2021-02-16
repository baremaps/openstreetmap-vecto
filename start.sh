#!/bin/bash

baremaps preview \
  --database 'jdbc:postgresql://localhost:5432/osmvecto?allowMultiQueries=true&user=osmvecto&password=osmvecto' \
  --config 'config.yaml'
