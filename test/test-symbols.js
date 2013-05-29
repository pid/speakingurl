var getSlug = require('../lib');

describe('getSlug symbols', function () {
    it('should convert symbols', function (done) {

        getSlug('Foo & Bar | Baz')
            .should.eql('foo-and-bar-or-baz');

        getSlug('Foo & Bar | Baz', {
            lang: 'en'
        })
            .should.eql('foo-and-bar-or-baz');

        getSlug('Foo & Bar | Baz', {
            lang: 'de'
        })
            .should.eql('foo-und-bar-oder-baz');

        getSlug('Foo & Bar | Baz', {
            lang: 'fr'
        })
            .should.eql('foo-et-bar-ou-baz');

        getSlug('Foo & Bar | Baz', {
            lang: 'es'
        })
            .should.eql('foo-y-bar-u-baz');

        getSlug('Foo & Bar | Baz', {
            lang: 'ru'
        })
            .should.eql('foo-i-bar-ili-baz');

        done();
    });

    it('should not convert symbols with uric flag true', function (done) {

        getSlug('Foo & Bar | Baz', {
            uric: true
        })
            .should.eql('foo-&-bar-or-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'en',
            uric: true
        })
            .should.eql('foo-&-bar-or-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'de',
            uric: true
        })
            .should.eql('foo-&-bar-oder-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'fr',
            uric: true
        })
            .should.eql('foo-&-bar-ou-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'es',
            uric: true
        })
            .should.eql('foo-&-bar-u-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'ru',
            uric: true
        })
            .should.eql('foo-&-bar-ili-baz');
        done();
    });

    it('should not convert symbols with uricNoSlash flag true', function (done) {

        getSlug('Foo & Bar | Baz', {
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-or-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'en',
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-or-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'de',
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-oder-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'fr',
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-ou-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'es',
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-u-baz');
        getSlug('Foo & Bar | Baz', {
            lang: 'ru',
            uricNoSlash: true
        })
            .should.eql('foo-&-bar-ili-baz');
        done();
    });

    it('should not convert symbols with mark flag true', function (done) {

        getSlug('Foo (Bar) . Baz', {
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        getSlug('Foo (Bar) . Baz', {
            lang: 'en',
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        getSlug('Foo (Bar) . Baz', {
            lang: 'de',
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        getSlug('Foo (Bar) . Baz', {
            lang: 'fr',
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        getSlug('Foo (Bar) . Baz', {
            lang: 'es',
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        getSlug('Foo (Bar) . Baz', {
            lang: 'ru',
            mark: true
        })
            .should.eql('foo-(bar)-.-baz');

        done();

    });

    it('should convert symbols with flags true', function (done) {

        getSlug('Foo (♥) ; Baz=Bar', {
            lang: 'en',
            uric: true,
            uricNoSlash: true,
            mark: true
        })
            .should.eql('foo-(love)-;-baz=bar');

        getSlug('Foo (♥) ; Baz=Bar', {
            lang: 'de',
            uric: true,
            uricNoSlash: true,
            mark: true
        })
            .should.eql('foo-(liebe)-;-baz=bar');

        getSlug('Foo (♥) ; Baz=Bar', {
            lang: 'fr',
            uric: true,
            uricNoSlash: true,
            mark: true
        })
            .should.eql('foo-(amour)-;-baz=bar');

        getSlug('Foo (♥) ; Baz=Bar', {
            lang: 'es',
            uric: true,
            uricNoSlash: true,
            mark: true
        })
            .should.eql('foo-(amor)-;-baz=bar');

        getSlug('Foo (♥) ; Baz=Bar', {
            lang: 'ru',
            uric: true,
            uricNoSlash: true,
            mark: true
        })
            .should.eql('foo-(lubov)-;-baz=bar');
        done();
    });

    it('should replace symbols (de)', function (done) {

        getSlug('Äpfel & Birnen', {
            lang: 'de'
        })
            .should.eql('aepfel-und-birnen');

        getSlug('ÄÖÜäöüß', {
            lang: 'de',
            maintainCase: true
        })
            .should.eql('AeOeUeaeoeuess');

        done();
    });

    it('should ignore not available language param', function (done) {

        getSlug('Äpfel & Birnen', {
            lang: 'xx'
        })
            .should.eql('aepfel-and-birnen');

        done();
    });

});