const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.users.show
        )

        .get('/',
            server.controllers.users.list
        )

        .post('/',
            server.middlewares.bodyParser.json(),
            server.controllers.users.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.users.update
        )

        .delete('/:id',
            server.controllers.users.remove
        );

    server.use('/users', router);
};