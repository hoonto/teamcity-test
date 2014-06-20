var should = require('chai').should();
var expect = require('chai').expect;

describe('Test',function() {
    var sut;

    beforeEach(function() {
        sut = false;
    });

    describe('when run',function() {
        it('should be ok',function() {
            sut.should.be.true;
        })
    })
})
