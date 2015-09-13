/* global describe,it */

var getSlug = require('../lib/speakingurl');

describe('getSlug translate arabic letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('މއދކ ވ ރ ށ ރީތި', {
                lang: 'ar'
            })
            .should.eql('madhk-v-r-sh-reethi');

        done();
    });

});
