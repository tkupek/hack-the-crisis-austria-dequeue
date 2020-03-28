const T = require('../util/translationManager');
const ResponseBuilder = require('../util/responseBuilder');

const handler = {
    registerHandler: function(intentMap) {
        intentMap.set('FAQ Risk Areas', handler.dangerZone);
        intentMap.set('FAQ Pregnant', handler.pregnant);
        intentMap.set('FAQ Test Animals', handler.testAnimals);
        intentMap.set('FAQ Infected Animals', handler.infectedAnimals);
        intentMap.set('FAQ Intro', handler.intro);
        intentMap.set('FAQ Close Contact', handler.closeContact);
        intentMap.set('FAQ Food', handler.food);
        intentMap.set('FAQ Risk Group', handler.riskgroup);
        intentMap.set('FAQ Activities', handler.activity);
        intentMap.set('FAQ Corona Test', handler.coronaTest);
        intentMap.set('FAQ Corona Test No Symptoms', handler.coronaTestNoSymptoms);
        intentMap.set('FAQ Corona Test Cost', handler.coronaTestCosts);
        intentMap.set('FAQ Treatment', handler.treatment);
        intentMap.set('FAQ Events', handler.events);
        intentMap.set('FAQ Employment Law', handler.employment);
        intentMap.set('FAQ Regulations', handler.regulations);
        intentMap.set('FAQ Border Control', handler.border);
        intentMap.set('FAQ Masks', handler.masks);
        intentMap.set('Quarantine Intent', handler.quarantine);
        intentMap.set('Connect Hotline', handler.connectHotline);
        return intentMap;
    },
    dangerZone: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_DANGER_ZONE') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    pregnant: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_PREGNANT') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    testAnimals: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_TEST_ANIMALS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    infectedAnimals: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_INFECTED_ANIMALS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    closeContact: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_CLOSE_CONTACT') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    food: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_FOOD') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    riskgroup: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_RISKGROUP') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    activity: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_ACTIVITY') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    coronaTest: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_CORONA_TEST') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    coronaTestNoSymptoms: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_CORONA_TEST_NO_S') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    coronaTestCosts: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_CORONA_TEST_COSTS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    employment: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_EMPLOYMENT') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    treatment: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_TREATMENT') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    events: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_EVENTS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    regulations: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_REGULATIONS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    masks: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_MASKS') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    border: function(agent) {
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'FAQ_BORDER') + ' ' + T.getMessage(agent, 'MORE_QUESTIONS')));
    },
    quarantine: function(agent) {
        ResponseBuilder.default(agent, 'QUARANTINE');
    },
    intro: function(agent) {
        ResponseBuilder.default(agent, 'FAQ_INTRO');
    },
    connectHotline: function (agent) {
        ResponseBuilder.default(agent, 'CONNECT_HOTLINE');
    }
};

module.exports = handler;