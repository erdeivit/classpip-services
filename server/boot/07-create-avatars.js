'use strict';

module.exports = function (app, cb) {

  app.models.Avatar.create([{
    id: 1,
    name: 'male',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-128.png'
  }, {
    id: 2,
    name: 'female',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-128.png'
  }, {
    id: 3,
    name: 'malecostume',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-256.png'
  }, {
    id: 4,
    name: 'supportmale',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-128.png'
  }, {
    id: 5,
    name: 'supportfemale',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportfemale-2-128.png'
  }, {
    id: 6,
    name: 'girl',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/girl-2-128.png'
  }, {
    id: 7,
    name: 'boy',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-128.png'
  }, {
    id: 8,
    name: 'maturewoman',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-2-128.png'
  }, {
    id: 9,
    name: 'matureman2',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-2-128.png'
  }, {
    id: 10,
    name: 'matureman1',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-2-128.png'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
