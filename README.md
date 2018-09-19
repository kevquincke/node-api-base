# Node API Base

Node Api Base is a boilerplate project for JSON RESTful APIs. 
It's based on Node v10.3.0 and Typescript v3.0.3.

### Features

This template comes with:

- Schema
  - Users table with roles (Admin and Regular by default)
- Endpoints
  - Sign up regular user
  - Sign up admin user with authentication and authorization
  - Authentication for both kinds of users
- Middleware
  - Authentication
  - Authorization (based on roles)
  - Exception handling
- Tests
  - Unit tests for user
  - Integration tests for API
  
### How to use

1. Clone this repo
2. Rename the folder and change `name` in `package.json` to the project name
3. Set the `NODE_ENV` environment variable as desired (`prod`, `dev`, `env`)
3. Create an `.env` file for each environment with a prefix value 
of the `NODE_ENV` value for example `dev.env` for development
4. In the `.env` file set the following values:
    ```
    JWT_KEY = secret -> a secret value for json web token hashing
    DB_TYPE = postgres -> a database driver (check Typeorm docs for available types on 
    http://typeorm.io/#connection-options/common-connection-options, as default postgres driver 
    is provided, if you want to use a different one you'll need to install it)
    DB_HOST = localhost -> database host
    DB_PORT = 5432 -> database port
    DB_USER = postgres -> database username
    DB_PASS = nacional -> database password
    DB_NAME = node-api-base -> database name
    ```
5. Run `yarn`
6. Run `yarn run dev` to run on development
7. You can now try your REST services!

**Tests**: To run the tests after step 5, run `yarn run test`

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
11. [ts-node](https://www.npmjs.com/package/ts-node) TypeScript execution and REPL for NodeJS
12. [tslint](https://www.npmjs.com/package/tslint) Extensible static analysis tool for TypeScript
13. [typescript](https://www.npmjs.com/package/typescript) Language for application-scale JavaScript
14. [bcrypt](https://www.npmjs.com/package/bcrypt) Lib to help to hash passwords
15. [express-async-errors](https://www.npmjs.com/package/express-async-errors) Simple ES6 async/await support hack for ExpressJS
16. [winston](https://www.npmjs.com/package/winston) A logger for just about everything
17. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) An implementation of JSON Web Tokens
18. [jest](https://www.npmjs.com/package/jest) Delightful JavaScript Testing
19. [ts-jest](https://www.npmjs.com/package/ts-jest) TypeScript preprocessor with source map support for Jest
20. [supertest](https://www.npmjs.com/package/supertest) HTTP assertions made easy via superagent
21. [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules) TypeScript rules available in ESLint

### Current version
**v1.0.0**
