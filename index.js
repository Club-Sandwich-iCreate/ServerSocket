const express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log(socket.id);
    socket.on('update', () => {
        console.log('emiting');
        io.emit('update');
    });
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});


