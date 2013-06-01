'use strict';
var getSlug = require('../lib'),
    slug;

console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug); // Output: schoener-titel-laesst-gruessen-bel-ete
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", "*");
console.log(slug); // Output: schoener*titel*laesst*gruessen*bel*ete
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    separator: "_"
});
console.log(slug); // Output: schoener_titel_laesst_gruessen_bel_ete
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    uric: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    uricNoSlash: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen?-bel-ete
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    mark: true
});
console.log(slug); // Output: schoener-titel-laesst-gruessen!-bel-ete-!
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    truncate: 20
});
console.log(slug); // Output: schoener-titel
console.log("\n");

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    maintainCase: true
});
console.log(slug); // Output: Schoener-Titel-laesst-gruessen-Bel-ete
console.log("\n");

slug = getSlug("Äpfel & Birnen!", {
    lang: 'de'
});
console.log(slug); // Output: aepfel-und-birnen
console.log("\n");

slug = getSlug('Foo & Bar * Baz', {
    custom: {
        '&': ' doo '
    },
    uric: true
});
console.log(slug); // Output: foo-doo-bar-baz
console.log("\n");

slug = getSlug('Foo ♥ Bar');
console.log(slug); // Output: foo-love-bar
console.log("\n");

slug = getSlug('Foo & Bar | (Baz) * Doo', {
    custom: {
        '*': "Boo"
    },
    mark: true
});
console.log(slug); // Output: foo-and-bar-or-(baz)-boo-doo
console.log("\n");