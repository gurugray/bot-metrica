/**
 * @param {Interger} counterId Metrica counter identifier
 * @param {Object} [config] optional params for request information
 */
module.exports = function (counterId, config = {}) {

    let counter = require('yametrika').counter({
        id: counterId
    });

    let defaultConfig = {
        host: 'localhost',
        path: '/bot',
        ip: '127.0.0.1',
        pageTitle: 'Bot',
        defaultGoal: 'message',
        userAgent: 'ChatBot: 0.0.1, '
    };

    return {
        /**
         * @param {String} fromId Unical user identifier
         * @param {Object} message
         * @param {String} [goal='message'] "Goal" to reach with this hit
         */
        track: function(
            fromId,
            msg,
            goal = config.defaultGoal || defaultConfig.defaultGoal
        ) {

            if (!msg) return;

            var message = {};

            message[goal] = msg;

            counter.req({
                headers: {
                    protocol: 'https',
                    referer: fromId,
                    host: config.host || defaultConfig.host,
                    url: config.path || defaultConfig.path,
                    'user-agent': (config.userAgent || defaultConfig.userAgent) + fromId,
                    'x-real-ip': config.ip || defaultConfig.ip
                },
                connection: {
                    remoteAddress: config.ip || defaultConfig.ip
                }
            })
            .hit(
                'https://' + (config.host || defaultConfig.host),
                config.pageTitle || defaultConfig.pageTitle,
                fromId,
                message,
                'noindex'
            )
            .reachGoal(goal, message)
            .notBounce();
        }
    };
};
