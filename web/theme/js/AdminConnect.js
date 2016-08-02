PNotify.prototype.options.styling = "bootstrap3";
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
var ws = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
var socket = io(ws);
$(document).off('click', '#script_download').on('click', '#script_download', function (e) {
  console.log('script_download');

  socket.emit('command', {command: 'script_download'});
  e.preventDefault();
});
socket.on('status_alert', function (message) {
  console.warn(message)
});

socket.on('ScriptDownloaded', function (message) {
  console.log(message.response);
  $("#first").hide()
  $("#second").show()
});
