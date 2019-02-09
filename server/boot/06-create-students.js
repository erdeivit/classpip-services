'use strict';

module.exports = function (app, cb) {


  app.models.Student.create([{
    id: 10000,
    username: 'student-1',
    password: 'student-1',
    name: 'Lorena',
    surname: 'Diez',
    email: 'student-1@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6,
    profileImage: 'https://www.sacs.nsw.edu.au/wp-content/uploads/2018/08/SACS-Student-Profile-Bronte_Thumbnail-1000x1000.jpg'
  }, {
    id: 10001,
    username: 'student-2',
    password: 'student-2',
    name: 'Rosario',
    surname: 'Arellano',
    email: 'student-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6,
    profileImage: 'http://www.princeofpeace.qld.edu.au/wp-content/uploads/2016/11/Year12Schwarting-Alexandra.jpg'
  }, {
    id: 10002,
    username: 'student-3',
    password: 'student-3',
    name: 'Gillermo',
    surname: 'Macho',
    email: 'student-3@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqawgXiIk8xORYRUrOT-JicJfSGWC6aqYiCi2KYA1iAj331vmZ'
  }, {
    id: 10004,
    username: 'student-4',
    password: 'student-4',
    name: 'Mariano',
    surname: 'Morales',
    email: 'student-4@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7,
    profileImage: 'https://www.sacs.nsw.edu.au/wp-content/uploads/2018/06/Mackenzie-Callan-2.jpg'
  }, {
    id: 10005,
    username: 'student-5',
    password: 'student-5',
    name: 'Julia',
    surname: 'Rojo',
    email: 'student-5@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WnsJ160401uLZCyO2-0lK3VDURpG4sQdUZAiKwPqetRUj_a6'
  }, {
    id: 10006,
    username: 'student-6',
    password: 'student-6',
    name: 'Juan',
    surname: 'Alfonso',
    email: 'student-6@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 7,
    profileImage: 'http://1.bp.blogspot.com/-KyWE2iOAR2g/Uke8IJA9HqI/AAAAAAAAAWc/_uRZI1_ahZM/s320/DSCF5340.JPG'
  }, {
    id: 10007,
    username: 'student-7',
    password: 'student-7',
    name: 'Eva',
    surname: 'Marchena',
    email: 'student-7@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 6,
    profileImage: 'https://www.meteored.mx/css/images/new/redactor/martha-llanos.jpg'
  }, {
    id: 10008,
    username: 'student-8',
    password: 'student-8',
    name: 'Paco',
    surname: 'Porras',
    email: 'student-8@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 4,
    profileImage: 'https://i1.rgstatic.net/ii/profile.image/555525693349888-1509459054332_Q512/Sebastian_Llanos2.jpg'
  }, {
    id: 10009,
    username: 'student-9',
    password: 'student-9',
    name: 'Pedro',
    surname: 'Medario',
    email: 'student-9@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 3,
    profileImage: 'https://pbs.twimg.com/profile_images/865029967792529408/gzNyYn0v_400x400.jpg'
  }], function (err, students) {
    if (err) throw err;

    app.models.Badge.create([{
      id: 1,
      name: 'badge 1',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Favorite_128x128.png',
      value: 10

    }, {
      id: 2,
      name: 'badge 2',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Misterwong_128x128.png',
      value: 20
    }], function (err, badges) {
      if (err) throw err;

      // Assign badges to students
      students[0].badges.add(badges[0], function (err) {
        if (err) throw err;
        students[0].badges.add(badges[1], function (err) {
          if (err) throw err;
          students[1].badges.add(badges[0], function (err) {
            if (err) throw err;
            students[2].badges.add(badges[1], function (err) {
              if (err) throw err;

              app.models.Group.create([{
                id: 1,
                name: 'Group 1',
                teacherId: 1000,
                gradeId: 1,
                matterId: 1,
                schoolId: 1
              }, {
                id: 2,
                name: 'Group 2',
                teacherId: 1000,
                gradeId: 1,
                matterId: 2,
                schoolId: 1
              }, {
                id: 3,
                name: 'Group 3',
                teacherId: 1000,
                gradeId: 2,
                matterId: 1,
                schoolId: 1
              }, {
                id: 4,
                name: 'Group 4',
                teacherId: 1001,
                gradeId: 2,
                matterId: 2,
                schoolId: 1
              }], function (err, groups) {

                groups[0].students.add(students[0], function (err) {
                  if (err) throw err;
                  groups[0].students.add(students[1], function (err) {
                    if (err) throw err;
                    groups[0].students.add(students[2], function (err) {
                      if (err) throw err;
                      groups[0].students.add(students[3], function (err) {
                        if (err) throw err;
                        groups[0].students.add(students[4], function (err) {
                          if (err) throw err;
                          groups[0].students.add(students[5], function (err) {
                            if (err) throw err;
                            groups[0].students.add(students[6], function (err) {
                              if (err) throw err;
                              groups[0].students.add(students[7], function (err) {
                                if (err) throw err;
                                groups[1].students.add(students[2], function (err) {
                                  if (err) throw err;
                                  groups[1].students.add(students[3], function (err) {
                                    if (err) throw err;
                                    groups[1].students.add(students[4], function (err) {
                                      if (err) throw err;
                                      groups[1].students.add(students[5], function (err) {
                                        if (err) throw err;
                                        groups[1].students.add(students[6], function (err) {
                                          if (err) throw err;
                                          groups[2].students.add(students[3], function (err) {
                                            if (err) throw err;
                                            groups[3].students.add(students[1], function (err) {
                                              if (err) throw err;
                                              groups[3].students.add(students[2], function (err) {
                                                if (err) throw err;
                                                groups[3].students.add(students[3], function (err) {
                                                  if (err) throw err;
                                                  process.nextTick(cb);
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            });
          })
        })
      })
    })
  });
};
