FROM node:14.17.6

LABEL dev.samk="hello@samk.dev"

# Install NPM v7.24.1
RUN npm i -g npm@7.24.1

# Install NestJS CLI globally
RUN npm i -g @nestjs/cli

# Specify our working directory
WORKDIR /src/app

# Copy the package.jsons from host to container
COPY package*.json ./

# Install all the deps
RUN npm install

# Bundle app source && copy all project files
COPY . .

# Set node env to development
ARG NODE_ENV=development

# Build the app && generate /dist
RUN npm run build