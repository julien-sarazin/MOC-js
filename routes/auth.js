const router = require('express').Router();

module.exports = server => {
    router
        .post('/login',
            server.middlewares.bodyParser.json(),
            server.controllers.auth.login
        );

    server.use('/auth', router);
};