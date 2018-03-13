const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = process.env.PORT || 8080;

const Car = require('./models/Car');
const User = require('./models/User');

server.listen(PORT);
console.log(`Server is listening on port ${PORT}`);

// Users
// --------------------------------------------------------------------
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
server.get('/cars',
    (req, res, next) => {
        Car
            .list(err, data => {
                return err
                    ? res.status(500).send(err)
                    : res.send(data);
            })
    });

server.post('/cars',
    bodyParser.json(),
    (req, res, next) => {
        new Car(req.body)
            .save(req.body, err => {
                return err
                    ? res.status(500).send(err)
                    : res.status(201).send();
            })
    });

server.put('/cars/:id',
    bodyParser.json(),
    (req, res, next) => {
        Car
            .findByIdAndUpdate(req.params.id, req.body, (err) => {
                return err
                    ? res.status(500).send(err)
                    : res.status(200).send();
            });
    });

server.delete('/cars/:id',
    (req, res, next) => {
        Car
            .findByIdAndRemove(req.params.id, (err) => {
                return err
                    ? res.status(500).send(err)
                    : res.status(200).send();
            });
    });