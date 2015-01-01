/* global describe,it */

var getSlug = require('../lib');

describe('getSlug translate cyrillic letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('Пью')
            .should.eql('pyu');

        done();
    });

});
