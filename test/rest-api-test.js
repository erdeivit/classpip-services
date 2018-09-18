'use strict';

var app = require('../server/server');
var request = require('supertest');

describe('REST API request', function () {
  before(function (done) {
    require('./start-server');
    done();
  });

  after(function (done) {
    app.removeAllListeners('started');
    app.removeAllListeners('loaded');
    done();
  });

  it('should get the list of schools', function (done) {
    request(app)
      .get('/api/schools')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should fail getting my school without authentication', function (done) {
    request(app)
      .get('/api/schools/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should fail getting my account without authentication', function (done) {
    request(app)
      .get('/api/students/1')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401, done);
  });

  it('should fail getting my accessTokens without authentication', function (done) {
    request(app)
      .get('/api/students/1/accessTokens')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401, done);
  });
});

describe('Unexpected Usage', function () {
  it('should not crash the server when posting a bad id', function (done) {
    request(app)
      .get('/api/foobar')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
