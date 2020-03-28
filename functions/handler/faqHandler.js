const T = require('../util/translationManager');
const ResponseBuilder = require('../util/responseBuilder');
const HelperFunctions = require('../util/helperFunctions');

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
    getFAQExtension: function(agent, text) {
        let state = HelperFunctions.getState(agent);
        if (state) {
            text += ' ' + T.getMessage(agent, state);
        } else {
            text += ' ' + T.getMessage(agent, 'MORE_QUESTIONS')
        }
        return text;
    },
    dangerZone: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_DANGER_ZONE'));
        ResponseBuilder.defaultText(agent, text);
    },
    pregnant: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_PREGNANT'));
        ResponseBuilder.defaultText(agent, text);
    },
    testAnimals: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_TEST_ANIMALS'));
        ResponseBuilder.defaultText(agent, text);
    },
    infectedAnimals: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_INFECTED_ANIMALS'));
        ResponseBuilder.defaultText(agent, text);
    },
    closeContact: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_CLOSE_CONTACT'));
        ResponseBuilder.defaultText(agent, text);
    },
    food: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_FOOD'));
        ResponseBuilder.defaultText(agent, text);
    },
    riskgroup: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_RISKGROUP'));
        ResponseBuilder.defaultText(agent, text);
    },
    activity: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_ACTIVITY'));
        ResponseBuilder.defaultText(agent, text);
    },
    coronaTest: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_CORONA_TEST'));
        ResponseBuilder.defaultText(agent, text);
    },
    coronaTestNoSymptoms: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_CORONA_TEST_NO_S'));
        ResponseBuilder.defaultText(agent, text);
    },
    coronaTestCosts: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_CORONA_TEST_COSTS'));
        ResponseBuilder.defaultText(agent, text);
    },
    employment: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_EMPLOYMENT'));
        ResponseBuilder.defaultText(agent, text);
    },
    treatment: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_TREATMENT'));
        ResponseBuilder.defaultText(agent, text);
    },
    events: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_EVENTS'));
        ResponseBuilder.defaultText(agent, text);
    },
    regulations: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_REGULATIONS'));
        ResponseBuilder.defaultText(agent, text);
    },
    masks: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_MASKS'));
        ResponseBuilder.defaultText(agent, text);
    },
    border: function(agent) {
        let text = handler.getFAQExtension(agent, T.getMessage(agent, 'FAQ_BORDER'));
        ResponseBuilder.defaultText(agent, text);
    },
    quarantine: function(agent) {
        ResponseBuilder.default(agent, 'QUARANTINE');
    },
    intro: function(agent) {
        ResponseBuilder.default(agent, 'FAQ_INTRO');
    },
    connectHotline: function (agent) {
        // TODO here comes the redirect to the hotline
        ResponseBuilder.default(agent, 'CONNECT_HOTLINE');
    }
};

module.exports = handler;