const T = require('../util/translationManager');

const handler = {
    registerHandler: function(intentMap) {
        intentMap.set('FAQ Risikogebiete', handler.dangerZone);
        intentMap.set('FAQ Schwanger', handler.pregnant);
        intentMap.set('FAQ Tests Tiere', handler.testAnimals);
        intentMap.set('FAQ Erkrankung Tiere', handler.infectedAnimals);
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
    }
};

module.exports = handler;