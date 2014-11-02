var expect      = require('chai').expect,
    Transition  = require('../../js/transition');

describe('Transition', function() {
    describe('Config()', function(){

        it('should set the transition configuration', function() {
            var Trans   = new Transition();
            Trans.Config({
                property    : 'width',
                delay       : '10ms',
                type        : 'linear',
                duration    : '1000'
            });

            var Cfg = Trans.Config();

            expect(Cfg.delay).to.equal('10ms');
            expect(Cfg.type).to.equal('linear');
            expect(Cfg.duration).to.equal('1000ms');
            expect(Cfg.property).to.equal('width');
        });

        it('should return the configuration object when no parameter is given', function() {
            var Trans   = new Transition(),
                Cfg     = Trans.Config();

            expect(Cfg.delay).to.equal('0ms');
            expect(Cfg.type).to.equal('ease');
            expect(Cfg.duration).to.equal('50ms');
            expect(Cfg.property).to.equal('all');
        });

    });

    describe('Delay()', function(){
    });

    describe('Duration()', function() {
    });

    describe('Property()', function() {
    });

    describe('Type()', function() {
    });
});
