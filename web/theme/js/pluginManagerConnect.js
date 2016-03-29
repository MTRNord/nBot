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
  drawTable(message.response);
});
function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.id + "</td>"));
    row.append($("<td>" + rowData.firstName + "</td>"));
    row.append($("<td>" + rowData.lastName + "</td>"));
}
