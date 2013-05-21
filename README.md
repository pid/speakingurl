[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

# Speaking URL
Generate of so called "static" or "nice-looking" or "SpeakingURL" from a string.


Converting table taken from
https://github.com/yvg/js-replace-diacritics & https://github.com/dypsilon/js-replace-diacritics (AMD)

## Installation

```bash
$ npm install speakingurl
```

## Running tests

[![Build Status](https://travis-ci.org/pid/speakingurl.png)](https://travis-ci.org/pid/speakingurl)

```bash
$ npm test
```

## Usage

```js

    var makeUrl = require('speakingurl'),
        url, string;

    string = "Möchtest du eine schöne URL?";

    url = makeUrl(string);

    console.log(url); // Output: moechtest-du-eine-schoene-url

    string = "Première neige repéré!!";
    url = makeUrl(string);

    console.log(url); // Output: premiere-neige-repere

```

## License
[MIT](https://github.com/pid/speakingurl/blob/master/LICENCE)

Copyright (c) 2013 Sascha Droste <sascha.droste@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
