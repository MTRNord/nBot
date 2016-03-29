PNotify.prototype.options.styling = "bootstrap3";
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
var ws = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
var socket = io(ws);
$(document).off('click', '#refreshSourcemodReleases').on('click', '#refreshSourcemodReleases', function (e) {
  console.log('refresh fired');

  socket.emit('command', {command: 'refreshSourcemod'});
  e.preventDefault();
});
socket.on('status_alert', function (message) {
  console.warn(message)
});
socket.on('SourcemodList', function (message) {
  console.warn(message)
});
