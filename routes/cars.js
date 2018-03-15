const router = require('express').Router();

module.exports = server => {
    router
        .get('/:id',
            server.controllers.cars.show
        )

        .get('/',
            server.middlewares.ensureAuthenticated,
            server.controllers.cars.list
        )

        .post('/',
            server.middlewares.ensureAuthenticated,
            server.middlewares.bodyParser.json(),
            server.controllers.cars.create
        )

        .put('/:id',
            server.middlewares.bodyParser.json(),
            server.controllers.cars.update
        )

        .delete('/:id',
            server.controllers.cars.remove
        );

    server.use('/cars', router);
};