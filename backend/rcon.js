var rcon = require('srcds-rcon')({
    address: '127.0.0.1',
    password: '1199'
});
module.exports = {
  start: function () {
    rcon.connect().then(() => {
        return rcon.command('changelevel de_dust2').then(() => {
            console.log('changed map');
        });
    }).then(
        () => rcon.command('sv_lan 0').then(() => console.log('changed sv_lan'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('restarted game'))
    ).then(
        () => rcon.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  restart_game: function () {
    rcon.connect().then(() => {
        return rcon.command('mp_restartgame 1').then(() =>{
            console.log('game restarted');
        });
    }).then(
        () => rcon.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  status: function () {
    rcon.connect().then(() => {
        rcon.command('status').then(() => {
            console.log('status check');
        });
    }).then(
        () => rcon.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  },
  live_on: function () {
    rcon.connect().then(() => {
        return rcon.command('mp_restartgame 1').then(() => {
            console.log('game restarted 0');
        });
    }).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 1'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 2'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 3'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 4'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 5'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 6'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 7'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 8'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 9'))
    ).then(
        () => rcon.command('mp_restartgame 1').then(() => console.log('game restarted 10'))
    ).then(
        () => rcon.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon.command('say LIVE!!!').then(() => console.log('LIVE!!!'))
    ).then(
        () => rcon.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
  }
};
