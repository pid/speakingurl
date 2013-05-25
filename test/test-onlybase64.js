// test-onlybase64.js

var getSlug = require('../lib');

describe('getSlug onlyBase64', function () {
    it('should only Base64 characters', function () {
        getSlug('Foo, Bar Baz', {onlyBase64: true}).should.eql('foo-bar-baz');
        getSlug('Foo- Bar Baz', {onlyBase64: true}).should.eql('foo-bar-baz');
        getSlug('Foo] Bar Baz', {onlyBase64: true}).should.eql('foo-bar-baz');
    });
});
