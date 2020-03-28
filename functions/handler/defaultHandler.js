const T = require('../util/translationManager');
const AnalyticsTracker = require('../util/analyticsTracker');
const {
    v1: uuidv1
} = require('uuid');
const HelperFunctions = require('../util/helperFunctions');

const handler = {
    registerHandler: function (intentMap) {
        intentMap.set('Help Intent', handler.help);
        intentMap.set('Default Welcome Intent', handler.welcome);
        intentMap.set('Default Fallback Intent', handler.fallback);
        intentMap.set('Test Intent', handler.test);
        intentMap.set('Leitstelle', handler.connectHotline);
        intentMap.set('Yes Intent', handler.yes);
        intentMap.set('No Intent', handler.no);
        return intentMap;
    },
    welcome: function (agent) {
        /*if (!agent.context.get('userId')) {
            console.log("generate new uid");
            let userId = uuidv1();
            agent.context.set({
                'name': 'userId',
                'lifespan': 1000,
                'parameters': {
                    'id': userId
                }
            });
        }*/ 
        agent.add(T.getMessage(agent, 'WELCOME'));
    },
    fallback: function (agent) {
        agent.add(T.getMessage(agent, 'FALLBACK'));
    },
    help: function (agent) {
        /*AnalyticsTracker.trackIntent(agent).then(function () {
            agent.add(T.getMessage(agent, 'HELP'));
        });*/
        agent.add(T.getMessage(agent, 'HELP'));
    },
    test: function(agent){
        HelperFunctions.setState(agent, 'TEST_0');
        agent.add(T.getMessage(agent, 'TEST_INTRO') + ' ' + T.getMessage(agent, 'TEST_0'));
    },
    connectHotline: function(agent){
        agent.add(T.getMessage(agent, 'CONNECT_HOTLINE'));
    },
    yes: function(agent) {
        let state = HelperFunctions.getState(agent);
        let nextState = HelperFunctions.getNextState(state)
        HelperFunctions.setState(agent, nextState);

        HelperFunctions.updateHealthStatus(agent, state, true);

        if (!state){
            handler.fallback(agent);
        } else if (state == 'TEST_2')
            if (HelperFunctions.getHealthStatus(agent))
                agent.add(T.getMessage(agent, 'HEALTHY'));  
            else
                agent.add(T.getMessage(agent, 'UNHEALTHY'));    
        else {
            agent.add(T.getMessage(agent, nextState));
        }
    },
    no: function(agent) {
        
    }
};

module.exports = handler;