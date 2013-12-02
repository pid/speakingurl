/* global describe,it */

var getSlug = require('../lib');

describe('getSlug languages', function() {
    'use strict';

    it('should replace language specific symbols', function(done) {

        var symbolMap = {

            'ar': {
                '∆': 'delta',
                '∞': 'la-nihaya',
                '♥': 'hob',
                '&': 'wa',
                '|': 'aw',
                '<': 'aqal-men',
                '>': 'akbar-men',
                '∑': 'majmou',
                '¤': 'omla'
            },

            'de': {
                '∆': 'delta',
                '∞': 'unendlich',
                '♥': 'Liebe',
                '&': 'und',
                '|': 'oder',
                '<': 'kleiner als',
                '>': 'groesser als',
                '∑': 'Summe von',
                '¤': 'Waehrung'
            },

            'en': {
                '∆': 'delta',
                '∞': 'infinity',
                '♥': 'love',
                '&': 'and',
                '|': 'or',
                '<': 'less than',
                '>': 'greater than',
                '∑': 'sum',
                '¤': 'currency'
            },

            'es': {
                '∆': 'delta',
                '∞': 'infinito',
                '♥': 'amor',
                '&': 'y',
                '|': 'u',
                '<': 'menos que',
                '>': 'mas que',
                '∑': 'suma de los',
                '¤': 'moneda'
            },

            'fr': {
                '∆': 'delta',
                '∞': 'infiniment',
                '♥': 'Amour',
                '&': 'et',
                '|': 'ou',
                '<': 'moins que',
                '>': 'superieure a',
                '∑': 'somme des',
                '¤': 'monnaie'
            },

            'pt': {
                '∆': 'delta',
                '∞': 'infinito',
                '♥': 'amor',
                '&': 'e',
                '|': 'ou',
                '<': 'menor que',
                '>': 'maior que',
                '∑': 'soma',
                '¤': 'moeda'
            },

            'ru': {
                '∆': 'delta',
                '∞': 'beskonechno',
                '♥': 'lubov',
                '&': 'i',
                '|': 'ili',
                '<': 'menshe',
                '>': 'bolshe',
                '∑': 'summa',
                '¤': 'valjuta'
            }
        };

        Object.keys(symbolMap).forEach(function(l) {

            // console.log('\ncheck language: ' + l);

            Object.keys(symbolMap[l]).forEach(function(s) {

                var k = symbolMap[l][s];

                // console.log('check symbol: ' + s);

                getSlug('Foo ' + s + ' Bar', {
                    lang: l,
                    maintainCase: true
                }).should.eql('Foo-' + getSlug(k, {
                    maintainCase: true
                }) + '-Bar');

                getSlug('Foo ' + s + ' Bar', {
                    lang: l
                }).should.eql('foo-' + getSlug(k) + '-bar');

            });

        });

        getSlug('EN Foo & Bar ').should.eql('en-foo-and-bar');

        getSlug('EN Foo & Bar ', {
            lang: "en"
        }).should.eql('en-foo-and-bar');
        getSlug('de Foo & Bar ', {
            lang: "de"
        }).should.eql('de-foo-und-bar');
        getSlug('True Foo & Bar ', {
            lang: true
        }).should.eql('true-foo-bar');

        getSlug('False Foo & Bar ', {
            lang: false
        }).should.eql('false-foo-bar');

        getSlug('xx Foo & Bar ', {
            lang: "xx"
        }).should.eql('xx-foo-and-bar');

        getSlug('obj Foo & Bar ', {
            lang: {}
        }).should.eql('obj-foo-and-bar');

        getSlug('array Foo & Bar ', {
            lang: []
        }).should.eql('array-foo-and-bar');

        getSlug('null Foo & Bar ', {
            lang: null
        }).should.eql('null-foo-and-bar');

        done();

    });
});
