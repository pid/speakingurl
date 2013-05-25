var getSlug = require('../lib');

describe('getSlug smart trim', function () {

    it('should maintain case characters, with smart trim', function () {
        getSlug('Foobarbaz, Bar Baz', {smartTrim: 12}).should.eql('foobarbaz');
        getSlug('Foobarbaz, Bar Baz', {smartTrim: 15}).should.eql('foobarbaz-bar');
        getSlug(' Foobarbaz, Bar Baz', {smartTrim: 15}).should.eql('foobarbaz-bar');
        getSlug('  Foobarbaz,    Bar Baz', {smartTrim: 15}).should.eql('foobarbaz-bar');
    });
});

