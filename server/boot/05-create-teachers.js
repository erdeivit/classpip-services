'use strict';

module.exports = function (app, cb) {

  app.models.Teacher.create([{
    id: 1000,
    username: 'teacher-1',
    password: 'teacher-1',
    name: 'Joan',
    surname: 'Felix',
    email: 'teacher-1@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 10
  }, {
    id: 1001,
    username: 'teacher-2',
    password: 'teacher-2',
    name: 'Jose',
    surname: 'Velazquez',
    email: 'teacher-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 1
  }, {
    id: 1002,
    username: 'teacher-3',
    password: 'teacher-3',
    name: 'David',
    surname: 'Piña',
    email: 'teacher-3@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 1
  }, {
    id: 1003,
    username: 'teacher-4',
    password: 'teacher-4',
    name: 'Eva Maria',
    surname: 'Piñol',
    email: 'teacher-4@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 2
  }, {
    id: 1004,
    username: 'teacher-5',
    password: 'teacher-5',
    name: 'Lorena',
    surname: 'Saez',
    email: 'teacher-5@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 2
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
