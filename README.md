# Classpip Services

[![Classpip Badge](https://img.shields.io/badge/classpip-services-brightgreen.svg)](https://github.com/classpip/classpip-services)
[![Build Status](https://travis-ci.org/classpip/classpip-services.svg?branch=master)](https://travis-ci.org/classpip/classpip-services)
[![Docker Stars](https://img.shields.io/docker/stars/classpip/classpip-services.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-services/)
[![Docker Pulls](https://img.shields.io/docker/pulls/classpip/classpip-services.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-services/)
[![Docker Automated buil](https://img.shields.io/docker/automated/classpip/classpip-services.svg?maxAge=2592000)](https://hub.docker.com/r/classpip/classpip-services/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bc7f317bf0fd4c83a81a8dd00346dce1)](https://www.codacy.com/app/classpip/classpip-services?utm_source=github.com&utm_medium=referral&utm_content=classpip/classpip-services&utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/classpip/classpip-services/badge.svg?branch=master)](https://coveralls.io/github/classpip/classpip-services?branch=master)

[![classpip-icon](https://github.com/classpip/classpip/raw/master/resources/icontext-land.png)](http://www.classpip.com/)

[Classpip](https://www.classpip.com) is a Mobile application for School Gamification. The application is builded around a stack of services and websites to provide a full experience in order to gamificate any educational environment.

This repository contains all the services for accessing the (non)restricted elements of the Classpip data model. This SOA exposes all the methods for querying and managing the Classpip data.

## Global dependencies

Make sure you have NodeJS installed. Download the installer [here](https://nodejs.org/dist/latest-v5.x/) or use your favorite package manager. It's best to get the 5x version of node along with the 3x version of npm. This offers the best in stability and speed for building.

You have to install [LoopBack](http://loopback.io) tooling for managing the model:

```script
npm install -g strongloop@6.0.3
```

## Local Dependencies

All the project dependencies are manage through [npmjs](https://www.npmjs.com/). To install this dependenices you should run:

```script
npm install
```

## Running

Start the server (`node .`) and open [`localhost:3000`](http://localhost:3000) in your browser to view the app.

## Testing

To run the tests and code validations you could run:

```script
npm test
```

## Local Database

To configure a __local mysql database__ instead the current in-memory configuration, you should replace the **db** field by the following lines into the file ```classpip-services/server/datasources.json```:

```javascript
{
  "db": {
    "host": "localhost",
    "port": 3306,
    "url": "",
    "database": "<database>",
    "password": "<local_user_password>",
    "name": "db",
    "user": "<local_user>",
    "connector": "mysql"
  }
}
```

## License

Classpip is released under the [Apache2 License](https://github.com/classpip/classpip-services/blob/master/LICENSE).
