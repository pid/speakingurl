/* global describe,it */

describe('getSlug create', function() {
    'use strict';

    it('with symbols', function(done) {
        var getSlug = require('../lib').createSlug({
            lang: 'en',
            uric: true,
            uricNoSlash: true,
            mark: true
        });

        getSlug('Foo (♥) ; Baz=Bar').should.eql('foo-(love)-;-baz=bar');

        done();
    });

    it('without options', function(done) {
        var getSlug = require('../lib').createSlug();

        getSlug('Foo Bar Baz').should.eql('foo-bar-baz');

        done();
    });

    it('with empty options', function(done) {
        var getSlug = require('../lib').createSlug({});

        getSlug('Foo Bar Baz').should.eql('foo-bar-baz');

        done();
    });

    it('with maintainCase', function(done) {
        var getSlug = require('../lib').createSlug({
            maintainCase: true
        });

        getSlug('Foo Bar Baz').should.eql('Foo-Bar-Baz');

        done();
    });

    it('with uric', function(done) {
        var getSlug = require('../lib').createSlug({
            uric: true
        });

        getSlug(' :80:/Foo/Bar/Baz:Foo').should.eql(':80:/foo/bar/baz:foo');

        done();
    });

    it('with uricNoSlash', function(done) {
        var getSlug = require('../lib').createSlug({
            uricNoSlash: true
        });

        getSlug('Foo/ Bar= Baz').should.eql('foo-bar=-baz');

        done();
    });

    it('with mark', function(done) {
        var getSlug = require('../lib').createSlug({
            mark: true
        });

        getSlug('Foo* Bar Baz').should.eql('foo*-bar-baz');

        done();
    });

    it('with truncate', function(done) {
        var getSlug = require('../lib').createSlug({
            truncate: 15
        });

        getSlug('Foo* Foobar FooBarBaz').should.eql('foo-foobar');

        done();
    });

    it('with separator', function(done) {
        var getSlug = require('../lib').createSlug({
            separator: '_'
        });

        getSlug('Foo* Foobar FooBarBaz').should.eql('foo_foobar_foobarbaz');

        done();
    });

    it('with mark and maintainCase', function(done) {
        var getSlug = require('../lib').createSlug({
            mark: true,
            maintainCase: true
        });

        getSlug('Foo* Bar Baz').should.eql('Foo*-Bar-Baz');

        done();
    });

    it('with custom chars replacement', function(done) {
        var getSlug = require('../lib').createSlug({
            custom: {
                '*': 'o'
            }
        });

        getSlug('xyl*ph*n').should.eql('xylophon');

        done();
    });

    it('with custom chars replacement with not allowed target char', function(done) {
        var getSlug = require('../lib').createSlug({
            custom: {
                'o': '*'
            }
        });

        getSlug('xylophon').should.eql('xyl-ph-n');

        done();
    });

    it('with custom chars replacement with allowed target char, option mark', function(done) {
        var getSlug = require('../lib').createSlug({
            custom: {
                'o': '*'
            },
            mark: true
        });

        getSlug('xylophon').should.eql('xyl*ph*n');

        done();
    });

    it('with custom chars replacement with option mark', function(done) {
        var getSlug = require('../lib').createSlug({
            custom: {
                '*': 'o'
            },
            mark: true
        });

        getSlug('xyl*ph*n').should.eql('xylophon');

        done();
    });
});