FROM osgeo/gdal:ubuntu-small-3.2.1

# # Configure the database
ENV POSTGRES_DB=osmvecto
ENV POSTGRES_USER=osmvecto
ENV POSTGRES_PASSWORD=osmvecto
ENV OSMVECTO_PATH=/osmvecto

# Install utilities
RUN apt-get update \
    && apt-get install -y wget unzip openjdk-8-jdk

# Install GDAL from debian unstable
RUN set -eux \
    #&& echo deb 'http://deb.debian.org/debian testing main' >> /etc/apt/sources.list \
    && apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends tzdata wait-for-it \
      proj-bin proj-data gdal-bin \
    && apt-get -y autoremove --purge && apt-get -y autoclean \
    && ln -fs /usr/share/zoneinfo/Europe/Zurich /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata

# Install baremaps
RUN wget https://github.com/baremaps/baremaps/releases/latest/download/baremaps.zip \
    && unzip baremaps.zip \
    && rm baremaps.zip

ENV PATH="/baremaps/bin/:${PATH}"

# Add osmvecto, uncomment for production
#ADD . ${OSMVECTO_PATH}
#WORKDIR ${OSMVECTO_PATH}
