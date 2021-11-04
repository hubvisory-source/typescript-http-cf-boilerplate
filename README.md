# typescript-http-cf-boilerplate
Boilerplate for writing and testing HTTP Cloud Functions with Typescript


# Getting Started
- Install NodeJS (v16.13.0 was used to initialize this project)
- Install packages with `npm install`

## Running the function locally
- `npm start` will build the source Typescript files and allow you to run the resulting javascript code through a local HTTP server thanks to the [Functions Framework](https://www.npmjs.com/package/@google-cloud/functions-framework)
- `npm dev` will watch for changes to the source Typescript files and re-run the npm start command

## Testing your code
Code is tested with Jest and Ts-Jest to be able to write tests with Typescript. `index.ts` exports a "handleHttpRequest" function which is used by the main entrypoint of the function with any other action. This allows us to test the httpHandler by initializing a mock express app inside the tests. We then use supertest to make a request to that mock server inside our tests.

# TODO
- Deployment Script
