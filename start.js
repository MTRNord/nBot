var web = require("./web/server.js")
var rcon = require("./backend/rcon.js")
rcon.start()
web.start()
web.iojs()
