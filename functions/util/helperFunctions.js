const Config = require('../config/config');
const {
    v1: uuidv1
} = require('uuid');

const HelperFunctions = {

    generateUserId: function(agent){
        console.log("generate new uid");
        let userId = uuidv1();
        agent.context.set({
            'name': 'userId',
            'lifespan': 1000,
            'parameters': {
                'id': userId
            }
        });
    },
    getParameters: function (agent, name) {
        let context = agent.context.get(name);
        return context ? context.parameters : false
    },
    getState: function (agent) {
        let context = agent.context.get('states');
        return context.parameters.state
    },
    setState: function (agent, state) {
        agent.context.set({
            'name': 'states',
            'lifespan': 10,
            'parameters': {
                'state': state
            }
        });
    },
    initResults: function () {
        return {
            'TEST_0': undefined,
            'TEST_1': undefined,
            'TEST_2': undefined
        };
    },
    updateHealthStatus: function (agent, state, healthStatus) {
        let parameters = this.getParameters(agent, 'health').statusMap;
        let statusMap = parameters ? parameters : this.initResults();

        statusMap[state] = healthStatus;

        agent.context.set({
            'name': 'health',
            'lifespan': 10,
            'parameters': {
                'statusMap': statusMap
            }
        });
    },
    getNextState: function (state) {
        let stateNum = parseInt(state.substring(state.length - 1, state.length));
        return 'TEST_' + (stateNum + 1);
    },
    getHealthStatus: function (agent) {
        // TODO update according to final mapping
        let statusMap = this.getParameters(agent, 'health').statusMap;
        let points = 0;

        Object.keys(statusMap).forEach(function(key) {
            if (statusMap[key]){
                points += statusMap[key];
            }
        });

        risk = points / Config.maxPoints;

        if (risk >= 0.66)
            return 'UNHEALTHY';
        else if (risk <= 0.33)
            return 'HEALTHY';
        return 'RISK';
    }
};

module.exports = HelperFunctions;