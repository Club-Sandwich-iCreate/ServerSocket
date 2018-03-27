const express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log(socket);
  socket.on('update', () => {
    console.log('emiting');
    io.emit('update');
  });

  socket.on('startApplication', function(socket, msg) {
    console.log("ON - startApplication " + msg);
  });

  socket.on('checkID', function(socket, msg) {
    console.log("ON - checkID " + msg);
  });

  socket.on('startAmination', function(socket, msg) {
    console.log("ON - startAmination " + msg);
  });

  socket.on('soundEvent', function(socket, msg) {
    console.log("ON + soundEvent " + msg);
  });

  socket.on('playSong', function(socket, msg) { //quand le master ordonne de démarrer les sons
    console.log("ON + playSong " + msg);
  });

  socket.on('soundMatch', function(socket, msg) {
    console.log("ON + soundMatch " + msg);
  });

  socket.on('stopSong', function(socket, msg) {
    console.log("ON + stopSong " + msg);
  });

  socket.on('end', function(socket, msg) {
    console.log("ON + end " + msg);
  });
  //socket.emit('startApplication', '');
  //socket.emit('checkID', '');
  //socket.emit('startAnimation', '');
  //socket.emit('soundEvent', '');
  //socket.emit('playSong', '');
  //socket.emit('soundMatch', '');
  //socket.emit('stopSong', '');
  //socket.emit('end', '');
});

server.listen(process.env.PORT || 5000, function() {
  console.log('listening on *:3000');
});

/*
server.listen(5000, function() {
  console.log('listening on *:5000');
});
*/
