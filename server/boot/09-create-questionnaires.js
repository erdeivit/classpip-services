'use strict';

module.exports = function (app, cb) {

  app.models.QuestionnaireGame.create([{
    id: 1,
    name: 'El juego de la semana',
    start_date: '2019-03-02T13:10:27.162Z',
    finish_date: '2019-04-02T13:10:27.162Z',
    question_time: '15',
    questionnaire_time: '150',
    studentId: [100000, 100001],
    teacherId: 1000
  }, {
    id: 2,
    name: 'El juego de las restas',
    start_date: '2019-03-02T13:10:27.162Z',
    finish_date: '2019-05-02T13:10:27.162Z',
    question_time: '10',
    questionnaire_time: '100',
    studentId: [100000, 100001],
    teacherId: 1000

  }], function (err, questionnaireGames) {
    if (err) throw err;

    app.models.Questionnaire.create([{
      id: 1,
      name: 'Mates primer trimestre.',
      description: 'Vamos a repasar todo lo visto en la semana',
      image: 'http://www.mondalua.com/wp-content/uploads/2013/09/Mates-500x281.jpg',
      questionId: [1, 2, 3, 4, 5],
      questionnaireGameId: 1,
      teacherId: 1000
    }, {
      id: 2,
      name: 'Aprendemos a restar.',
      description: 'Vamos a practicar restas',
      image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
      questionId: [3, 4, 5],
      teacherId: 1000
    }], function (err, questionnaires) {
      if (err) throw err;
      // Assign questionnaires to the questionnairesGame
      questionnaireGames[0].questionnaire.add(questionnaires[0], function (err) {
        if (err) throw err;
        questionnaireGames[1].questionnaire.add(questionnaires[1], function (err) {
          if (err) throw err;
          app.models.Question.create([{
              id: 1,
              statement: '2+2 = ?',
              answer1: "2",
              answer2: "4",
              answer3: "6",
              answer4: "8",
              correctanswer: "2",
              image: 'https://respuestas.tips/wp-content/uploads/2013/07/suma.jpg',
              difficulty: 'easy',
              category: 'operations',
              explanation: 'La suma de 2+2 siempre da 4.',
              questionnaireId: 1,
              teacherId: 1000
            },
            {
              id: 2,
              statement: '9+4 = ?',
              answer1: "11",
              answer2: "13",
              answer3: "15",
              answer4: "12",
              correctanswer: "2",
              image: 'https://matematicasmodernas.com/wp-content/uploads/2014/07/suma-de-vectores-por-componentes.jpg',
              difficulty: 'medium',
              category: 'operations',
              explanation: 'La suma de 9+4 siempre da 13.',
              questionnaireId: 1,
              teacherId: 1000
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
              questionnaireId: [1, 2],
              teacherId: 1000
            },
            {
              id: 4,
              statement: '100-39 = ?',
              answer1: "61",
              answer2: "50",
              answer3: "139",
              answer4: "60",
              correctanswer: "1",
              image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
              difficulty: 'hard',
              category: 'operations',
              explanation: 'La resta de 100-39 siempre da 61.',
              questionnaireId: [1, 2],
              teacherId: 1000
            },
            {
              id: 5,
              statement: '20-11= ?',
              answer1: "7",
              answer2: "8",
              answer3: "9",
              answer4: "10",
              correctanswer: "3",
              image: 'https://matematicasmodernas.com/wp-content/uploads/2014/09/Resta-de-vectores.jpg',
              difficulty: 'medium',
              category: 'operations',
              explanation: 'La resta de 20-11 siempre da 9.',
              questionnaireId: [1, 2],
              teacherId: 1000
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
};
