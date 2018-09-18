'use strict';

module.exports = function (app, cb) {

  app.models.SchoolAdmin.create([{
    id: 100,
    username: 'school-admin-1',
    password: 'school-admin-1',
    name: 'Jordi',
    surname: 'Perez',
    email: 'school-admin-1@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 3
  }, {
    id: 101,
    username: 'school-admin-2',
    password: 'school-admin-2',
    name: 'Paula',
    surname: 'Giménez',
    email: 'school-admin-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 2
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
