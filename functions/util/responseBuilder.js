const Config = require('../config/config');
const HelperFunctions = require('./helperFunctions');
const AnalyticsTracker = require('./analyticsTracker');
const T = require('./translationManager');

const ResponseBuilder = {
    default: function(agent, messageKey){
        AnalyticsTracker.trackIntent(agent);
        agent.add(T.getMessage(agent, messageKey));
    },
    defaultText: function(agent, text){
        text = '<speak>' + text + '</speak>';
        AnalyticsTracker.trackIntent(agent);
        agent.add(text);
    },
    healthTestResponse: function(agent, messageKey, state, userInput){
        let userInputString = Config.userInputMap[userInput];
        AnalyticsTracker.trackEvent(agent, 'HealthTest', state, userInputString);
        agent.add(T.getMessage(agent, messageKey));
    }
};

module.exports = ResponseBuilder;