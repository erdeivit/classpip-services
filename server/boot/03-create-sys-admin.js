'use strict';

module.exports = function (app, cb) {

  app.models.User.create({
    id: 1,
    username: 'admin',
    password: 'admin',
    email: 'classpip@gmail.com',
    emailVerified: 1
  }, function (err, user) {
    if (err) throw err;

    app.models.Role.create({
      id: 1,
      name: 'SYS-ADMIN'
    }, function (err, role) {
      if (err) throw err;

      role.principals.create({
        principalType: app.models.RoleMapping.USER,
        principalId: user.id
      }, function (err) {
        if (err) throw err;
        process.nextTick(cb);
      });
    });
  });
};
