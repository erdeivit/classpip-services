'use strict';

module.exports = function (app, cb) {

  app.models.Question.create([{
    id: 1,
    name: 'Respecto al ensanchamiento de UMTS, es cierto que:',
    type: 'test',
    time: 15
  }, {
    id: 2,
    name: 'Sea un sistema CDMA a 3.84 Mcps que ofrece un servicio de voz de 12.2 Kbps que requiere una Eb/No de 6 dB. Considerando una relación inter/intracell (f=0.6) y factor de actividad unitario. Podemos afirmar que:',
    type: 'test',
    time: 15
  }, {
    id: 3,
    name: 'La respiración celular o cell breathing es:',
    type: 'test',
    time: 15
  }, {
    id: 4,
    name: 'En una herramienta de planificación, representamos todos los pixeles con una atenuación menor o igual a la atenuación máxima (considerando un MF para p = 95 %). Podemos afirmar que:',
    type: 'test',
    time: 15
  }, {
    id: 5,
    name: 'Un operador UMTS dispone de dos radiocanales de 5 MHz, BWTOTAL = 5 MHz, BWrch = 200 KHz, trama = 10 time slots UL, 1 time slot BC, CIRumbral = 9 dB y el modelo de Tierra Plana. Encuentra el número de usuarios.',
    type: 'textArea',
    time: 20
  }, {
    id: 6,
    name: '¿Cuál es la cobertura perimetral p de un sistema con MF = 9 dB y shadowing lognormal σ = 5 dB? (valores KCp)',
    type: 'textArea',
    time: 20
      }, {
    id: 7,
    name: 'Explica todo lo que sepas en relación a la señal OFDM.',
    type: 'image',
    image: 'http://happy.emu.id.au/lab/rep/rep/9804/Image204.gif',
    time: 20
  }, {
    id: 8,
    name: 'Razonar cual es SP (Scattered Pilots) y cual es TPS Carriers.',
    type: 'image',
    image: 'http://www.iesromerovargas.es/recursos/elec/sol/imagenes/cofdm7.gif',
    time: 20
  }], function (err, questions) {
    if (err) throw err;

    app.models.Answer.create([{
      id: 1,
      name: 'Los códigos de aleatorización o scrambling se utilizan para multiplexar el downlink a los diferentes sectores.'
    }, {
      id: 2,
      name: 'Los códigos de aleatorización o scrambling se utilizan para multiplexar en el uplink a los diferentes sectores.'
    }, {
      id: 3,
      name: 'Los códigos de canalización separan a los usuarios de un sector uplink y downlink.'
    }, {
      id: 4,
      name: 'Todas son falsas.'
    }, {
      id: 5,
      name: 'Capacidad polar = 50 usuarios; Capacidad (con η = 0.5) = 10 usuarios'
    }, {
      id: 6,
      name: 'Capacidad polar = 130 usuarios; Capacidad (con η = 0.5) = 65 usuarios'
    }, {
      id: 7,
      name: 'Capacidad polar = faltan datos; Capacidad (con η = 0.5) = 25 usuarios'
    }, {
      id: 8,
      name: 'Capacidad polar = 50 usuarios; Capacidad (con η = 0.5) = 25 usuarios'
    }, {
      id: 9,
      name: 'Una variación del radio efectivo de celda por las variaciones de carga.'
    }, {
      id: 10,
      name: 'Un incremento del radio efectivo de celda debido a los incrementos de carga.'
    }, {
      id: 11,
      name: 'Una variación en el radio efectivo de la celda debido a una ganancia por el uso de soft handover.'
    }, {
      id: 12,
      name: 'Todas son falsas.'
      }, {
      id: 13,
      name: 'Todos los pixeles pintados tienen una probabilidad de cobertura ≥ 95 %'
      }, {
      id: 14,
      name: 'Todos los pixeles pintados tienen una probabilidad de cobertura = 95 %'
      }, {
      id: 15,
      name: 'Sólo los pixeles junto a la estación base tienen una probabilidad de cobertura = 95 %'
      }, {
      id: 16,
      name: 'Todas son falsas.'
    }], function (err, answers) {
      if (err) throw err;

      // Assign answers to questions
      questions[0].answers.add(answers[0], function (err) {
        if (err) throw err;
        questions[0].answers.add(answers[1], function (err) {
          if (err) throw err;
          questions[0].answers.add(answers[2], function (err) {
            if (err) throw err;
            questions[0].answers.add(answers[3], function (err) {
              if (err) throw err;
                questions[1].answers.add(answers[4], function (err) {
                  if (err) throw err;
                  questions[1].answers.add(answers[5], function (err) {
                    if (err) throw err;
                    questions[1].answers.add(answers[6], function (err) {
                      if (err) throw err;
                      questions[1].answers.add(answers[7], function (err) {
                        if (err) throw err;
                            questions[2].answers.add(answers[8], function (err) {
                              if (err) throw err;
                              questions[2].answers.add(answers[9], function (err) {
                                if (err) throw err;
                                questions[2].answers.add(answers[10], function (err) {
                                  if (err) throw err;
                                  questions[2].answers.add(answers[11], function (err) {
                                    if (err) throw err;
                                        questions[3].answers.add(answers[12], function (err) {
                                          if (err) throw err;
                                          questions[3].answers.add(answers[13], function (err) {
                                            if (err) throw err;
                                            questions[3].answers.add(answers[14], function (err) {
                                              if (err) throw err;
                                              questions[3].answers.add(answers[15], function (err) {
                                                if (err) throw err;

                                                app.models.CorrectAnswer.create([{
                                                  id: 1,
                                                  name: 'Los códigos de aleatorización o scrambling se utilizan para multiplexar el downlink a los diferentes sectores.'
                                                }, {
                                                  id: 2,
                                                  name: 'Capacidad polar = 50 usuarios; Capacidad (con η = 0.5) = 25 usuarios'
                                                }, {
                                                  id: 3,
                                                  name: 'Una variación del radio efectivo de celda por las variaciones de carga.'
                                                }, {
                                                  id: 4,
                                                  name: 'Todas son falsas.'
                                                }], function (err, correctAnswers) {
                                                  if (err) throw err;

                                                // Assign correct answers to questions
                                                questions[0].correctAnswers.add(correctAnswers[0], function (err) {
                                                  if (err) throw err;
                                                  questions[1].correctAnswers.add(correctAnswers[1], function (err) {
                                                    if (err) throw err;
                                                    questions[2].correctAnswers.add(correctAnswers[2], function (err) {
                                                      if (err) throw err;
                                                      questions[3].correctAnswers.add(correctAnswers[3], function (err) {
                                                        if (err) throw err;

                                                        app.models.Questionnaire.create([{
                                                          id: 1,
                                                          name: 'Cuestionario LCSF 1',
                                                          date: '19/11/2017',
                                                          points: [20,16,14,12,10,8,0],
                                                          badges: ["100003","100001","100002"],
                                                          groupid: 1,
                                                          active: true,
                                                          packCards: [1,5,4,3],

                                                          teacherId: 1000
                                                        }, {
                                                          id: 2,
                                                          name: 'Cuestionario LCSF 2',
                                                          date: '19/11/2017',
                                                          points: [20,16,14,12,10,8,0],
                                                          badges: ["100003","100001","100002"],
                                                          groupid: 2,
                                                          active: false,
                                                          packCards: [2,3,2,1],
                                                          teacherId: 1000
                                                        }], function (err, questionnaires) {

                                                          // Assign questions to questionnaires
                                                          questionnaires[0].questions.add(questions[0], function (err) {
                                                            if (err) throw err;
                                                              questionnaires[0].questions.add(questions[1], function (err) {
                                                                if (err) throw err;
                                                                  questionnaires[0].questions.add(questions[2], function (err) {
                                                                    if (err) throw err;
                                                                      questionnaires[0].questions.add(questions[3], function (err) {
                                                                        if (err) throw err;
                                                                        questionnaires[1].questions.add(questions[4], function (err) {
                                                                          if (err) throw err;
                                                                            questionnaires[1].questions.add(questions[5], function (err) {
                                                                              if (err) throw err;
                                                                                questionnaires[1].questions.add(questions[6], function (err) {
                                                                                  if (err) throw err;
                                                                                    questionnaires[1].questions.add(questions[7], function (err) {
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
                                                });
                                              })
                                            })
                                          })
                                        })
                                      });
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
};


