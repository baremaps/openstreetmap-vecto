FROM maven:3-jdk-11 n as baremaps-builder
ARG BRANCH_TO_CHECKOUT=main
WORKDIR /src
RUN git clone git@github.com/baremaps/baremaps && git checkout $BRANCH_TO_CHECKOUT
WORKDIR /src/baremaps
RUN mvn -P maputnik -B package


FROM osgeo/gdal:ubuntu-small-3.3.1

ARG BAREMAPS_VERSION=latest

# Install utilities
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends wget unzip openjdk-11-jdk postgresql-client \
       wait-for-it sqlite3 \
    && apt-get -y autoremove --purge && apt-get -y autoclean && ldconfig

# Install baremaps
#RUN wget -q https://github.com/baremaps/baremaps/releases/${BAREMAPS_VERSION}/download/baremaps.zip \
#    && unzip -q baremaps.zip \
#    && rm baremaps.zip

COPY --from=baremaps-builder /src/baremaps/baremaps-cli/target/baremaps.zip . \
    && unzip -q baremaps.zip \
    && rm baremaps.zip


ENV PATH="/baremaps/bin/:${PATH}"

COPY ./*.sh ${OSMVECTO_PATH}/

# Add osmvecto, uncomment for production
#COPY . ${OSMVECTO_PATH}
#WORKDIR ${OSMVECTO_PATH}
