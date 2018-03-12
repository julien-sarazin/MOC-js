// Node dependencies
const http = require('http');

// Global errors
const badRequestError = JSON.stringify({ message: 'Bad Request' });

// Models
const User = require('./models/User');
const Car = require('./models/Car');

const server = http.createServer(function (request, response) {
    // Global request/response configuration
    response.setHeader('Content-Type', 'application/json');

    // Routing
    switch (request.url) {
        case '/users':
            if (request.method === 'GET')
                return response.end(User.list());

            if (request.method === 'POST') {
                return JSONBodyParse(request, function (error, json) {
                    if (error)
                        return response.end(JSON.stringify({ message: error }));

                    const user = new User(json);
                    user.save(function (error) {
                        if (error)
                            return response.end(JSON.stringify({ message: error.toString() }));

                        return response.end('');
                    });
                });
            }
            return response.end(badRequestError);

        case '/cars':
            if (request.method === 'GET')
                return response.end(Car.list());

            if (request.method === 'POST') {
                return JSONBodyParse(request, function (error, json) {
                    if (error)
                        return response.end(badRequestError);

                    const car = new Car(json);
                    car.save(function (error) {
                        if (error)
                            return response.end(JSON.stringify({ message: error.toString() }));

                        return response.end('');
                    });
                });
            }
            return response.end(badRequestError);

        default:
            return response.end(badRequestError)
    }
});

server.listen(3000);
console.log('server started on port 3000');


function JSONBodyParse(request, cb) {
    const buffer = [];

    request.on('data', function (chunk) {
        buffer.push(chunk);
    });

    request.on('end', function () {
        try {
            const json = JSON.parse(buffer.toString());
            cb(null, json);
        }
        catch (exception) {
            cb(exception);
        }
    });
}
