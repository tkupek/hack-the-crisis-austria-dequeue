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
        intentMap.set('FAQ Risk Group', handler.food);
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