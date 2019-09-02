var http = require('http');
var fs = require('fs');
var path = require('path');
var express =  require('express');
var app = express();

app.use(express.static(path.resolve('public')));

app.get('/', () =>  {
    res.sendFile('public/index.html', {root : './'});
});

var server = http.createServer(app);

server.listen(80, () => {
    console.log('servidor http iniciado en el puerto 80');
});