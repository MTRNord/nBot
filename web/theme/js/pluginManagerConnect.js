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
  console.log(message.response);
  drawTable(message.response);
});
function drawTable(data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var name = data[key].name;
      var check = name.indexOf("sourcemod") > -1;
      if (check) {
        drawRow(data[key]);
      }else{
        console.error(JSON.stringify(data[key]) + " <-- is not sourceMod");
      }
    }
  }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#SourcemodVersions_body").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td><a href=\"" + rowData.zipball_url + "\" title=\"" + rowData.name + "\">" + rowData.zipball_url + "</td>"));
    row.append($("<td>" + rowData.commit.sha + "</td>"));
}
