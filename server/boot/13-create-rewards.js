'use strict';

module.exports = function (app, cb) {

  app.models.Reward.create([{
      id: 10000,
      points: 174,
      points_obj: JSON.stringify({
        100001: 9,
        100002: 9,
        100003: 2,
        100004: 1,
        100005: 1
      }), // undo stringify => JSON.parse(myJSONString)
      badges_obj: JSON.stringify({
        100000: 15,
        100001: 7,
        100002: 1,
        100003: 1
      }),
      level: 17,
      next_level_points: 6,
      rank: 'gran maestro',
      studentId: 10000
    }, {
      id: 10001,
      points: 90,
      points_obj: JSON.stringify({
        100001: 2
      }),
      badges_obj: JSON.stringify({}),
      level: 9,
      next_level_points: 10,
      rank: 'platino',
      studentId: 10001
    }, {
      id: 10002,
      points: 1,
      points_obj: JSON.stringify({
        100002: 1
      }),
      badges_obj: JSON.stringify({
        100000: 1
      }),
      level: 0,
      next_level_points: 9,
      rank: 'bronce',
      studentId: 10002
    }, {
      id: 10004,
      points: 4,
      points_obj: JSON.stringify({
        100001: 1,
        100002: 1,
        100005: 1
      }),
      badges_obj: JSON.stringify({
        100000: 1,
        100001: 1
      }),
      level: 0,
      next_level_points: 6,
      rank: 'bronce',
      studentId: 10004
    }, {
      id: 10005,
      points: 0,
      points_obj: JSON.stringify({}),
      badges_obj: JSON.stringify({}),
      level: 0,
      next_level_points: 10,
      rank: 'bronce',
      studentId: 10005
    }, {
      id: 10006,
      points: 0,
      points_obj: JSON.stringify({}),
      badges_obj: JSON.stringify({}),
      level: 0,
      next_level_points: 10,
      rank: 'bronce',
      studentId: 10006
    }, {
      id: 10007,
      points: 0,
      points_obj: JSON.stringify({}),
      badges_obj: JSON.stringify({}),
      level: 0,
      next_level_points: 10,
      rank: 'bronce',
      studentId: 10007
    }, {
      id: 10008,
      points: 14,
      points_obj: JSON.stringify({
        100001: 2,
        100002: 1,
        100003: 1,
        100004: 0,
        100005: 0
      }),
      badges_obj: JSON.stringify({}),
      level: 1,
      next_level_points: 6,
      rank: 'plata',
      studentId: 10008
    }, {
      id: 10009,
      points: 25,
      points_obj: JSON.stringify({
        100001: 3,
        100002: 2,
        100003: 2,
        100004: 1,
        100005: 1
      }),
      badges_obj: JSON.stringify({}),
      level: 2,
      next_level_points: 5,
      rank: 'oro',
      studentId: 10009
    }

  ], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
