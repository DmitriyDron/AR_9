var express = require('express');
var app = express();

app.get('/', function (req, res) {

  response.writeHead(200, {'Content-Type': 'text/plain'});
  res.send('Hello World!');
});

app.listen(8081, function () {
  console.log('Server running at http://127.0.0.1:8081/');
});
 