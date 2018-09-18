'use strict';

module.exports = function (app, cb) {

  app.dataSources.db.automigrate()
    .then(function (err) {
      if (err) {
        throw err;
      }
      process.nextTick(cb);
    });
};
