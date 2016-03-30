/**
* A clone of the eBot by deStrO fully based on node.js with build in Web Page
*
* @module nBot
* @main nBot
* @class nBot
* @requires server, rcon
*/
var web = require("./web/server.js")
var rcon = require("./backend/rcon.js")
var pluginManager = require("./backend/pluginManager")
rcon.start()
console.log(pluginManager.getSourcemodVersions())
web.start()
web.iojs()
