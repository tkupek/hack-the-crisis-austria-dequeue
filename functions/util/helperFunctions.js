const Config = require('../config/config');

const HelperFunctions = {
    getParameters: function(agent, name){
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
    updateHealthStatus: function(agent, status){
        let statusList = this.getParameters(agent, 'health') ? this.getParameters(agent, 'health') : []
        statusList.push(status);
        console.log(statusList);
        agent.context.set({
            'name': 'health',
            'lifespan': 10,
            'parameters': statusList
        });
    },
    getNextState: function(state){
        console.log("sadfas:" + state);
        let stateNum = parseInt(state.substring(state.length - 1, state.length));
        return 'TEST_' + (stateNum + 1);
    }
};

module.exports = HelperFunctions;