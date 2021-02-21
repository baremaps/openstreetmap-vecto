FROM osgeo/gdal:ubuntu-small-3.2.1

# # Configure the database
ENV POSTGRES_DB=osmvecto
ENV POSTGRES_USER=osmvecto
ENV POSTGRES_PASSWORD=osmvecto
ENV OSMVECTO_PATH=/osmvecto

# Install utilities
RUN set -eux \
    && apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends wget unzip openjdk-11-jdk postgresql-client \
       tzdata wait-for-it proj-bin proj-data gdal-bin sqlite3 libgeos-dev librttopo-dev \
       zlib1g libpq5 libc-bin libc6 libtiff-dev libsqlite3-dev libcurl4-openssl-dev \
    && wget -q http://archive.ubuntu.com/ubuntu/pool/universe/p/proj/proj-data_7.1.0-1_all.deb \
    && wget -q http://archive.ubuntu.com/ubuntu/pool/universe/p/proj/libproj19_7.1.0-1_amd64.deb \
    && wget -q http://archive.ubuntu.com/ubuntu/pool/universe/p/proj/libproj-dev_7.1.0-1_amd64.deb \
    && wget -q http://archive.ubuntu.com/ubuntu/pool/universe/s/spatialite/libspatialite7_5.0.0-1_amd64.deb \
    && wget -q http://archive.ubuntu.com/ubuntu/pool/universe/s/spatialite/libspatialite-dev_5.0.0-1_amd64.deb \
    && dpkg -i proj-data_7.1.0-1_all.deb \
    && dpkg -i libproj19_7.1.0-1_amd64.deb  \
    && dpkg -i libproj-dev_7.1.0-1_amd64.deb \
    && dpkg -i libspatialite7_5.0.0-1_amd64.deb \
    && dpkg -i libspatialite-dev_5.0.0-1_amd64.deb \
    && rm --interactive=never proj-data_7.1.0-1_all.deb libproj19_7.1.0-1_amd64.deb \
       libproj-dev_7.1.0-1_amd64.deb libspatialite7_5.0.0-1_amd64.deb libspatialite-dev_5.0.0-1_amd64.deb \
    && apt-get -y autoremove --purge && apt-get -y autoclean && ldconfig \
    && ln -fs /usr/share/zoneinfo/Europe/Zurich /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata

# Install baremaps
RUN wget -q https://github.com/baremaps/baremaps/releases/latest/download/baremaps.zip \
    && unzip -q baremaps.zip \
    && rm baremaps.zip

ENV PATH="/baremaps/bin/:${PATH}"

# Add osmvecto, uncomment for production
#ADD . ${OSMVECTO_PATH}
#WORKDIR ${OSMVECTO_PATH}
