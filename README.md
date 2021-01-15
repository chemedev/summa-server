# Nodejs API

This project is a test API with nodejs + express + postgres.

## Installation

Project uses Nodejs 14.15.4 LTS version or higher installed in your system.
You can install it from [https://nodejs.org](https://nodejs.org)

- Run `node -v` to check nodejs version.
- Run `npm install` to install project dependencies.
- Modify `.env` file to set up app port and local db config.

## Usage

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode with **nodemon**.\
Open [http://localhost:3001](http://localhost:3001) to check OK status.

### `npm start`

Runs the app in the production mode with **nodejs**.\
Open [http://localhost:3001](http://localhost:3001) to check OK status.

### `npm run dev:clean`

This command will drop the development database.

### `npm run prod:clean`

This command will drop the production database.

### `make clean`

This command will drop every database generated.
