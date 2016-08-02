PNotify.prototype.options.styling = "bootstrap3";
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
var ws = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
var socket = io(ws);
$(document).off('click', '#restart').on('click', '#restart', function (e) {
  console.log('restart fired');

  socket.emit('command', {command: 'restartgame'});
  e.preventDefault();
});
$(document).off('click', '#live_on').on('click', '#live_on', function (e) {
  console.warn('LIVE!!!');

  socket.emit('command', {command: 'live_on'});
  e.preventDefault();
});
socket.on('alert', function (message) {
  if (message.command === "live_on") {
    PNotify.desktop.permission();
    (new PNotify({
      title: 'LIVE!!!',
      text: "The game successfully started!",
      type: 'success',
      desktop: {
        desktop: true
      }
    })).get().click(function(e) {
      if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
      alert('Hey! You clicked the desktop notification!');
    });
  }
});
socket.on('status_alert', function (message) {
  console.warn(typeof message)
  console.warn(message)
});
$(document).off('click', '#check_status').on('click', '#check_status', function (e) {
  console.log('Check Status');

  socket.emit('command', {command: 'status'});
  e.preventDefault();
});
