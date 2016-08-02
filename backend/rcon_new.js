/**
* Rcon connection to csgo Server
*
* @module nBot
* @submodule rcon
* @requires rcon
*/
var options = {
  tcp: true,       // false for UDP, true for TCP (default true)
  challenge: false  // true to use the challenge protocol (default true)
};
var host = "127.0.0.1";
var port = "27015";
var password = "1199";
client = new Rcon(host, port, password, options);
/**
* @class rcon_commands
* @static
*/
var rcon_commands = module.exports = {}
  /**
  * @method start
  * @deprecated Could later make problems at start
  */
  rcon.start = function () {
    conn.connect().then(() => {
        return conn.send('changelevel de_dust2').then(() => {
            console.log('changed map');
        });
    }).then(
        () => conn.send('sv_lan 0').then(() => console.log('changed sv_lan'))
    ).then(
        () => conn.send('mp_restartgame 1').then(() => console.log('restarted game'))
    ).then(
        () => conn.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  /**
  * @method restart_game
  */
  rcon.restart_game = function () {
    rcon_lib.connect().then(() => {
        return rcon_lib.command('mp_restartgame 1').then(() =>{
            console.log('game restarted');
        });
    }).then(
        () => rcon_lib.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  /**
  * @method status
  * @return {String} Status from the Server.
  */
  rcon.status = function () {
    return rcon_lib.connect().then(() => {
        return rcon_lib.command('status')
    }).then(
        () => rcon_lib.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  /**
  * @method live_on
  */
  rcon.live_on = function () {
    rcon_lib.connect().then(() => {
        return rcon_lib.command('mp_restartgame 1').then(() => {
            console.log('game restarted 0');
        });
    }).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 1'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 2'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 3'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 4'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 5'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 6'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 7'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 8'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 9'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('game restarted 10'))
    ).then(
        () => rcon_lib.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon_lib.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon_lib.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon_lib.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  }
