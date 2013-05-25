// test-rfc3986.js

var getSlug = require('../lib');

describe('getSlug RFC3986 characters allowed', function () {
    it('should only Base64 characters', function () {
        getSlug('Foo, Bar Baz', {rfc3986: true}).should.eql('foo,-bar-baz');
        getSlug('Foo- Bar Baz', {rfc3986: true}).should.eql('foo-bar-baz');
        getSlug('Foo] Bar Baz', {rfc3986: true}).should.eql('foo-bar-baz');
        getSlug('Foo* Bar Baz', {rfc3986: true}).should.eql('foo*-bar-baz');
        getSlug('Foo*Bar Baz', {rfc3986: true}).should.eql('foo*bar-baz');
    });
});
