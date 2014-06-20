var express = require('express');
var server = express();
server.use('/components', express.static(__dirname + '/bower_components'));
server.use(express.static(__dirname + '/public'));

server.get('/test', function(req, res) {
    res.send('Hello, world.');
});

server.listen(3000);
