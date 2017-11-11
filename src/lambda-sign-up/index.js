'use strict';
console.log('Loading Function: gp-sign-up');

// env vars are configured on aws console
console.log('Environment: ' + process.env.environment);


/**
 * Loading libs
 */
global.config = require('./config/provider');
global.helpers = require('./helpers/provider');


/**
 * All logic for signup is executed here
 * @param event
 */
var signUp = (event) => {
    console.log('Executing Function: gp-sign-up');

    return new Promise(function(resolve, reject) {

        const password = global.helpers.password.hash(event.password);

        resolve('User created');

    });

};


exports.handler = (event, context, callback) => {

    signUp(event)
        .then(function(successMsg) {
            callback(null, successMsg);
        })
        .catch(function(errorMsg) {
            callback(errorMsg);
        });

};