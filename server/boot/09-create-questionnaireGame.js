'use strict';

module.exports = function (app, cb) {

  app.models.QuestionnaireGame.create([{
      id: 1,
      name: 'El juego de la semana. "QuizPip"',
      start_date: 1559243180685,
      finish_date: 1559254180685,
      question_time: '15',
      groupId: 1,
      teacherId: 1000,
      gameMode: 'QuizPip',
      teamMode: 0,
      questionnaireId: 1
    }, {
      id: 2,
      name: 'El juego de las restas. "1by1"',
      start_date: 1559154880685,
      finish_date: 1559253180685,
      question_time: '10',
      groupId: 1,
      teacherId: 1000,
      gameMode: '1by1',
      teamMode: 1,
      questionnaireId: 2
    },
    {
      id: 3,
      name: 'Potenciame. "1by" all poss',
      start_date: 1559153180685,
      finish_date: 1599235691275,
      questionnaire_time: '100',
      groupId: 1,
      teacherId: 1000,
      gameMode: '1by1',
      teamMode: 0,
      questionnaireId: 3
    },
    {
      id: 4,
      name: 'Capitales de provincias de España',
      start_date: 1559254980685,
      finish_date: 1560254180685,
      groupId: 1,
      teacherId: 1000,
      gameMode: 'FlipCardsPip',
      teamMode: 0,
      questionnaireId: 4
    }
  ], function (err, questionnaireGames) {
    if (err) throw err;

    app.models.Questionnaire.create([{
      id: 1,
      name: 'Mates primer trimestre.',
      description: 'Vamos a repasar todo lo visto en la semana',
      image: 'http://www.mondalua.com/wp-content/uploads/2013/09/Mates-500x281.jpg',
      questionId: [1, 2, 3, 4, 5],
      teacherId: 1000
    }, {
      id: 2,
      name: 'Aprendemos a restar.',
      description: 'Vamos a practicar restas',
      image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
      questionId: [3, 4, 5],
      teacherId: 1000
    }, {
      id: 3,
      name: 'Potencias.',
      description: 'Vamos a practicar potencias',
      image: 'https://cdnblog-199133.c.cdn77.org/blog/wp-content/uploads/potenicas.png',
      questionId: [6, 7, 8],
      teacherId: 1000
    }, {
      id: 4,
      name: 'Aprender geografia.',
      description: 'Vamos a repasar las capitales de provincia de españa',
      image: 'https://i.pinimg.com/originals/69/43/60/6943605d3da66d3667bc2f3ae6167a11.gif',
      questionId: [9, 10, 11],
      teacherId: 1000
    }], function (err, questionnaires) {
      if (err) throw err;
      // Assign questionnaires to the questionnairesGame
      questionnaireGames[0].questionnaire.add(questionnaires[0], function (err) {
        if (err) throw err;
        questionnaireGames[1].questionnaire.add(questionnaires[1], function (err) {
          if (err) throw err;
          questionnaireGames[2].questionnaire.add(questionnaires[2], function (err) {
            if (err) throw err;
            questionnaireGames[3].questionnaire.add(questionnaires[3], function (err) {
              if (err) throw err;
              app.models.Question.create([{
                  id: 1,
                  statement: '2+2 = ?',
                  answer1: "2",
                  answer2: "4",
                  answer3: "6",
                  answer4: "8",
                  correctanswer: "4",
                  image: 'https://respuestas.tips/wp-content/uploads/2013/07/suma.jpg',
                  difficulty: 'easy',
                  category: 'operations',
                  explanation: 'La suma de 2+2 siempre da 4.',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 2,
                  statement: '9+4 = ?',
                  answer1: "11",
                  answer2: "13",
                  answer3: "15",
                  answer4: "12",
                  correctanswer: "13",
                  image: 'https://matematicasmodernas.com/wp-content/uploads/2014/07/suma-de-vectores-por-componentes.jpg',
                  difficulty: 'medium',
                  category: 'operations',
                  explanation: 'La suma de 9+4 siempre da 13.',
                  teacherId: 1000,
                  type: "classic"

                },
                {
                  id: 3,
                  statement: '10-6 = ?',
                  answer1: "7",
                  answer2: "0",
                  answer3: "16",
                  answer4: "4",
                  correctanswer: "4",
                  image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
                  difficulty: 'hard',
                  category: 'operations',
                  explanation: 'La resta de 10-6 siempre da 4.',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 4,
                  statement: '100-39 = ?',
                  answer1: "61",
                  answer2: "50",
                  answer3: "139",
                  answer4: "60",
                  correctanswer: "61",
                  image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
                  difficulty: 'hard',
                  category: 'operations',
                  explanation: 'La resta de 100-39 siempre da 61.',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 5,
                  statement: '20-11= ?',
                  answer1: "7",
                  answer2: "8",
                  answer3: "9",
                  answer4: "10",
                  correctanswer: "9",
                  image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
                  difficulty: 'medium',
                  category: 'operations',
                  explanation: 'La resta de 20-11 siempre da 9.',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 6,
                  statement: 'sqrt(4)',
                  answer1: "+2",
                  answer2: "-2",
                  answer3: "+4",
                  answer4: "-4",
                  correctanswer: "+2,-2",
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Racine_carr%C3%A9e_bleue.svg/220px-Racine_carr%C3%A9e_bleue.svg.png',
                  difficulty: 'hard',
                  category: 'power',
                  explanation: 'La raiz siempre nos da dos valores. +-2',
                  teacherId: 1000,
                  type: "multiAnswer"
                },
                {
                  id: 7,
                  statement: 'Cuanto es 2^3',
                  answer1: "8",
                  correctanswer: "8",
                  image: 'https://static.escolakids.uol.com.br/conteudo_legenda/81f0bcf8fd3124a9d0eb33048107bc8c.jpg',
                  difficulty: 'hard',
                  category: 'power',
                  explanation: '2x2x2 = 8',
                  teacherId: 1000,
                  type: "openQuestion"
                },
                {
                  id: 8,
                  statement: 'Cuanto es -3^2',
                  answer1: "9",
                  answer2: "-9",
                  answer3: "6",
                  answer4: "-6",
                  correctanswer: "9",
                  image: 'https://es-static.z-dn.net/files/dbb/0f6b68bdb84c4bbc16cf532d5c19865c.jpg',
                  difficulty: 'hard',
                  category: 'power',
                  explanation: '(-3)*(-3) = 9',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 9,
                  statement: 'Capital de provincia de Cataluña',
                  answer1: "Barcelona",
                  answer2: "Tarragona",
                  answer3: "Lérida",
                  answer4: "Girona",
                  correctanswer: "Barcelona",
                  image: 'http://www.gifex.com/images/500X0/2010-09-16-12148/Las-provincias-de-Cataluna.gif',
                  difficulty: 'easy',
                  category: 'capitales',
                  explanation: 'La capital de Cataluña es Barcelona',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 10,
                  statement: 'Capital de provincia de Extremadura',
                  answer1: "Cáceres",
                  answer2: "Badajoz",
                  answer3: "Mérida",
                  correctanswer: "Mérida",
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Spain_Extremadura_map.png/220px-Spain_Extremadura_map.png',
                  difficulty: 'easy',
                  category: 'capitales',
                  explanation: 'La capital de Extremadura es Mérida',
                  teacherId: 1000,
                  type: "classic"
                },
                {
                  id: 11,
                  statement: 'Provincias de Galicia',
                  answer1: "A Coruña",
                  answer2: "Lugo",
                  answer3: "Ourense",
                  answer4: "Pontevedra",
                  correctanswer: "A Coruña,Lugo,Ourense,Pontevedra",
                  image: 'https://www.red2000.com/spain/images/m-r-galicia.gif',
                  difficulty: 'easy',
                  category: 'capitales',
                  explanation: 'Las provincias de Galicia són: A Coruña, Lugo, Ourense y Pontevedra',
                  teacherId: 1000,
                  type: "multiAnswer"
                }
              ], function (err, q) {
                if (err) throw err;
                // Assign correct answers to questions
                questionnaires[0].question.add(q[0], function (err) {
                  if (err) throw err;
                  questionnaires[0].question.add(q[1], function (err) {
                    if (err) throw err;
                    questionnaires[0].question.add(q[2], function (err) {
                      if (err) throw err;
                      questionnaires[0].question.add(q[3], function (err) {
                        if (err) throw err;
                        questionnaires[0].question.add(q[4], function (err) {
                          if (err) throw err;
                          questionnaires[1].question.add(q[2], function (err) {
                            if (err) throw err;
                            questionnaires[1].question.add(q[3], function (err) {
                              if (err) throw err;
                              questionnaires[1].question.add(q[4], function (err) {
                                if (err) throw err;
                                questionnaires[2].question.add(q[5], function (err) {
                                  if (err) throw err;
                                  questionnaires[2].question.add(q[6], function (err) {
                                    if (err) throw err;
                                    questionnaires[2].question.add(q[7], function (err) {
                                      if (err) throw err;
                                      questionnaires[3].question.add(q[8], function (err) {
                                        if (err) throw err;
                                        questionnaires[3].question.add(q[9], function (err) {
                                          if (err) throw err;
                                          questionnaires[3].question.add(q[10], function (err) {
                                            if (err) throw err;

                                            process.nextTick(cb);
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};
