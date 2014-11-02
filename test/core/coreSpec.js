var expect  = require('chai').expect,
    Core    = require('../../js/core');

describe('Core.Utilities', function() {
    describe('convertStringToMs()', function() {
        it('should convert a numeric string to milliseconds', function() {
            var strMS   = '500ms',
                strS    = '10s',
                strNum  = '15';

            var str_1 = Core.Utilities.convertStringToMs(strMS);
            var str_2 = Core.Utilities.convertStringToMs(strS);
            var str_3 = Core.Utilities.convertStringToMs(strNum);

            expect(str_1).to.equal(500);
            expect(str_2).to.equal(10000);
            expect(str_3).to.equal(15);
        });
    });
});
