const T = require('../util/translationManager');
const AnalyticsTracker = require('../util/analyticsTracker');
const HelperFunctions = require('../util/helperFunctions');
const Config = require('../config/config');
const ResponseBuilder = require('../util/responseBuilder');

const handler = {
    registerHandler: function (intentMap) {
        intentMap.set('Help Intent', handler.help);
        intentMap.set('Default Welcome Intent', handler.welcome);
        intentMap.set('Default Fallback Intent', handler.fallback);
        intentMap.set('Test Intent', handler.test);
        intentMap.set('Unknown Intent', handler.unknown);
        intentMap.set('Yes Intent', handler.yes);
        intentMap.set('No Intent', handler.no);
        return intentMap;
    },
    welcome: function (agent) {
        HelperFunctions.generateUserId(agent);
        ResponseBuilder.default(agent, 'WELCOME');
    },
    fallback: function (agent) {
        ResponseBuilder.default(agent, 'FALLBACK');
    },
    help: function (agent) {
        ResponseBuilder.default(agent, 'HELP');
    },
    test: function (agent) {
        HelperFunctions.setState(agent, 'TEST_0');
        ResponseBuilder.defaultText(agent, (T.getMessage(agent, 'TEST_INTRO') + ' ' + T.getMessage(agent, 'TEST_0')));
    },
    yes: function (agent) {
        let state = HelperFunctions.getState(agent);
        if (!state) {
            handler.fallback(agent);
            return
        }
        
        handler.updateHealthTest(agent, state, 2);
    },
    no: function (agent) {
        let state = HelperFunctions.getState(agent);
        if (!state) {
            handler.fallback(agent);
            return
        }
        
        handler.updateHealthTest(agent, state, 0);
    },
    unknown: function (agent) {
        let state = HelperFunctions.getState(agent);
        if (!state || Config.allowUnknownAnswer.includes(state)) {
            ResponseBuilder.default(agent, 'FALLBACK_UNKNOWN');
            return
        }
        
        handler.updateHealthTest(agent, state, 1);
    },  
    updateHealthTest: function (agent, state, userStatus) {
        let nextState = HelperFunctions.getNextState(state)
        HelperFunctions.setState(agent, nextState);
        HelperFunctions.updateHealthStatus(agent, state, userStatus);

        if (state === Config.testQuestions[Config.testQuestions.length - 1]) {
            let result = HelperFunctions.getHealthStatus(agent);
            ResponseBuilder.healthTestResponse(agent, result, state, userStatus);
        } else {
            ResponseBuilder.healthTestResponse(agent, nextState, state, userStatus);
        }
    }
};

module.exports = handler;