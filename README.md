# OpenStreetMap Vecto

🚧 🚧 Work in progress 🚧 🚧

OpenStreetMap Vecto is a general-purpose configuration for [Baremaps](https://github.com/baremaps/baremaps).
It is used to generate vector tiles and to produce a Mapbox style inspired by [OpenStreetMap Carto](https://github.com/gravitystorm/openstreetmap-carto).

![OpenStreetMap Vecto](screenshot.png)

### Requirements

* [Docker](https://www.docker.com/) 18.09+.
* [Docker Compose](https://docs.docker.com/compose/) 1.27+.

## Getting started

In order to experiment with OpenStreetMap Vecto, you first need to clone the current repository and to edit the `.env` file according to your local environment.

```
git clone git@github.com:baremaps/openstreetmap-vecto.git
cd openstreetmap-vecto/
cp env.sample .env
```

Then, you can start the docker images, import the data, and edit the map with the following commands.

```
docker-compose up --build --detach   
docker-compose exec app bash -c scripts/import.sh    
docker-compose exec app bash -c scripts/edit.sh
```

## Docker compose setup

A docker container containing a PostGIS database and all the tools required to run [Baremaps](https://github.com/baremaps/baremaps) can be started with [docker-compose](https://docs.docker.com/compose/).

The `docker-compose.yml` file contains two services: `db` and `app`. 
The former holding a PostgreSQL 13.1 / PostGIS 3.1 database and the latter serving the applicative content, namely baremaps. 
It's from the `app` containers that you want to run all baremaps commands to populate the database from data, or to start the web application using some of the commands defined hereunder.

### Useful commands

Command                                                     | Description
:---------------------------------------                    | :--------------------------------------------------
`docker-compose up --build`                                 | Run the application in the foreground.
`docker-compose up --build --detach`                        | Run the application in the background.
`docker-compose stop`                                       | Stop all containers.
`docker-compose down`                                       | Stop and remove all containers (but keep the data).
`docker-compose down --volumes`                             | Stop and permanently delete all containers and data.
`docker-compose down --volumes --remove-orphans`            | Same as previous and remove all dangling containers not defined in the Compose file.
`docker-compose exec app <command>`                         | Execute a command inside the running `app` container.
`docker-compose exec app bash -c ./scripts/import.sh`       | Execute the import.sh script to populate the database (inside the container).
`docker-compose exec app bash -c ./scripts/edit.sh`         | Edit the map (the db must be populated before running that command).
`docker-compose ps`                                         | List running containers.
`docker-compose logs --tail 20 -f`                          | Print all containers logs to stdout (usefull when they were launched in the background).


Your browser ([http://localhost:9090/](http://localhost:9090/)) should now preview OpenStreetMap Vecto.     
Here, the port is `9090`, but you will have to use the one you defined in your `.env` if you changed it. 
You will also have to change the port and host in `tileset.json` if you don't use the standard ones.    
Notice that a change in the configuration files (`tileset.json`) will automatically be reloaded by the browser.

## Editing the tileset

The configuration format used in the `tileset.json` file extends the [TileJSON specification](https://github.com/mapbox/tilejson-spec/tree/master/2.2.0).
Simply put, it adds in the ability to describe the `vector_tiles` and their content with SQL queries that follow the Postgis dialect.

```
{
  "tilejson": "2.2.0",
  "tiles": [
    "http://localhost:9090/tiles/{z}/{x}/{y}.mvt"
  ],
  "vector_layers": [
    {
      "id": "aerialway",
      "queries": [
        {
          "minZoom": 14,
          "maxZoom": 20,
          "sql": "SELECT id, tags, geom FROM osm_ways_z${zoom} WHERE tags ? 'aerialway'"
        }
      ]
    }
  ]
}
```

## Editing the style

The configuration format used in the `style.json` follows the [Mapbox style specification](https://github.com/mapbox/mapbox-gl-js).
Baremaps integrates [Maputnik](https://maputnik.github.io/) and most of the modifications will take place in the browser.

## Contributing

As a lot remains to be done, contributions and feedbacks are welcome. 

## Troubleshooting windows

On windows, be careful with line endings (LF), especially when the files are mounted in a docker container.

```
docker run -d --name osmvecto --publish 5432:5432 --publish 9090:9090 --volume C:\openstreetmap-vecto:/home baremaps/osmvecto:latest
docker exec -ti osmvecto bash -c ./import.sh https://download.geofabrik.de/europe/switzerland-latest.osm.pbf
```