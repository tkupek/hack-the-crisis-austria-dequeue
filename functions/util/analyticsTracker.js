const ua = require('universal-analytics');
const Config = require('../config/config');

let visitor;

const AnalyticsTracker = {
    initVisitor: function (agent) {
        if (visitor)
            return true;

        let userId = agent.context.get('userId');
        console.log(userId);
        let id = userId.parameters['id'];
        visitor = ua(Config.analyticsTrackingId, {
            uid: userId
        });
        console.log("init visitor" + id);
        return true;
    },
    trackIntent: function (agent) {
        if (!AnalyticsTracker.initVisitor(agent)) {
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }

        let intent;
        agent.intent && (intent = agent.intent);

        if (!intent) {
            intent = agent.input.raw;
        }

        let param = {
            dp: intent,
            dt: intent
        };

        console.log("track Intent" + intent);
        return new Promise(function (resolve, reject) {
            resolve(visitor.pageview(param).send());
        });
    },
    trackEvent: async function (agent, category, label, value, parameter) {
        if (!AnalyticsTracker.initVisitor(agent)) {
            return new Promise(function (resolve) {
                return resolve();
            });
        }

        let intent;
        agent.intent && (intent = agent.intent);

        if (!intent) {
            intent = agent.input.raw;
        }

        let params = {
            ec: category,
            ea: action,
            el: label,
            ev: value,
            dp: intent
        };

        console.log("track Event" + JSON.stringify(params));
        return new Promise(function (resolve, reject) {
            return resolve(visitor.event(params).send());
        });
    }
};

module.exports = AnalyticsTracker;