var getSlug = require('../lib'),
    slug;

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", "*");
console.log(slug);
console.log("\n");
// Output: schoener*titel*laesst*gruessen*bel*ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {separator: "_"});
console.log(slug);
console.log("\n");
// Output: schoener_titel_laesst_gruessen_bel_ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uric: true});
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uricNoSlash: true});
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {mark: true});
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen!-bel-ete-!

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {truncate: 20});
console.log(slug);
console.log("\n");
// Output: schoener-titel

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {maintainCase: true});
console.log(slug);
console.log("\n");
// Output: Schoener-Titel-laesst-gruessen-Bel-ete

slug = getSlug("Äpfel & Birnen!", {lang: 'de'});
console.log(slug);
console.log("\n");
// Output: aepfel-und-birnen

slug = getSlug('Foo & Bar * Baz', {custom: {'&': ' doo '}, uric:true } );
console.log(slug);
console.log("\n");
// Output: foo-doo-bar-baz

slug = getSlug('Foo ♥ Bar');
console.log(slug);
console.log("\n");
// Output: foo-love-bar


slug = getSlug('Foo & Bar | Baz * Doo', {custom:{'*': "Boo"},mark:true});
console.log(slug);
console.log("\n");
// Output: foo-and-bar-or-baz-boo-doo



//