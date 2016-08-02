/**
* Build and setup csgoserver
*
* @module nBot
* @submodule pluginManager
* @requires server, github
*/
var GitHubApi = require("github");

var github = new GitHubApi({
    // optional
    debug: false,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "MTRNord" // GitHub is happy with a unique user agent
    },
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 5000
});
/**
* @class pluginManager
* @static
*/
/**
* @method getSourcemodVersions
* @beta Work in Progress
*/
var pluginManager = module.exports = {}
pluginManager.getSourcemodVersions = function (socket, command) {
  github.repos.getTags({
    user: "alliedmodders",
    repo: "sourcemod"
  }, function(err, res) {
    if (err) {
      socket.emit('SourcemodList', {response: err, command: command.command})
      console.error(err)
    }else {
      socket.emit('SourcemodList', {response: res, command: command.command})
      //console.log(JSON.stringify(res))
    }
  })
}
