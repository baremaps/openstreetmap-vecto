# FROM maven:3-jdk-11 as baremaps-builder
# ARG BRANCH_TO_CHECKOUT=main
# # Install utilities (inc nodejs with custom debian repo)
# RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
#     && apt-get update \
#     && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get install -y --no-install-recommends build-essential make nodejs

# # force HTTPS for cloning (required for baremaps submodules)
# RUN git config --global url."https://github.com/".insteadOf git@github.com:
# WORKDIR /src
# RUN git clone --depth 1 --recursive -b $BRANCH_TO_CHECKOUT git@github.com:/baremaps/baremaps
# WORKDIR /src/baremaps
# RUN mvn -P maputnik -DskipTests -B package


FROM osgeo/gdal:ubuntu-small-3.3.1

ARG BAREMAPS_VERSION=v0.6.1

# Install utilities
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends wget unzip openjdk-11-jdk postgresql-client \
       wait-for-it sqlite3 \
    && apt-get -y autoremove --purge && apt-get -y autoclean && ldconfig

# Install baremaps
RUN wget -q https://github.com/baremaps/baremaps/releases/${BAREMAPS_VERSION}/download/baremaps.zip \
   && unzip -q baremaps.zip \
   && rm baremaps.zip

COPY --from=baremaps-builder /src/baremaps/baremaps-cli/target/baremaps.zip .
RUN unzip -q baremaps.zip && rm baremaps.zip


ENV PATH="/baremaps/bin/:${PATH}"

COPY ./*.sh ${OSMVECTO_PATH}/

# Add osmvecto, uncomment for production
#COPY . ${OSMVECTO_PATH}
#WORKDIR ${OSMVECTO_PATH}
