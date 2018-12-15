'use strict';

module.exports = function (app, cb) {

  app.models.Reward.create([{
    id: 10000,
    points: '172',
    points_obj: JSON.stringify({ 100000: 16, 100001: 7, 100002: 1, 100003: 1 }), // undo stringify => JSON.parse(myJSONString)
    badges_obj: JSON.stringify({ 100001: 9, 100002: 9, 100003: 2, 100004: 1, 100005: 1 }),
    level: 17,
    next_level_points: 8,
    rank: 'gran maestro',
    studentId: 10000
  }, {
    id: 10001,
    points: '90',
    points_obj: JSON.stringify({ 100000: 10, 100001: 6, 100002: 2, 100003: 1 }),
    badges_obj: JSON.stringify({ 100001: 5, 100002: 4, 100003: 3, 100004: 4, 100005: 2 }),
    level: 9,
    next_level_points: 10,
    rank: 'platino',
    studentId: 10001
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
