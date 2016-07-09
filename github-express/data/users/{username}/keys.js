'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/{username}/keys
 */
module.exports = {
    /**
     * summary: 
     * description: List public keys for a user.
Lists the verified public keys for a user. This is accessible by anyone.

     * parameters: username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{username}/keys',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{username}/keys',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
