var getSlug = require('../lib');

describe('getSlug smart trim', function () {

    it('should maintain case characters, with smart trim', function (done) {

        getSlug('Foobarbaz, Bar Baz', {
            truncate: 12
        })
            .should.eql('foobarbaz');

        getSlug('Foobarbaz, Bar Baz', {
            truncate: 15
        })
            .should.eql('foobarbaz-bar');

        getSlug(' Foobarbaz, Bar Baz', {
            truncate: 15
        })
            .should.eql('foobarbaz-bar');

        getSlug('  Foobarbaz,    Bar Baz', {
            truncate: 15
        })
            .should.eql('foobarbaz-bar');

        done();
    });
});