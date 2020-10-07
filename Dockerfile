FROM baremaps/postgis

# Configure the database
ENV POSTGRES_DB osmvecto
ENV POSTGRES_USER osmvecto
ENV POSTGRES_PASSWORD osmvecto

# Install utilities
RUN apt update
RUN apt install -y wget unzip openjdk-8-jdk gdal-bin 

# Install baremaps
RUN wget https://github.com/baremaps/baremaps/releases/latest/download/baremaps.zip
RUN unzip baremaps.zip
RUN rm baremaps.zip
ENV PATH="/baremaps/bin/:${PATH}"

# Add osmvecto
ADD . /osmvecto

WORKDIR /home
