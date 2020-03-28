const ua = require('universal-analytics');
const Config = require('../config/config');
const HelperFunctions = require('../util/helperFunctions');
const {
    v1: uuidv1
} = require('uuid');

let visitor;

const AnalyticsTracker = {
    initVisitor: function (agent) {
        if (visitor)
            return true;

        let context = agent.context.get('userId');
        let userId = context ? context.parameters.id : uuidv1();
        visitor = ua(Config.analyticsTrackingId, {
            uid: userId
        });
        console.log("init visitor " + userId);
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
    trackEvent: async function (agent, category, action, label) {
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
            ec: "Event Category",
            ea: "Event Action",
            el: "…and a label",
            ev: 42,
            dp: "/contact"
        };

        return new Promise(function (resolve, reject) {
            console.log("track Event" + JSON.stringify(params));
        });
    }
};

module.exports = AnalyticsTracker;