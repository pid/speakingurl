// test-rfc3986.js

var getSlug = require('../lib');

describe('getSlug rfc3986', function () {

    it('"uric" characters allowed', function () {
        var chars = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                uric: true
            })
                .should.eql("foo-" + chars[i] + "-bar-baz");
        }
    });

    it('"uric_no_slash" characters allowed', function () {
        var chars = [';', '?', ':', '@', '&', '=', '+', '$', ','];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                uric_no_slash: true
            })
                .should.eql("foo-" + chars[i] + "-bar-baz");
        }
    });

    it('"mark" characters allowed', function () {
        var chars = ['.', '!', '~', '*', '\'', '(', ')'];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                mark: true
            })
                .should.eql("foo-" + chars[i] + "-bar-baz");
        }
    });

    it('"uric" characters allowed, separator ";"', function () {
        var chars = ['?', ':', '@', '&', '=', '+', '$', ',', '/'];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                uric: true,
                separator: ';'
            })
                .should.eql("foo;" + chars[i] + ";bar;baz");
        }
    });
    
    it('"uric" characters allowed, separator ";" included in input string', function () {
           getSlug("foo ; bar baz", {
                uric: true,
                separator: ';'
            })
                .should.eql("foo;bar;baz");
    });

    it('"uric_no_slash" characters allowed, separator ";"', function () {
        var chars = ['?', ':', '@', '&', '=', '+', '$', ','];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                uric_no_slash: true,
                separator: ';'
            })
                .should.eql("foo;" + chars[i] + ";bar;baz");
        }
    });
    
    it('"uric_no_slash" characters allowed, separator ";" included in input string', function () {
           getSlug("foo ; bar baz", {
                uric: true,
                separator: ';'
            })
                .should.eql("foo;bar;baz");
    });

    it('"mark" characters allowed, separator "."', function () {
        var chars = ['!', '~', '*', '\'', '(', ')'];
        for (var i = 0; i < chars.length; i++) {
            getSlug("foo " + chars[i] + " bar baz", {
                mark: true,
                separator: '.'
            })
                .should.eql("foo." + chars[i] + ".bar.baz");
        }
    });

    it('"mark" characters allowed, separator "." included in input string', function () {
       getSlug("foo . bar baz", {
            uric: true,
            separator: '.'
        })
        .should.eql("foo.bar.baz");
    });
});