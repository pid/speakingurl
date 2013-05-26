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

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {uric_no_slash: true});
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen?-bel-ete

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {mark: true});
console.log(slug);
console.log("\n");
// Output: schoener-titel-laesst-gruessen!-bel-ete-!

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {trim: 20});
console.log(slug);
console.log("\n");
// Output: schoener-titel

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {maintainCase: true});
console.log(slug);
console.log("\n");
// Output: Schoener-Titel-laesst-gruessen-Bel-ete






//