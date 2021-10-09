FROM node:14.17.6

LABEL dev.samk="hello@samk.dev"

# Set node env to development
ARG NODE_ENV=development

# Install NPM v7.24.1
RUN npm i -g npm@7.24.1

# Specify our working directory
WORKDIR /src/app

# Copy the package.jsons from host to container
COPY package*.json ./

# Copy docker init script
COPY docker-start.sh ./

# Bundle app source && copy all project files
COPY . .

# Give execution permision to docker-start.sh
RUN chmod 777 docker-start.sh

# Execute docker-start.sh
RUN ./docker-start.sh