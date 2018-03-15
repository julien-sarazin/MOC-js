const server = require('express')();

require('./settings')(server);      // Loading settings
require('./models')(server);        // Loading models
require('./middlewares')(server);   // Loading middlewares
require('./controllers')(server);   // Loading controllers
require('./routes')(server);        // Loading routes
require('./test')(server);

server.listen(server.settings.port);
console.log(`Server is listening on port ${server.settings.port}`);