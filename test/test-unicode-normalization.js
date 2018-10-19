/* global describe,it */

var getSlug = require('../lib/speakingurl');

describe('getSlug unicode normalization', function () {
    'use strict';

    it('should normalize unicode before applying transformations', function (done) {
        // given
        var wordWithUmlautCanonical = 'klärung';
        var wordWithUmlautCombined = 'kla\u0308rung';

        // when
        var slugifiedCanonical = getSlug(wordWithUmlautCanonical);
        var slugifiedCombined = getSlug(wordWithUmlautCombined);

        // expect
        getSlug(slugifiedCanonical).should.eql(slugifiedCombined);

        done();
    });
});
