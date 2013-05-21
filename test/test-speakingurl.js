var makeUrl = require('../lib/');
require('should');

describe('make a speaking Url', function () {

    describe('testing string without transformation neccacary', function () {

        var url = makeUrl("this-is-a-test");

        it('should be a string with 14 chars', function () {
            url.should.be.a('string');
            url.should.have.length(14);
            url.should.match(/[a-z0-9-]/);
            url.should.be.equal('this-is-a-test');
        });
    });

    describe('testing uppercase string', function () {

        var url = makeUrl("__---This_Is_A_Test!!");

        it('should be a string with 14 chars', function () {
            url.should.be.a('string');
            url.should.have.length(14);
            url.should.match(/[a-z0-9-]/);

            url.should.be.equal('this-is-a-test');
        });
    });

    describe('testing string with special characters', function () {

        var url = makeUrl("Check for special chars!\"§$%&/()=?`´*+'_-:.;.'");

        it('should be a string with 23 chars', function () {
            url.should.be.a('string');
            url.should.have.length(23);
            url.should.match(/[a-z0-9-]/);
            url.should.be.equal('check-for-special-chars');

        });
    });

    describe('testing unicode string', function () {

        var url = makeUrl("Première neige ”repéré”!!");

        it('should be a string with 21 chars', function () {
            url.should.be.a('string');
            url.should.have.length(21);
            url.should.be.equal('premiere-neige-repere');

        });
    });

});