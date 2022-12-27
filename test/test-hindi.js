/* global describe,it */

var getSlug = require("../lib/speakingurl");

describe("getSlug translate hindi letters", function () {
  "use strict";

  it("should be", function (done) {
    getSlug("कौतुकास्पद! दिवसा", {
      lang: "hi",
    }).should.eql("kaautaukaasapada-daivasaa");
    getSlug("कौतुकास्पद! दिवसा ∞", {
      lang: "hi",
    }).should.eql("kaautaukaasapada-daivasaa-ananta");

    done();
  });
});
