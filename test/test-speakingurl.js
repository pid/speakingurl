var getSlug = require('../lib');

describe('getSlug misc', function () {
    it('should separate with configured character, with non-Base64 separator', function () {
        getSlug('Foo, Bar Baz', {separator: '*', maintainCase: false}).should.eql('foo,*bar*baz');
        getSlug('Foo- Bar Baz', {separator: '*', maintainCase: false}).should.eql('foo-*bar*baz');
        getSlug('Foo] Bar Baz', {separator: '*', maintainCase: false}).should.eql('foo*bar*baz');
    });

    it('should separate with configured character, with only Base64 characters allowed', function () {
        getSlug('Foo, Bar Baz', {separator: '_', onlyBase64: true}).should.eql('foo_bar_baz');
        getSlug('Foo- Bar Baz', {separator: '_', onlyBase64: true}).should.eql('foo-_bar_baz');
        getSlug('Foo] Bar Baz', {separator: '_', onlyBase64: true}).should.eql('foo_bar_baz');
    });
 
     it('should separate with configured character, with RFC3986 characters allowed', function () {
        getSlug('Foo, Bar Baz', {separator: '_', rfc3986: true}).should.eql('foo,_bar_baz');
        getSlug('Foo- Bar Baz', {separator: '_', rfc3986: true}).should.eql('foo-_bar_baz');
        getSlug('Foo] Bar Baz', {separator: '_', rfc3986: true}).should.eql('foo_bar_baz');
    });

    it('should separate with configured character, with smart trim', function () {
        getSlug('Foobarbaz, Bar Baz', {separator: '_', smartTrim: 12}).should.eql('foobarbaz');
        getSlug('Foobarbaz, Bar Baz', {separator: '_', smartTrim: 15}).should.eql('foobarbaz_bar');
        getSlug(' Foobarbaz, Bar Baz', {separator: '_', smartTrim: 15}).should.eql('foobarbaz_bar');
        getSlug('  Foobarbaz,    Bar Baz', {separator: '_', smartTrim: 15}).should.eql('foobarbaz_bar');
    });
    

    it('should maintain case characters, with non-Base64 separator', function () {
        getSlug('Foo, Bar Baz', {maintainCase: true, separator: '*'}).should.eql('Foo,*Bar*Baz');
        getSlug('Foo- Bar Baz', {maintainCase: true, separator: '*'}).should.eql('Foo-*Bar*Baz');
        getSlug('Foo] Bar Baz', {maintainCase: true, separator: '*'}).should.eql('Foo*Bar*Baz');
    });

    it('should maintain case characters, with only Base64 characters allowed', function () {
        getSlug('Foo, Bar Baz', {maintainCase: true, onlyBase64: true}).should.eql('Foo-Bar-Baz');
        getSlug('Foo- Bar Baz', {maintainCase: true, onlyBase64: true}).should.eql('Foo-Bar-Baz');
        getSlug('Foo] Bar Baz', {maintainCase: true, onlyBase64: true}).should.eql('Foo-Bar-Baz');
    });
 
     it('should maintain case characters, with RFC3986 characters allowed', function () {
        getSlug('Foo, Bar Baz', {maintainCase: true, rfc3986: true}).should.eql('Foo,-Bar-Baz');
        getSlug('Foo- Bar Baz', {maintainCase: true, rfc3986: true}).should.eql('Foo-Bar-Baz');
        getSlug('Foo] Bar Baz', {maintainCase: true, rfc3986: true}).should.eql('Foo-Bar-Baz');
    });

    it('should maintain case characters, with smart trim', function () {
        getSlug('Foobarbaz, Bar Baz', {maintainCase: true, smartTrim: 12}).should.eql('Foobarbaz');
        getSlug('Foobarbaz, Bar Baz', {maintainCase: true, smartTrim: 15}).should.eql('Foobarbaz-Bar');
        getSlug(' Foobarbaz, Bar Baz', {maintainCase: true, smartTrim: 15}).should.eql('Foobarbaz-Bar');
        getSlug('  Foobarbaz,    Bar Baz', {maintainCase: true, smartTrim: 15}).should.eql('Foobarbaz-Bar');
    });

    it('should prefer Base64 characters only', function () {
        getSlug('Foo, Bar Baz', {rfc3986: true, onlyBase64: true}).should.eql('foo-bar-baz');
        getSlug('Foo- Bar Baz', {rfc3986: true, onlyBase64: true}).should.eql('foo-bar-baz');
        getSlug('Foo] Bar Baz', {rfc3986: true, onlyBase64: true}).should.eql('foo-bar-baz');
        getSlug('Foo* Bar Baz', {rfc3986: true, onlyBase64: true}).should.eql('foo-bar-baz');
    });

});



            // {
            //     separator: '-',
            //     maintainCase: false,
            //     onlyBase64: true,     // => RFC 3986 == false
            //     rfc3986: false,       // set 'onlyBase64' or 'rfc3986', onlyBase64 is prioritized
            //     smartTrim: 0          // 0 == don't trim, otherwise trim to max length,
            //                              consider word boundaries 
            // }