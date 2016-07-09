'use strict';
var dataProvider = require('../../../data/users/{username}/events.js');
/**
 * Operations on /users/{username}/events
 */
module.exports = {
    /**
     * summary: 
     * description: If you are authenticated as the given user, you will see your private events. Otherwise, you&#39;ll only see public events.
     * parameters: username, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 403
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 403
         * For response `default` status 200 is used.
         */
        var status = 403;
        var provider = dataProvider['get']['403'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
