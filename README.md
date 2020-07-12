# hand-and-foot

Keep score of the classic Hand and Foot card game. The repository contains both a `web` and `native` version of the application.

## Prerequisites
### Install Node
Refer to the [Node website](https://nodejs.org/en/) to install node or use `npm`.

Install node globally
```bash
[sudo] npm install node -g
```

Check node installation
```bash
node -v
```

## Firebase
The project is migrating to use Google Firebase Cloud Functions. The project uses the Spark Plan (free tier), so functionality may be limited if the quota is exceeded.

Cloud functions are stored in `function/index.js`.

Currently, a single cloud function called `helloWorld` exists. The function uses Node.js 8, which is required to continue using the Spark Plan but will be deprecated on March 15, 2021.

Deploy
```bash
firebase deploy
```

## Documentation
### Components

## Development
See Issues.