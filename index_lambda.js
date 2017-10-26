'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const app = require('jovo-framework').Jovo;

exports.handler = function(event, context, callback) {
    app.handleRequest(event, callback, handlers);
    app.execute();
};


// =================================================================================
// App Logic
// =================================================================================

const handlers = {

    'LAUNCH': function() {
        app.toIntent('PokedexIntent');
    },

    'PokedexIntent': function() {
        app.tell('Hello World!');
    },
};
