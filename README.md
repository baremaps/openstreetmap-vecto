# OpenStreetMap Vecto

🚧 🚧 Work in progress 🚧 🚧

OpenStreetMap Vecto is a general-purpose configuration for [Baremaps](https://github.com/baremaps/baremaps).
It is used to generate vector tiles and to produce a Mapbox style inspired by [OpenStreetMap Carto](https://github.com/gravitystorm/openstreetmap-carto).

![OpenStreetMap Vecto](screenshot.png)

### Requirements

* [Docker](https://www.docker.com/) 18.09+.
* [Docker Compose](https://docs.docker.com/compose/) 1.27+.

## Getting started

In order to experiment with OpenStreetMap Vecto, you first need to clone the current repository.

```
git clone git@github.com:baremaps/openstreetmap-vecto.git
cd openstreetmap-vecto/
cp env.sample .env
```
Then, edit `.env` according to your local environment.

## Docker setup

A docker container containing a PostGIS database and all the tools required to run [Baremaps](https://github.com/baremaps/baremaps) can be started with [docker-compose](https://docs.docker.com/compose/).

The docker-compose.yml contains two services `db` and `app`. The former holding a PostgreSQL 13.1 / PostGIS 3.1 database and the latter serving the applicative content, namely baremaps. It's from the `app` containers that you want to run all baremaps commands to populate the database from data, or to start the web application using some of the commands defined hereunder.

### Useful commands

Command                                             | Description
:---------------------------------------            | :--------------------------------------------------
`docker-compose up --build`                         | Run the application in the foreground.
`docker-compose up --build --detach`                | Run the application in the background.
`docker-compose stop`                               | Stop all containers.
`docker-compose down`                               | Stop and remove all containers (but keep the data).
`docker-compose down --volumes`                     | Stop and permanently delete all containers and data.
`docker-compose down --volumes --remove-orphans`    | Same as previous and remove all dangling containers not defined in the Compose file.
`docker-compose exec app <command>`                 | Execute a command inside the running `app` container.
`docker-compose exec app bash -c ./populate-db.sh`  | Execute the populate-db.sh script to populate the database (inside the container).
`docker-compose exec app bash -c ./start.sh`        | Start the web application (the db must be populated before running that command).
`docker-compose ps`                                 | List running containers.
`docker-compose logs --tail 20 -f`                  | Print all containers logs to stdout (usefull when they were launched in the background).


Your browser ([http://localhost:9000/](http://localhost:9000/)) should now preview OpenStreetMap Vecto.     
Here, the port is 9000, but you will have to use the one you defined in your `.env` if you changed it. You will also have to change the port and host in `config.yaml` if you don't use the standard ones.      
Notice that a change in the configuration files (`config.yaml`) will automatically be reloaded by the browser.    
#### Production note

Please, notice than in production, you preferably want to run the global scripts using:    

```
docker-compose exec -d app bash -c populate-db    
docker-compose exec -d app bash -c start.sh ['your-config.yml']
```

## Improving the configuration

The `config.yaml` file is the main configuration files.
As the format is still evolving and it has not yet been properly documented.

In this file:
- The `server` property let you define the host and the port used by the tile server;
- The `center` property let you define the area which is loaded when opening the browser for the first time;
- The `bounds` property let you define minimal and maximal bounds for the map;
- The `layers` property let you define the SQL queries that will be used to create the vector tiles;
- The `stylesheets` property let you define style fragments that will be assembled together to form a [Mapbox styles](https://docs.mapbox.com/mapbox-gl-js/style-spec/).

## Updating the docker image

The following commands are used to publish the docker image.

```
docker build . --tag baremaps/osmvecto
docker push baremaps/osmvecto
```

## Contributing

As a lot remains to be done, contributions and feedbacks are welcome. 

## Troubleshooting windows

On windows, be careful with line endings (LF), especially when the files are mounted in a docker container.

```
docker run -d --name osmvecto --publish 5432:5432 --publish 9000:9000 --volume C:\openstreetmap-vecto:/home baremaps/osmvecto:latest
docker exec -ti osmvecto bash -c ./import.sh https://download.geofabrik.de/europe/switzerland-latest.osm.pbf
```