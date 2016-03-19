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
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });
    });
  }
};
