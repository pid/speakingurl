/* global describe,it */

var speakingurl = require('../lib/speakingurl');

describe('getSlug translate turkish letters', function () {
    'use strict';

    it('umlaut should be single letter transliteration', function (done) {

        speakingurl.getSlug('ÜÄÖüäö', {
                lang: 'tr'
            })
            .should.eql('uaeouaeo');

        speakingurl.getSlug('ÜÖÄ äüö', {
                lang: 'tr'
            })
            .should.eql('uoae-aeuo');

        done();
    });

});