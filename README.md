# Node API Base

Node Api Base is a boilerplate project for JSON RESTful APIs. 
It's based on Node v10.3.0 and Typescript v3.0.3.

### Features

This template comes with:

- Schema
  - Users table
- Endpoints
  - Sign up with user credentials
  
### How to use

1. Clone this repo
2. Rename the folder and change `name` in `package.json` to the project name
3. Create an `.env` file with a key called `HASH_SECRET` and give it a secret value
4. Create a file called `ormconfig.env` and set the following values:
    ```
    TYPEORM_CONNECTION = postgres `-> it can be other db refer to typeorm doc`
    TYPEORM_HOST = localhost
    TYPEORM_USERNAME = postgres
    TYPEORM_PASSWORD = password
    TYPEORM_DATABASE = databaseName
    TYPEORM_PORT = 5432
    TYPEORM_SYNCHRONIZE = true
    TYPEORM_LOGGING = false `-> query logging`
    ```
    Leave the following properties as they are, or change them if you make any
    change to the folder structure:
    
    ```
    TYPEORM_ENTITIES = src/models/\*\*/*.ts
    TYPEORM_ENTITIES_DIR = src/entity
    TYPEORM_MIGRATIONS = src/migration/\*\*/*.ts
    TYPEORM_MIGRATIONS_DIR = src/migration
    TYPEORM_SUBSCRIBERS = src/subscriber/\*\*/*.ts
    TYPEORM_SUBSCRIBERS_DIR = src/subscriber
    ```
5. Run `yarn`
6. Run `yarn run dev` to run on development
7. You can now try your REST services!

### NPM Packages

1. [body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware
2. [class-validator](https://www.npmjs.com/package/class-validator) Validate incoming data
3. [dotenv](https://www.npmjs.com/package/dotenv) Loads environment variables from a `.env` to `process.env`
4. [express](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework for NodeJS
5. [lodash](https://www.npmjs.com/package/lodash) The Lodash library exported as Node.js modules
6. [pg](https://www.npmjs.com/package/pg) Non-blocking PostgreSQL client for NodeJS
7. [pug](https://www.npmjs.com/package/pug) High performance template engine
8. [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) Runtime reflection on types
9. [typeorm](https://www.npmjs.com/package/typeorm) ORM that can run in NodeJS
10. [ts-loader](https://www.npmjs.com/package/ts-loader) Typescript loader for webpack
11. [ts-node](https://www.npmjs.com/package/ts-node) TypeScript execution and REPL for NodeJS
12. [tslint](https://www.npmjs.com/package/tslint) Extensible static analysis tool for TypeScript
13. [typescript](https://www.npmjs.com/package/typescript) Language for application-scale JavaScript
14. [webpack](https://www.npmjs.com/package/webpack) Module bundler

### Current version
**v1.0.0**
