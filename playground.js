const http = require('http');
const names = [];
const error = JSON.stringify({ message : 'Invalid Request' });

const server = http.createServer(function(request, response){
  response.setHeader('Content-Type', 'application/json');

  if (request.method === 'GET')
    return response.end(JSON.stringify(names));

  if (request.method === 'POST') {
    if (request.headers['content-type'] !== 'application/json')
      return response.end(error);

    const buffer = [];
    request.on('data', function(chunk) {
      buffer.push(chunk);
    });

    request.on('end', function() {
      const data = buffer.toString();
      let json;

      try {
         json = JSON.parse(data);
      } catch (exception){
          return response.end(error);
      }

      const name = json.name;
      if (!name)
        return response.end(error);

      names.push(name);
      response.end();
    })
  }
});

server.listen(3000);
console.log('server started on port 3000');
