var makeUrl = require('../lib/'),
    url, string;

string = "Möchtest du eine schöne URL?";

url = makeUrl(string);

console.log(url);

string = "Première neige repéré!!";
url = makeUrl(string);

console.log(url);

string = "---This Is A___”Test!!!!";
url = makeUrl(string);

console.log(url);


