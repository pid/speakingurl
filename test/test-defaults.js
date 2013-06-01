/* global describe,it */

var getSlug = require('../lib');

describe('getSlug defaults', function () {
    'use strict';

    it('should replace whitespaces with separator', function (done) {

        getSlug('foo bar baz').should.eql('foo-bar-baz');

        done();
    });

    it('should remove trailing space if any', function (done) {

        getSlug(' foo bar baz ').should.eql('foo-bar-baz');

        done();
    });

    it('should remove multiple whitespaces', function (done) {

        getSlug(' foo bar  baz   FOO    BAR      BAZ      ').should.eql('foo-bar-baz-foo-bar-baz');

        done();
    });

    it('should remove multiple separators at start and end', function (done) {

        getSlug('-foo- bar -baz-').should.eql('foo-bar-baz');

        getSlug('--foo- bar -baz---').should.eql('foo-bar-baz');

        getSlug('---foo- bar -baz---').should.eql('foo-bar-baz');

        done();
    });

    it('should remove multple separators', function (done) {

        getSlug('foo- bar -baz').should.eql('foo-bar-baz');

        done();
    });

    it('should remove non-base64 characters', function (done) {

        var nonBase64 = ['[', ']', ',', '*', '+', '~', '.', '(', ')', '\'', '"', '!', ':', '@'];
        for (var i = 0; i < nonBase64.length; i++) {
            getSlug("foo " + nonBase64[i] + " bar baz").should.eql("foo-bar-baz");
        }

        done();
    });

    it('should remove trailing separator', function (done) {

        getSlug('C\'est un beau titre qui ne laisse rien à désirer  ! ').should.eql('cest-un-beau-titre-qui-ne-laisse-rien-a-desirer');

        done();
    });
});