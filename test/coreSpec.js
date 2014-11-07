var expect  = require('chai').expect,
    Core    = require('../js/core');

describe('Core.Utilities', function () {

    describe('convertStringToMs()', function () {
        it('should convert a numeric string to milliseconds', function () {
            expect(Core.Utilities.convertStringToMs('500ms')).to.equal(500);
            expect(Core.Utilities.convertStringToMs('10s')).to.equal(10000);
            expect(Core.Utilities.convertStringToMs('15')).to.equal(15);
            expect(Core.Utilities.convertStringToMs.bind(Core.Utilities, {a:25})).to.throw('Error at convertStringToMs() no valid parameter.');
        });
    });

    describe('replace()', function() {
        it('should replace the placeholders in a string with provided strings', function() {
            expect(Core.Utilities.replace('This is a {0}string', 'Test')).to.equal('This is a Teststring');
            expect(Core.Utilities.replace('This {0} a Test{1}', 'is', 'string')).to.equal('This is a Teststring');
        });
    });
});
