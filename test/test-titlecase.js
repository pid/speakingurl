/* global describe,it */

var speakingurl = require('../lib/speakingurl');

describe('getSlug titleCase', function () {
    'use strict';

    it('should title-case the characters', function (done) {

        speakingurl.getSlug('This is big foo', {
                titleCase: true
            })
            .should.eql('This-Is-Big-Foo');

        speakingurl.getSlug('This is Big foo', {
                titleCase: true
            })
            .should.eql('This-Is-Big-Foo');

        speakingurl.getSlug('Don\'t drink and drive', {
                titleCase: true
            })
            .should.eql('Don-t-Drink-And-Drive');

        done();
    });

    it('should title-case the characters with custom array', function (done) {

        speakingurl.getSlug('This is yet foo and bar', {
                titleCase: ['and', 'yet']
            })
            .should.eql('This-Is-yet-Foo-and-Bar');

        speakingurl.getSlug('This is a foo and an angry bird', {
                titleCase: ['a', 'an', 'and']
            })
            .should.eql('This-Is-a-Foo-and-an-Angry-Bird');

        speakingurl.getSlug('This is a foo and an angry bird show', {
                titleCase: ['a']
            })
            .should.eql('This-Is-a-Foo-And-An-Angry-Bird-Show');

        speakingurl.getSlug('Don\'t drink and drive', {
                titleCase: ['and']
            })
            .should.eql('Don-t-Drink-and-Drive');

        speakingurl.getSlug('Don\'t drink and drive', {
                titleCase: {}
            })
            .should.eql('Don-t-Drink-And-Drive');

        speakingurl.getSlug('Don\'t drink and drive', {
                titleCase: {
                    'drink': 'drive'
                }
            })
            .should.eql('Don-t-Drink-And-Drive');

        speakingurl.getSlug('Don\'t drink and drive', {
                titleCase: 42
            })
            .should.eql('Don-t-Drink-And-Drive');

        done();
    });
});