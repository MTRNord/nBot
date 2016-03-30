/**
* Build and setup csgoserver
*
* @module nBot
* @submodule pluginManager
* @requires server, github
*/
var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: false,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
        "user-agent": "nBot" // GitHub is happy with a unique user agent
    }
});
/**
* @class pluginManager
* @static
*/
/**
* @method getSourcemodVersions
* @beta Work in Progress
*/
exports.getSourcemodVersions = function () {
  return github.repos.getTags({
    user: "alliedmodders",
    repo: "sourcemod"
  }, function(err, res) {
    return res
  })
}
