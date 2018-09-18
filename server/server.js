'use strict';

if (process.env.NEW_RELIC_TOKEN) {
  require('newrelic');
}
var bodyParser = require('body-parser');
var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

// configure view handler
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(loopback.token());

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    /* eslint-disable */
    console.log('Web server listening at: %s', baseUrl);
    /* eslint-enable */
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      /* eslint-disable */
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
      /* eslint-enable */
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
var bootOptions = {
  'appRootDir': __dirname,
  'bootScripts': []
};

boot(app, bootOptions, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
