/* global describe,it */

var getSlug = require('../lib/speakingurl');

describe('getSlug translate turkish letters', function () {
    'use strict';

    it('umlaut should be single letter transliteration', function (done) {

        getSlug('ÜÄÖŞĞüäöşğ', {
                lang: 'tr'
            })
            .should.eql('uaeosuaeos');

        getSlug('ÜÖÄŞĞ äüöşğ', {
                lang: 'tr'
            })
            .should.eql('uoaesg-aeuosg');

        done();
    });

});
