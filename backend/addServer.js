var socket = require("../web/server.js")
var ProgressBar = require('progress');
var https = require('https');
var fs = require('fs');

module.exports = {
  start: function () {
    var req = https.request({
      host: 'raw.githubusercontent.com',
      port: 443,
      path: '/dgibbs64/linuxgameservers/master/CounterStrikeGlobalOffensive/csgoserver'
    });

    req.on('response', function(res){
      var len = parseInt(res.headers['content-length'], 10);

      console.log();
      var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len
      });

      res.on('data', function (chunk) {
        bar.tick(chunk.length);
        fs.writeFile("csgo_servers/csgoserver", chunk, function(err) {
          if(err) {
            return console.log(err);
          }

          console.log("The file was saved!");
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
    });
  },
  step2: function () {
    //TODO Start Script
  }
}
