/**
* Webserver and Websocket-server
*
* @module nBot
* @submodule server
* @requires app, express, http, io, rcon, addserver, util, pluginManager
*/
var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var io = require('socket.io')(http);
var rcon = require("../backend/rcon.js")
var addserver = require("../backend/addServer.js")
var pluginManager = require("../backend/pluginManager.js")
var util = require('util');
/**
* @class server
* @static
*/
var server =  module.exports = {};
  /**
  * @method start
  */
  server.start = function () {
    app.get('/', function(req, res){
      res.sendFile(__dirname + '/theme/index.html');
    });
    app.get('/theme.css', function(req, res){
      res.sendFile(__dirname + '/theme/theme.css');
    });
    app.use('/css', express.static(__dirname + '/theme/css'));
    app.use('/js', express.static(__dirname + '/theme/js'));
    app.use('/fonts', express.static(__dirname + '/theme/fonts'));
    http.listen((process.env.PORT || 5000), "0.0.0.0", function(){
      console.log('listening on *:3001');
    });
  },
  /**
  * @method iojs
  */
  server.iojs = function () {
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
            if (command.command == "status") {
              rcon.status().then(result => console.log('Got status', result))
              //socket.emit('status_alert', {response: result})
            }else {
              if (command.command == "add_server") {
                addserver.start()
              }else {
                if (command.command == "refreshSourcemod") {
                  socket.emit('SourcemodList', {response: pluginManager.getSourcemodVersions(), command: command.command});
                }else {
                  console.log("unknown command");
                }
              }
            }
          }
        }
        socket.emit('alert', {response: "command executed", command: command.command});
      });
    });
  }
