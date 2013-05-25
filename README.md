[![Build Status](https://travis-ci.org/pid/speakingurl.png?branch=master)](https://travis-ci.org/pid/speakingurl)
[![NPM version](https://badge.fury.io/js/speakingurl.png)](http://badge.fury.io/js/speakingurl)

# Speaking URL
Generate of so called "static" or "nice-looking" or "SpeakingURL" or "slug" from a string.

Works in browser and node-server

#### Notes
In v0.1.x converting symbols is disabled, should be added in v0.2.x (see TODO)
This is an early version, please check for your needs and give feedback to improve it.

## Installation
```bash
$ npm install speakingurl
```

## Usage
### makeSlug(input, [options]);
```
input:      string to convert
options:    config object (see below)

    separator       default: '-'    char that replace the whitespaces
    maintainCase    default: false  true == maintain case chars, false == convert all chars to lower case
    onlyBase64      default: true   true == only Base64 chars are allowed, false == extended charsset ~RFC3986
    rfc3986         default: false  true == allow chars allowed by ~RFC3986 for url path, false == Base64 chars
    smartTrim       default: 0      0 == don't trim length, >0 == trim to max length while not breaking any words    

    notes: 
    - if you set 'onlyBase64' and 'rfc3986' to 'true', 'onlyBase64' is prioritized

```

## Examples

```js

    var makeSlug = require('speakingurl'),
        slug;

    slug = makeSlug("Das ist ein schöner Titel, der keine Wünsche offen läßt !  ");
    console.log(slug);
    // Output: "das-ist-ein-schoener-titel-der-keine-wuensche-offen-laesst"

    slug = makeSlug("Première neige repéré!!");
    console.log(slug);
    // Output: "premiere-neige-repere"

    // optionally use a different separator character
    slug = makeSlug("Would you like another character?", {separator: '_'} );
    console.log(slug);
    // Output: "want_another_separator"

    // optionally maintain case
    slug = makeSlug("Do not convert UPPERCASE chars", {maintainCase: true});
    console.log(slug);
    // Output: "Do-not-convert-UPPERCASE-chars"

    // optionally trim to max length while not breaking any words
    slug = makeSlug("Trim sentence ... to fit in length", {smartTrim: 15});
    console.log(slug);
    // Output: "trim-sentence"

    // optionally allow RFC3986 conform url path, default base64 /A-Za-z0-9_-/
    slug = makeSlug("Allow *RFC396* characters like 'that'?", {rfc3986: true} );
    console.log(slug);
    // Output: "allow-*rfc396*-characters-like-'that'"

    // optionally allow RFC3986 conform url path with smart trim
    slug = makeSlug("Allow *RFC3986* characters like 'that'?", {rfc3986: true, smartTrim: 20} );
    console.log(slug);
    // Output: "allow-*rfc396*"

```

## Running tests
[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

```shell
$ npm test
```

## TODO
- add converting symbols to corresponding word (en/de), adding new option ie. {'lang': 'en'}
- change order with currency symbols ( input: "$30" => "30 Dollar")
- more languages for symbols translations (need contributors)
- minified version for browser (grunt tasks)
- publish v0.2.x
- AMD/requirejs for browser
- add to bower (see http://bower.io)
- publish v0.3.x

## History
- didn't find a package for doing the job
- developed my own solution until v0.1.5
- found the right keyword I had looking for.... found npm-packages (see credits)
- adopted the best from all
- refactoring v0.1.5
- published v0.1.6 (compatible with v0.1.5)

## Credits
@simov https://github.com/simov/slugify

@henrikjoreteg https://github.com/henrikjoreteg/slugger

@Aaronontheweb https://github.com/Aaronontheweb/node-slugs

## License
[BSD](https://raw.github.com/pid/speakingurl/master/LICENCE)

The BSD 3-Clause License (BSD3)

Copyright (c) 2013 Sascha Droste <sascha.droste@gmail.com>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
