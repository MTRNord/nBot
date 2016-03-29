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
  console.err(message)
  drawTable(message.response);
});
function drawTable(data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var data1 = data[key];
      for (var i = 0; i < data1.length; i++) {
          drawRow(data1[i]);
      }
    }
  }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#SourcemodVersions").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.name + "</td>"));
    console.error(rowData.name);
    row.append($("<td>" + rowData.zipball_url + "</td>"));
    console.error(rowData.zipball_url);
    row.append($("<td>" + rowData.commit + "</td>"));
    console.error(rowData.commit);
}
