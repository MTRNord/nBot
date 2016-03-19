var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
var rcon = require("../backend/rcon.js")

module.exports = {
  start: function () {
    app.get('/', function(req, res){
      res.sendFile(__dirname + '/theme/index.html');
    });
    app.get('/theme.css', function(req, res){
      res.sendFile(__dirname + '/theme/theme.css');
    });
    app.use('/css', express.static(__dirname + '/theme/css'));
    app.use('/js', express.static(__dirname + '/theme/js'));
    app.use('/fonts', express.static(__dirname + '/theme/fonts'));
    http.listen(3000, function(){
      console.log('listening on *:3000');
    });
  },
  iojs: function () {
    io.on('connection', function (socket) {
      //senden an socket dass er verbunden ist
      //socket.emit('userOnline', {message: 'verbunden'});

      //Informationen vom User holen
      socket.on('command', function (command) {
        console.log(command.command);
        if (command.command == "restartgame") {
          rcon.restart_game()
        }else {
          if (command.command == "live_on") {
            rcon.live_on()
          }else {
            console.log("unknown command");
          }
        }
        socket.broadcast.emit('alert', "command executed");
      });
    });
  }
};
