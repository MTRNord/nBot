var expect = require("chai").expect
var startJS = require("../start.js")
describe("start", function() {
  describe("Placeholder", function() {
    it("keeps place", function() {
      var placeholderVar   = 1;
      expect(placeholderVar).to.equal(1);
    });
  });
});
