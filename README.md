# OpenStreetMap Vecto

🚧 🚧 Work in progress 🚧 🚧

OpenStreetMap Vecto is a general-purpose configuration for [Baremaps](https://github.com/baremaps/baremaps).
It is used to generate vector tiles and to produce a Mapbox style inspired by [OpenStreetMap Carto](https://github.com/gravitystorm/openstreetmap-carto).

![OpenStreetMap Vecto](screenshot.png)

## Getting started

In order to experiment with OpenStreetMap Vecto, you first need to clone the current repository.

```
git clone git@github.com:baremaps/openstreetmap-vecto.git
cd openstreetmap-vecto/
```

A docker container containing a postgis database and all the tools required to run [Baremaps](https://github.com/baremaps/baremaps) can be started with the following command.
Notice that the current directory is mounted as a volume in the container.

```
docker run -d \
    --name osmvecto \
    --publish 5432:5432 \
    --publish 9000:9000 \
    --volume $(pwd):/home \
    baremaps/osmvecto:latest
```

You then need to import the Natural Earth data and the OpenStreetMap data in the postgis database.
Be patient, depending on your setup importing geospatial data into postgis can take more or less time.

```
docker exec -ti osmvecto bash -c './import.sh https://download.geofabrik.de/europe/switzerland-latest.osm.pbf'
```

You should now be able to start the [Baremaps](https://github.com/baremaps/baremaps) tile server.

```
docker exec -ti osmvecto bash -c ./start.sh
```

Your browser ([http://localhost:9000/](http://localhost:9000/)) should now preview OpenStreetMap Vecto.
Notice that a change in the configuration files (`config.yaml`) will automatically be reloaded by the browser.

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
docker system prune -a
docker run -d --name osmvecto --publish 5432:5432 --publish 9000:9000 --volume C:\openstreetmap-vecto:/home baremaps/osmvecto:latest
docker exec -ti osmvecto bash -c ./import.sh https://download.geofabrik.de/europe/switzerland-latest.osm.pbf
```