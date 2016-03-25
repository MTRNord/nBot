/**
* Rcon connection to csgo Server
*
* @module nBot
* @submodule rcon
* @requires srcds-rcon
*/
var rcon_lib = require('srcds-rcon')({
    address: '127.0.0.1',
    password: '1199'
});
/**
* @class rcon
* @static
*/
var rcon = module.exports = {}
  /**
  * @method start
  * @deprecated Could later make problems at start
  */
  rcon.start = function () {
    rcon_lib.connect().then(() => {
        return rcon_lib.command('changelevel de_dust2').then(() => {
            console.log('changed map');
        });
    }).then(
        () => rcon_lib.command('sv_lan 0').then(() => console.log('changed sv_lan'))
    ).then(
        () => rcon_lib.command('mp_restartgame 1').then(() => console.log('restarted game'))
    ).then(
        () => rcon_lib.disconnect()
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
