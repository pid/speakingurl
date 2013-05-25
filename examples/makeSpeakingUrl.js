var makeSlug = require('../lib'),
    slug;

slug = makeSlug("Das ist ein schöner Titel, der keine Wünsche offen läßt?");
console.log(slug);
// Output: "moechtest-du-eine-schoene-url"

slug = makeSlug("Première neige repéré!!");
console.log(slug);
// Output: "premiere-neige-repere"

// optionally allow RFC3986 conform url path, default base64 /A-Za-z0-9_-/
slug = makeSlug("Allow *RFC396* characters like 'that'?", {rfc3986: true} );
console.log(slug);
// Output: "allow-*rfc396*-characters-like-'that'"

// if you choose a separator which is'nt a Base64 (/A-Za-z0-9_-/) character => rfc3986 == true
slug = makeSlug("Choosing 'separator' to non Base64 char, rfc3986 chars are allowed at all", {separator: '*'} );
console.log(slug);
// Output: "choosing*'separator'*to*non*base64*char,*rfc3986*chars*are*allowed*at*all"

// optionally use a different separator character
slug = makeSlug("Would you like another seaprator?", {separator: '_'} );
console.log(slug);
// Output: "would_you_like_another_character"

// optionally maintain case
slug = makeSlug("Don't convert UPPERCASE chars", {maintainCase: true});
console.log(slug);
// Output: "Do-not-convert-UPPERCASE-chars"

// optionally trim to max length while not breaking any words
slug = makeSlug("Trim sentence ... to fit in length", {smartTrim: 15});
console.log(slug);
// Output: "trim-sentence"

// optionally allow RFC3986 conform url path with smart trim
slug = makeSlug("Allow *RFC3986* characters like 'that'?", {rfc3986: true, smartTrim: 20} );
console.log(slug);
// Output: "allow-*rfc396*"

//