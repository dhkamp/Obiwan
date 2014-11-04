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

    describe('ensureElement()', function() {
        it('should get an element by id if the first argument is a string starting with #', function() {
        });

        it('should get a list of elements (element by class) if the first argument is a string starting with .', function() {
        });

        it('should do nothing if the first argument is an element', function() {
        });
    });
});
