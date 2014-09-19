/* global describe,it */

var getSlug = require('../lib');

describe('getSlug leet', function() {
    'use strict';

    it('should convert to leet case 1', function(done) {

        getSlug('Foo, Bar Baz', {
            leet: true
        }).should.eql('f00-b4r-b4z');

        done();
    });

    it('should convert to leet case 2', function(done) {
        getSlug('leet- plays big', {
            leet: true
        }).should.eql('l337-pl4y$-b19');

        done();
    });

    it('should convert to leet case 3', function(done) {
        getSlug('leet] plays big', {
            leet: true
        }).should.eql('l337-pl4y$-b19');

        done();
    });

    it('should convert to leet case 4', function(done) {
        getSlug('leet > plays ♥ big', {
            leet: true
        }).should.eql('l337-9r3473r-7h4n-pl4y$-l0v3-b19');

        done();
    });

});
