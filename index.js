const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = process.env.PORT || 8080;

// Loading models
require('./models')(server);

server.listen(PORT);
console.log(`Server is listening on port ${PORT}`);


// Users
// --------------------------------------------------------------------
const User = server.models.User;
server.get('/users',
    (req, res, next) => {
        User
            .list((err, data) => {
                return err
                    ? res.status(500).send(err)
                    : res.send(data);
            })
    });

server.post('/users',
    bodyParser.json(),
    (req, res, next) => {
        new User(req.body)
            .save(err => {
                return err
                    ? res.status(500).send(err)
                    : res.status(201).send();
            })
    });

server.put('/users/:id',
    bodyParser.json(),
    (req, res, next) => {
        User
            .findByIdAndUpdate(req.params.id, req.body, (err) => {
                return err
                    ? res.status(500).send(err)
                    : res.status(204).send();
            });
    });

server.delete('/users/:id',
    (req, res, next) => {
        User
            .findByIdAndRemove(req.params.id, err => {
                return err
                    ? res.status(500).send(err)
                    : res.status(204).send();
            });
    });


// Cars
// --------------------------------------------------------------------
const Car = server.models.Car;
server.get('/cars',
    (req, res, next) => {
        Car.find()
            .then(cars => res.send(cars))
            .catch(err => res.status(500).send(err));
    });

server.post('/cars',
    bodyParser.json(),
    (req, res, next) => {
        Car.create(req.body)
            .then(car => res.status(201).send(car))
            .catch(err => res.status(500).send(err));

    });

server.put('/cars/:id',
    bodyParser.json(),
    (req, res, next) => {
        Car.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.status(204).send())
            .catch(err => res.status(500).send(err));
    });

server.delete('/cars/:id',
    (req, res, next) => {
        Car.findByIdAndRemove(req.params.id)
            .then(data => res.status(204).send())
            .catch(err => res.status(500).send(err));
    });