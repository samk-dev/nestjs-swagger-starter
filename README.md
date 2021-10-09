# Lynx E-Commerce

**Work in progress 🦺**

## Description

Headless e-commerce with Swagger Rest API && GraphQL

## System Requirements

**Locally:**

[NodeJS v14.x](https://nodejs.dev)

[NPM v7.x](https://nodejs.dev)

_check nvm to run multiple versions of node && npm [nvm.sh](https://github.com/nvm-sh/nvm/blob/master/README.md)_

[Postgres SQL](https://www.postgresql.org)

DB client to manage the database such as [pgAdmin](https://www.pgadmin.org) or [Table Plus](https://tableplus.com)

```bash
# 1. Get your .env file ready (Adjust the ports to available ports on your system)
$ env-example mv .env

# 2. Install dependencies
$ npm install

# 3. Build assets
$ npm run build

# 4. Serve the app in watch mode
$ npm run start:dev
```

**Docker && Docker Compose**

To avoid the headeach of meeting the application versions requirements, you can use the power of docker && docker compose to run && test the application locally

**macos && linuxs**

[Docker && Docker Compose](https://www.docker.com/get-started)

**windows**

[Docker Docs windows](https://docs.docker.com/docker-for-windows/install/)

[Linux Subsystem WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

```bash
# 1. Get your .env file ready (Adjust the ports to available ports on your system)
$ env-example mv .env

# 2. Run docker-compose (go have a ☕️ first build will take some time...)
$ docker-compose up

# or

# Run docker-compose in detached mode
$ docker-compose up -d
```

## License

Lynx E-Commerce is [MIT licensed](LICENSE).
