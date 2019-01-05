'use strict';

module.exports = function (app, cb) {

  app.models.Teacher.create([{
    id: 1000,
    username: 'teacher-1',
    password: 'teacher-1',
    name: 'Joan',
    surname: 'Felix',
    profileImage: 'https://img3.stockfresh.com/files/t/tiero/m/32/435430_stock-photo-confident-teacher.jpg',
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
    profileImage: 'https://media.istockphoto.com/photos/school-principal-on-campus-picture-id155599615?k=6&m=155599615&s=612x612&w=0&h=oU7BvRLRboSObr-fSJ32L-Mn1exseWbkKcEdglhNkUM=',
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
    profileImage: 'https://media.istockphoto.com/photos/smiling-teacher-kneeling-beside-elementary-school-pupils-desk-picture-id544655590?k=6&m=544655590&s=612x612&w=0&h=iCk67ZmWgXMfjoooplKif5sqrUILBUHu9dexHxl89Mo=',
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
    profileImage: 'http://openmindscdc.com/wp-content/uploads/2015/04/teacher-for-k-post1.jpg',
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
    profileImage: 'https://www.stockvault.net/data/2012/03/06/129756/thumb16.jpg',
    email: 'teacher-5@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 2
  }, {
    id: 1005,
    username: 'teacher-6',
    password: 'teacher-6',
    name: 'Ramona',
    surname: 'Santolaria',
    profileImage: 'https://media.istockphoto.com/photos/middle-aged-black-female-teacher-smiling-in-school-corridor-picture-id826213524?k=6&m=826213524&s=612x612&w=0&h=rq5d9hC3i1_aZ746raPv4Nr-h-RZAGyy5x_qTk-kE1I=',
    email: 'teacher-6@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 2
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
