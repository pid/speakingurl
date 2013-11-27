# Speaking URL [![NPM version](https://badge.fury.io/js/speakingurl.png)](http://badge.fury.io/js/speakingurl) [![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

> Generate of so called "static" or "Clean URL" or "Pretty URL" or "nice-looking URL" or "Speaking URL" or "user-friendly URL" or "SEO-friendly URL" or "slug" from a string.

This module aims to transliteration the input string.

For use in browser and server - no dependencies!

[![Module Status](https://nodei.co/npm/speakingurl.png?downloads=true&stars=true)](https://npmjs.org/package/speakingurl)


## Installation
server-side:

    $ npm install speakingurl --save

client-side:
    
    $ # http://bower.io/
    $ bower install speakingurl 

    or

    $ # http://component.io/
    $ component install pid/speakingurl
   
    or

    $ # http://jamjs.org/
    $ jam install speakingurl

    or 
    copy the file speakingurl.min.js to your script directory

    or use the CDN from Cloudflare (available version overview: http://cdnjs.com/libraries/speakingurl/)
    use //cdnjs.cloudflare.com/ajax/libs/speakingurl/0.6.3/speakingurl.min.js


## Usage
### getSlug(input, [options]);
```input```: {string} to convert; ```options```: {object|string} config object or separator string (see below)

* ```separator``` {string} default: '-'
    * char that replace the whitespaces
* ```lang``` {string} default: 'en'
    * language for symbol translation ('ar', 'de', 'en', 'es', 'fr', 'pt' and 'ru'; more coming soon, you can help!)
* ```maintainCase``` {boolean} default: false
    * true -> maintain case chars
    * false -> convert all chars to lower case
* ```uric``` {boolean} default: false
    * true -> additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ",", "/"
    * false -> only Base64 chars allowed (/A-Za-z0-9-_/)
* ```uricNoSlash``` {boolean} default: false
    * true -> additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ","
    * false -> only Base64 chars allowed (/A-Za-z0-9-_/)
* ```mark``` {boolean} default: false
    * true -> additionally allow chars: "-", "_", ".", "!", "~", "*", "'", "(", ")"
    * false -> only Base64 chars allowed (/A-Za-z0-9-_/)
* ```custom``` {object} default: {} 
    * custom map for translation, overwrites all i.e. { '&': '#', '*': ' star ' }
* ```truncate``` {number} default: 0
    * 0 -> don't trim length
    * &gt;= 1 -> trim to max length while not breaking any words
* ```options``` {string} separator

notes: default only Base64 chars are allowed (/A-Za-z0-9_-/), setting ```uric```, ```uricNoSlash``` or/and ```mark``` to ```true``` will add the specified chars to the list of allowed characters. The separator-character is always allowed.

```javascript
var getSlug = require('speakingurl');
var slug;

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: schoener-titel-laesst-gruessen-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", '*');
console.log(slug); // Output: schoener*titel*laesst*gruessen*bel*ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {separator: '_'});
console.log(slug); // Output: schoener_titel_laesst_gruessen_bel_ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uric: true});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uricNoSlash: true});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {mark: true});
console.log(slug); // Output: schoener-titel-laesst-gruessen!-bel-ete-!

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {truncate: 20});
console.log(slug); // Output: schoener-titel

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {maintainCase: true});
console.log(slug); // Output: Schoener-Titel-laesst-gruessen-Bel-ete

slug = getSlug("Äpfel & Birnen!", {lang: 'de'});
console.log(slug); // Output: aepfel-und-birnen

slug = getSlug("Apple & Pear!", {lang: 'en'}); // lang: "en" is default, just to clarify
console.log(slug); // Output: apple-and-pear

slug = getSlug('Foo & Bar * Baz', {custom: {'&': ' doo '}, uric:true } );
console.log(slug); // Output: foo-doo-bar-baz

slug = getSlug('Foo ♥ Bar');
console.log(slug); // Output: foo-love-bar

slug = getSlug('Foo & Bar | (Baz) * Doo', {custom:{'*': 'Boo'},mark:true});
console.log(slug); // Output: foo-and-bar-or-(baz)-boo-doo

slug = getSlug('Foo and Bar or Baz', {custom:{'and': 'und', 'or': ''}});
console.log(slug); // Output: foo-und-bar-baz

slug = getSlug('NEXUS4 only $299');
console.log(slug); // Output: nexus-4-only-usd299

slug = getSlug('NEXUS4 only €299', {maintainCase: true});
console.log(slug); // Output: NEXUS-4-only-EUR299
```

In browser:

```html
<script src="components/speakingurl/speakingurl.min.js"></script>

<script>
    var slug = getSlug('NEXUS4 only €299', {maintainCase: true});
    console.log(slug); // Output: NEXUS-4-only-EUR299
</script>
```

### createSlug([options])
```options```: {object|string} config object or separator string (see above)

Create your own specially configured function.

```javascript
var slug;
var options = {
    maintainCase: true,
    separator: '_'
};
var mySlug = require('speakingurl').createSlug(options);

slug = mySlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: Schoener_Titel_laesst_gruessen_Bel_ete
```

In browser:

```html
<script src="components/speakingurl/speakingurl.min.js"></script>

<script>
    var options = {
        maintainCase: true,
        separator: '_'
    };
    var mySlug = createSlug(options);

    var slug = mySlug("Schöner Titel läßt grüßen!? Bel été !");
    console.log(slug); // Output: Schoener_Titel_laesst_gruessen_Bel_ete
</script>
```

## Tests
[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

```shell
$ npm test
```

[![Flattr](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1418477/pidspeakingurl-on-GitHub)

## [History](https://raw.github.com/pid/speakingurl/master/History.md)

## References
- http://tools.ietf.org/html/rfc3986
- http://en.wikipedia.org/wiki/Transliteration

## Credits
- [@dypsilon](https://github.com/dypsilon/js-replace-diacritics)
- [@simov](https://github.com/simov/slugify)
- [@henrikjoreteg](https://github.com/henrikjoreteg/slugger)

## License
[BSD](https://raw.github.com/pid/speakingurl/master/LICENSE)

The BSD 3-Clause License (BSD3)

Copyright (c) 2013 Sascha Droste <pid@posteo.net>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/pid/speakingurl/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
