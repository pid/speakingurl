var should = require('should');
var getSlug = require('../lib');

describe('getSlug separator', function () {

    it('should separate with non-whitespace', function (done) {

        getSlug('Foo Bar Baz', {
            separator: '-'
        })
            .should.eql('foo-bar-baz');

        getSlug('Foo Bar Baz', {
            separator: '*'
        })
            .should.eql('foo*bar*baz');

        getSlug('Foo Bar Baz', {
            separator: '_'
        })
            .should.eql('foo_bar_baz');

        done();

    });

    it('should separate with non-whitespace, with trailing spaces', function (done) {
        getSlug(' Foo Bar Baz ', {
            separator: '-'
        })
            .should.eql('foo-bar-baz');

        getSlug('  Foo Bar Baz  ', {
            separator: '*'
        })
            .should.eql('foo*bar*baz');

        getSlug('   Foo Bar Baz   ', {
            separator: '_'
        })
            .should.eql('foo_bar_baz');

        done();

    });

    it('should separate with trailing separator "-"', function (done) {

        getSlug('-Foo Bar Baz-', {
            separator: '-'
        })
            .should.eql('foo-bar-baz');

        getSlug('--Foo Bar Baz---', {
            separator: '-'
        })
            .should.eql('foo-bar-baz');

        getSlug('---Foo Bar Baz---', {
            separator: '-'
        })
            .should.eql('foo-bar-baz');

        done();
    });

    it('should separate with trailing separator "*"', function (done) {

        getSlug('*Foo Bar Baz*', {
            separator: '*'
        })
            .should.eql('foo*bar*baz');

        getSlug('**Foo Bar Baz**', {
            separator: '*'
        })
            .should.eql('foo*bar*baz');

        getSlug('***Foo Bar Baz***', {
            separator: '*'
        })
            .should.eql('foo*bar*baz');

        done();

    });

    it('should separate with trailing separator "_"', function (done) {

        getSlug('_Foo Bar Baz_', {
            separator: '_'
        })
            .should.eql('foo_bar_baz');

        getSlug('__Foo Bar Baz__', {
            separator: '_'
        })
            .should.eql('foo_bar_baz');

        getSlug('___Foo Bar Baz___', {
            separator: '_'
        })
            .should.eql('foo_bar_baz');

        done();
    });

    it('should remove trailing separator "*"', function (done) {

        getSlug(' C\'est un beau titre qui ne laisse rien à désirer !', {
            separator: '*'
        })
            .should.eql('cest*un*beau*titre*qui*ne*laisse*rien*a*desirer');

        done();

    });

});