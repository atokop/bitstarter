var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  var responseString = fs.readFileSync("index.html", encoding='utf8');
  response.send(responseString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
