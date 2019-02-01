'use strict';

module.exports = function (app, cb) {

  app.models.Grade.create([{
    id: 1,
    name: '1ero ESO',
    schoolId: 1
  }, {
    id: 2,
    name: '2ndo ESO',
    schoolId: 1
  }], function (err, grades) {
    if (err) throw err;

    app.models.Matter.create([{
      id: 1,
      name: 'Matematicas',
      schoolId: 1
    }, {
      id: 2,
      name: 'Catalan',
      schoolId: 1
    }], function (err, matters) {
      if (err) throw err;

      grades[0].matters.add(matters[0], function (err) {
        if (err) throw err;
        grades[0].matters.add(matters[1], function (err) {
          if (err) throw err;
          grades[1].matters.add(matters[0], function (err) {
            if (err) throw err;
            grades[1].matters.add(matters[1], function (err) {
              if (err) throw err;
              process.nextTick(cb);
            })
          })
        })
      })
    });
  });
};
