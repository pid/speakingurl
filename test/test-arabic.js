/* global describe,it */

var getSlug = require('../lib');

describe('getSlug translate arabic letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('بشس تاقفغقف  -  ت ب ي ق', {
                language: 'ar'
            })
            .should.eql('bshs-taqfghqf-t-b-y-q');

        done();
    });

});
