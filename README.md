# Speaking URL [![NPM version](https://badge.fury.io/js/speakingurl.png)](http://badge.fury.io/js/speakingurl)
Generate of so called "static" or "nice-looking" or "SpeakingURL" or "slug" from a string.

Works in browser and on node-server

#### Notes
Current published NPM package is in branch "v0.1.x" see current [README](https://npmjs.org/package/speakingurl) 

## Installation
    $ npm install speakingurl

## Usage
### getSlug(input, [options]);
```input```: string to convert; ```options```: config object (see below)

* ```separator``` default: '-'    
    * char that replace the whitespaces
* ```maintainCase``` default: false
    * true => maintain case chars
    * false => convert all chars to lower case
* ```uric``` default: false 
    * true => additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ",", "/"
    * false => only Base64 chars allowed (/A-Za-z0-9-_/)
* ```uric_no_slash``` default: false 
    * true => additionally allow chars: ";", "?", ":", "@", "&", "=", "+", "$", ","
    * false => only Base64 chars allowed (/A-Za-z0-9-_/)
* ```mark``` default: false 
    * true => additionally allow chars: "-", "_", ".", "!", "~", "*", "'", "(", ")"
    * false => only Base64 chars allowed (/A-Za-z0-9-_/)
* ```trim``` default: 0
    * 0 => don't trim length
    * >0 => trim to max length while not breaking any words 

* ```options``` === 'string' = ```separator``` 

notes: default only Base64 chars are allowed (/A-Za-z0-9_-/), setting ```uric```, ```uric_no_slash``` or/and ```mark``` to ```true```will add the specified chars to the allowed chars. The separator-character is always allowed.

## Examples
```javascript
var getSlug = require('speakingurl'),
    slug;

var getSlug = require('../lib'),
    slug;

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug);
// Output: schoener-titel-laesst-gruessen-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", "*");
console.log(slug);
// Output: schoener*titel*laesst*gruessen*bel*ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {separator: "_"});
console.log(slug);
// Output: schoener_titel_laesst_gruessen_bel_ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uric: true});
console.log(slug);
// Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uric_no_slash: true});
console.log(slug);
// Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {mark: true});
console.log(slug);
// Output: schoener-titel-laesst-gruessen!-bel-ete-!

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {trim: 20});
console.log(slug);
// Output: schoener-titel

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {maintainCase: true});
console.log(slug);
// Output: Schoener-Titel-laesst-gruessen-Bel-ete

```
## Tests
[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)
```shell
$ npm test
```

## Credits
- @simov https://github.com/simov/slugify
- @henrikjoreteg https://github.com/henrikjoreteg/slugger

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
