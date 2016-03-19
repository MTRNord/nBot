var rcon = require('srcds-rcon')({
    address: '127.0.0.1',
    password: '1199'
});
module.exports = {
  start: function () {
    console.log("Start Rcon Commands")
    rcon.connect().then(() => {
        return rcon.command('changelevel de_dust2').then(() => {
            console.log('changed map');
        });
    }).then(
        () => rcon.command('sv_lan 0').then(() => console.log('changed sv_lan'))
    ).then(
        () => rcon.command('mp_restartgame').then(() => console.log('restarted game'))
    ).then(
        () => rcon.disconnect()
    ).catch(err => {
        console.log('caught', err);
        console.log(err.stack);
    });
    console.log("End Rcon Commands")
  }
};
