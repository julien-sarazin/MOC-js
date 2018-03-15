const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.trips.show
        )

        .get('/',
            server.controllers.trips.list
        )

        .post('/',
            server.middlewares.ensureAuthenticated,
            server.middlewares.bodyParser.json(),
            server.controllers.trips.create
        )

        .put('/:id',
            server.middlewares.ensureAuthenticated,
            server.middlewares.bodyParser.json(),
            server.controllers.trips.update
        )

        .delete('/:id',
            server.middlewares.ensureAuthenticated,
            server.controllers.trips.remove
        )

        .post('/:id/join',
            server.middlewares.ensureAuthenticated,
            server.controllers.trips.join
        )

        .post('/:id/start',
            server.middlewares.ensureAuthenticated,
            server.controllers.trips.start
        )

        .post('/:id/finish',
            server.middlewares.ensureAuthenticated,
            server.controllers.trips.finish
        );

    server.use('/trips', router);
};