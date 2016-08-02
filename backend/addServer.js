/**
* Build and setup csgoserver
*
* @module nBot
* @submodule addServer
* @requires server, progress, https, fs
*/
var socket = require("../web/server.js")
var ProgressBar = require('progress');
var https = require('https');
var fs = require('fs');
/**
* @class addServer
* @static
*/
var addServer = module.exports = {}
  /**
  * @method start
  * @beta Work in Progress
  */
  addServer.start = function (socket, command) {
    var req = https.request({
      host: 'raw.githubusercontent.com',
      port: 443,
      path: '/dgibbs64/linuxgameservers/master/CounterStrikeGlobalOffensive/csgoserver'
    });

    req.on('response', function(res){
      res.on('data', function (chunk) {
        fs.writeFile("csgo_servers/csgoserver", chunk, function(err) {
          if(err) {
            return console.log(err);
          }

          console.log("The file was saved!");
          socket.emit('ScriptDownloaded', {response: "Download Success", command: command.command})
        });
      });

      res.on('end', function () {
        console.log('\n');
      });
      console.log('statusCode: ', res.statusCode);
    });
    req.end();
    req.on('error', (e) => {
      console.error(e);
      socket.emit('ScriptDownloaded', {response: "Download Failed -->  " + e, command: command.command})
    });
  },
  /**
  * @method step2
  */
  addServer.step2 = function () {
    //TODO Start Script
  }
