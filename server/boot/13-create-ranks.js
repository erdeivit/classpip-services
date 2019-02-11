'use strict';

module.exports = function (app, cb) {

  app.models.Range.create([{
    id: 1,
    nombreRango: 'bronce',
    puntosRango: 0,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--iO8J-QJz--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505342481/production/designs/1893128_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 2,
    nombreRango: 'plata',
    puntosRango: 10,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--6f_byGsn--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1512766630/production/designs/2155508_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 3,
    nombreRango: 'oro',
    puntosRango: 25,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--4iFUMYi0--/t_Preview/b_rgb:feffff,c_limit,f_jpg,h_630,q_90,w_630/v1505342905/production/designs/1893142_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 4,
    nombreRango: 'platino',
    puntosRango: 50,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--qoPcj8N1--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505343080/production/designs/1893146_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 5,
    nombreRango: 'diamante',
    puntosRango: 75,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--72mUhG01--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505343220/production/designs/1893157_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 6,
    nombreRango: 'maestro',
    puntosRango: 100,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--RfTXQNor--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505343420/production/designs/1893161_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }, {
    id: 7,
    nombreRango: 'gran maestro',
    puntosRango: 150,
    imageRangoLink: 'https://res.cloudinary.com/teepublic/image/private/s--em7i6_OL--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1505343573/production/designs/1893165_1.jpg',
    altImageRangoLink: '',
    schoolId: 1
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
