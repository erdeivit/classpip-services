'use strict';

module.exports = function (app, cb) {

  app.models.Point.create([
    {
      name: 'Questionario',
      image: 'https://image.flaticon.com/icons/svg/393/393573.svg',
      value: '1',
      id: 100001,
      schoolId: 1,
      teacherId: 1000
    },{
    id: 100002,
    name: 'Puntualidad',
    image: 'data:image/jpeg;base64,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',
	value: '1',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100003,
    name: 'Ejercicios',
    image: 'data:image/jpeg;base64,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',
	value: '1',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100004,
    name: 'Ayuda a Compañero',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDeq_IeUe18aXfQz73xAs7StF8oyti7XXVDeHgMWSI0ORpnZ3bA',
	value: '2',
    schoolId: 1,
    teacherId: 1001
  },
   {
	id: 100005,
    name: 'Progreso',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaPsqATIIHbo2DA_glJU_oz6t0LYbS1sNLr4aOV8v6hLlJCoi6w',
	value: '2',
    schoolId: 2,
    teacherId: 1003
  },{
    name: 'Retraso',
    image: 'https://previews.123rf.com/images/alexmillos/alexmillos1203/alexmillos120300047/12950777-cuadro-de-retraso-en-la-entrega-y-el-dise-o-de-la-ilustraci-n-reloj-en-blanco-Foto-de-archivo.jpg',
    value: '-2',
    id: 100006,
    schoolId: 1,
    teacherId: 1000
}
], function (err) {
    if (err) throw err;

	app.models.PointRelation.create([{
		id: 1,
		value: '10',
		pointId: 100001,
		groupId: 1,
		studentId: 10001,
		schoolId: 1
	  }, {
		id: 2,
		value: '20',
		pointId: 100001,
		groupId: 1,
		studentId: 10001,
		schoolId: 1
	  }, {
		id: 3,
		value: '15',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 4,
		value: '50',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 5,
		value: '30',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 6,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 7,
		value: '50',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 8,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 9,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 10,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10002,
		schoolId: 1
	  }, {
		id: 11,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 12,
		value: '5',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 13,
		value: '6',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 14,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 15,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 16,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 17,
		value: '1',
		pointId: 100005,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 18,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 19,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 20,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 21,
		value: '1',
		pointId: 100004,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 22,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 23,
		value: '1',
		pointId: 100001,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 24,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 25,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 26,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 27,
		value: '1',
		pointId: 100005,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  }, {
		id: 28,
		value: '1',
		pointId: 100000,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 29,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 30,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  },{
		id: 31,
		value: '1',
		pointId: 100003,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 32,
		value: '1',
		pointId: 100003,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 33,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 34,
		value: '1',
		pointId: 100001,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 35,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 36,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 37,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  },{
		id: 38,
		value: '1',
		pointId: 100005,
		groupId: 1,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 39,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10008,
		schoolId: 1
	  }], function (err) {

    process.nextTick(cb);
	});
  });
};

