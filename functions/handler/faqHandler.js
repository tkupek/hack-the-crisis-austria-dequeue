const T = require('../util/translationManager');

const handler = {
    registerHandler: function(intentMap) {
        intentMap.set('FAQ Risikogebiete', handler.dangerZone);
        intentMap.set('FAQ Schwanger', handler.pregnant);
        intentMap.set('FAQ Tests Tiere', handler.testAnimals);
        intentMap.set('FAQ Erkrankung Tiere', handler.infectedAnimals);
        intentMap.set('Quarantaene', handler.quarantaene);
        intentMap.set('Allgemeine Fragen', handler.general);
        return intentMap;
    },
    dangerZone: function(agent) {
        agent.add(T.getMessage(agent, 'DANGER_ZONE'));
    },
    pregnant: function(agent) {
        agent.add(T.getMessage(agent, 'PREGNANT'));
    },
    testAnimals: function(agent) {
        agent.add(T.getMessage(agent, 'TEST_ANIMALS'));
    },
    infectedAnimals: function(agent) {
        agent.add(T.getMessage(agent, 'INFECTED_ANIMALS'));
    },
    quarantaene: function(agent) {
        agent.add(T.getMessage(agent, 'QUARANTINE'));
    },
    general: function(agent) {
        agent.add(T.getMessage(agent, 'FAQ_INTRO'));
    }
};

module.exports = handler;