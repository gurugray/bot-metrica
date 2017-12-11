module.exports = function (counterId) {
    var counter = require('yametrika').counter({
        id: counterId
    });

    return {
        /**
         * @param {fromId} SenderId
         * @param {Object} message
         * @param {String} [goal='message']
         */
        track: function(fromId, msg, goal = 'message') {
            if (!msg) return;

            var message = {};

            message[goal] = msg;

            counter.req({
                headers: {
                    protocol: 'https',
                    referer: fromId,
                    host: 'localhost',
                    url: '/bot',
                    'user-agent': 'ChatBot: 0.0.1, ' + fromId,
                    'x-real-ip': '127.0.0.1'
                },
                connection: {
                    remoteAddress: '127.0.0.1'
                }
            })
            .hit('https://localhost', 'Bot', fromId, message, 'noindex')
            .reachGoal(goal, message)
            .notBounce();
        }
    };
};
