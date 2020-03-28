const Config = require('../config/config');

const HelperFunctions = {
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
        let statusMap = this.getParameters(agent, 'health').statusMap;
        let statusCounter = 0;

        Object.keys(statusMap).forEach(function(key) {
            if (statusMap[key]){
                statusCounter++;
            }
        });
        return statusCounter < 2;
    }
};

module.exports = HelperFunctions;