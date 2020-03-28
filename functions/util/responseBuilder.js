const Config = require('../config/config');
const HelperFunctions = require('./helperFunctions');
const AnalyticsTracker = require('./analyticsTracker');
const T = require('./translationManager');

const ResponseBuilder = {
    default: function(agent, messageKey){
        AnalyticsTracker.trackIntent(agent).then(function () {
            agent.add(T.getMessage(agent, messageKey));
        });
    },
    defaultText: function(agent, text){
        text = '<speak>' + text + '</speak>';
        AnalyticsTracker.trackIntent(agent).then(function () {
            agent.add(text);
        });
    },
    healthTestResponse: function(agent, messageKey, state, userInput){
        /*AnalyticsTracker.trackEvent(agent, 'HealthTest', state, userInput).then(function () {
            agent.add(T.getMessage(agent, messageKey));
        });*/ //TODO
        agent.add(T.getMessage(agent, messageKey));
    }
};

module.exports = ResponseBuilder;