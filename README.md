Speaking URL [![NPM version](https://badge.fury.io/js/speakingurl.png)](http://badge.fury.io/js/speakingurl) [![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl) [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/pid/speakingurl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
===============================================================================================================================================================================================================================================================================================================================================================

> Generate a slug with a lot of options; create of so called 'static' or 'Clean URL' or 'Pretty URL' or 'nice-looking URL' or 'Speaking URL' or 'user-friendly URL' or 'SEO-friendly URL' from a string. This module aims to transliterate the input string.

For use in browser and server - no dependencies!

###### Notes

Never use the slug to reference to the unique page in the database – if the title will change, you want to change the slug – you run into problems.

1.	Use a unique reference to the record – e.g. a unique key "12345" => /my-little-title-12345.html
2.	Store all historical slugs in the page record; but you have to re-calculate the slug from all pages – every time you update speakingurl

Redirect with 301 to the last/current slug.

##### NPM Badge

[![Module Status](https://nodei.co/npm/speakingurl.png?downloads=true&stars=true)](https://npmjs.org/package/speakingurl)

Installation
------------

#### [npm](https://npmjs.org/package/speakingurl)

```shell
npm install speakingurl --save
```

#### [Bower](http://bower.io)

```shell
bower install --save speakingurl
```

#### [Component](https://github.com/component/component)

```shell
component install pid/speakingurl
```

#### [jamjs](http://jamjs.org/)

```shell
jam install speakingurl
```

#### [Download Package](https://github.com/pid/speakingurl/releases)

copy the file speakingurl.min.js to your script directory

#### [CDN/cloudflare](https://www.cloudflare.com/)

-	available versions: http://cdnjs.com/libraries/speakingurl/
-	use //cdnjs.cloudflare.com/ajax/libs/speakingurl/0.18.1/speakingurl.min.js

#### [CDN/maxcdn](https://www.maxcdn.com/)

-	available versions: http://www.jsdelivr.com/#!speakingurl
-	use //cdn.jsdelivr.net/speakingurl/0.18.1/speakingurl.min.js

Usage
-----

### getSlug(input, [options]);

`input`: {string} to convert

`options` {object|string} config object or separator string (see below)

-	`options` {object}

	-	`separator` {string} default: '-'
		-	char that replace the whitespaces
	-	`lang` {string} default: 'en'
		-	language for symbol translation ('ar', 'cz', 'de', 'en', 'es', 'fr', 'it', 'my', 'nl', pt', 'ru', 'sk', 'tr' and 'vn'; more coming soon, please help!)
		-	false -> don't convert symbols
	-	`maintainCase` {boolean} default: false
		-	true -> maintain case chars
		-	false -> convert all chars to lower case
	-	`titleCase` {boolean|array} default: false
		-	true -> convert input string to title-case
		-	array -> exclude words
	-	`truncate` {number} default: 0
		-	0 -> don't trim length
		-	&gt;= 1 -> trim to max length while not breaking any words
	-	`uric` {boolean} default: false
		-	true -> additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ",", "/"
		-	false
	-	`uricNoSlash` {boolean} default: false
		-	true -> additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ","
	-	`mark` {boolean} default: false
		-	true -> additionally allow chars: "-", "_", ".", "!", "~", "*", "'", "(", ")"
	-	`custom` {object} default: {}
		-	custom map for translation, overwrites all i.e. { '&': '#', '*': ' star ' }

-	`options` {string} separator

notes: default only Base64 chars are allowed (/A-Za-z0-9_-/), setting `uric`, `uricNoSlash` or/and `mark` to `true` will add the specified chars to the list of allowed characters. The separator-character is always allowed.

##### Node.js

```js
var getSlug = require('speakingurl');
```

##### Browser

```html
<script src="bower_components/speakingurl/speakingurl.min.js"></script>
```

#### Examples

```js
var slug;

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: schoener-titel-laesst-gruessen-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", '*');
console.log(slug); // Output: schoener*titel*laesst*gruessen*bel*ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
        separator: '_'
});
console.log(slug); // Output: schoener_titel_laesst_gruessen_bel_ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
        uric: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    uricNoSlash: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    mark: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen!-bel-ete-!

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    truncate: 20
});
console.log(slug); // Output: schoener-titel

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    maintainCase: true
});
console.log(slug); // Output: Schoener-Titel-laesst-gruessen-Bel-ete

slug = getSlug("Äpfel & Birnen!", {
    lang: 'de'
});
console.log(slug); // Output: aepfel-und-birnen

slug = getSlug("မြန်မာ သာဓက", {
    lang: 'my'
});
console.log(slug); // Output: myanma-thadak

slug = getSlug("Apple & Pear!", {
    lang: 'en' // lang: "en" is default, just to clarify
});
console.log(slug); // Output: apple-and-pear

slug = getSlug('Foo & Bar * Baz', {
    custom: {
        '&': ' doo '
    },
    uric:true
});
console.log(slug); // Output: foo-doo-bar-baz

slug = getSlug('Foo ♥ Bar');
console.log(slug); // Output: foo-love-bar

slug = getSlug('Foo & Bar | (Baz) * Doo', {
    custom: {
        '*': 'Boo'
    },
    mark:true
});
console.log(slug); // Output: foo-and-bar-or-(baz)-boo-doo

slug = getSlug('Foo and Bar or Baz', {
    custom: {
        'and': 'und',
        'or': ''
    }
});
console.log(slug); // Output: foo-und-bar-baz

slug = getSlug('NEXUS4 only $299');
console.log(slug); // Output: nexus-4-only-usd299

slug = getSlug('NEXUS4 only €299', {
    maintainCase: true
});
console.log(slug); // Output: NEXUS-4-only-EUR299

slug = getSlug('Don\'t drink and drive', {
    titleCase: true
});
console.log(slug); // Output: Don-t-Drink-And-Drive

slug = getSlug('Don\'t drink and drive', {
    titleCase: ['and']
});
console.log(slug); // Output: Don-t-Drink-and-Drive

slug = getSlug('Foo & Bar ♥ Foo < Bar', {
    lang: false
});
console.log(slug); // Output: foo-bar-foo-bar
```

### createSlug([options])

`options`: {object|string} config object or separator string (see above)

Create your own specially configured function.

```js
var options = {
    maintainCase: true,
    separator: '_'
};
var mySlug = require('speakingurl').createSlug(options);
// in browser:
// var mySlug = createSlug(options);

var slug = mySlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: Schoener_Titel_laesst_gruessen_Bel_ete
```

Create your own specially configured function with title-case feature.

```js
var options = {
    titleCase: [
        "a","an","and","as","at","but",
        "by","en","for","if","in","nor",
        "of","on","or","per","the","to","vs"
    ]
};
var mySlug = require('speakingurl').createSlug(options);
// in browser:
// var mySlug = createSlug(options);

var slug = mySlug('welcome to the jungle');
console.log(slug); // Output: Welcome-to-the-Jungle
```

Changelog
---------

see [CHANGELOG.md](https://raw.github.com/pid/speakingurl/master/CHANGELOG.md)

Tests
-----

[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

```shell
npm test
```

Contribution
------------

```shell

# fork pid/speakingurl on Github
$ git clone git@github.com:<YOUR_USER>/speakingurl.git
$ cd speakingurl
$ npm install
# add your stuff
# add tests
# add example for new feature
# add release info to CHANGELOG.md
# add description/example to README.md
$ gulp
$ commit files (speakingurl.min.js,...)
# if everything works fine, commit, push to your repository
# create pull request

# release new version / only for maintainer
$ gulp bumpup --minor
$ gulp release


$
```

Release
-------

```shell
$ gulp bumpup --patch
$ gulp
$ gulp release
```

[![Flattr](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1418477/pidspeakingurl-on-GitHub)

References
----------

-	http://tools.ietf.org/html/rfc3986
-	http://en.wikipedia.org/wiki/Transliteration


Use in other environments
-------------------------
-	[SpeakingURL with AngularJS](https://github.com/zappan/angular-speakingurl)
-	[SpeakingURL with Meteor](https://github.com/ongoworks/meteor-speakingurl)


Ports
-----

-	Java https://github.com/Weltraumschaf/speakingurl thanks to [@Weltraumschaf](https://github.com/Weltraumschaf/)

Credits
-------

-	[@dypsilon](https://github.com/dypsilon/)
-	[@simov](https://github.com/simov/)
-	[@henrikjoreteg](https://github.com/henrikjoreteg/)

[License](https://raw.github.com/pid/speakingurl/master/LICENSE)
----------------------------------------------------------------

The BSD 3-Clause License (BSD3)

Copyright (c) 2013-2014 Sascha Droste pid@posteo.net All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

-	Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
-	Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
-	Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
