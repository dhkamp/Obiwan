var expect      = require('chai').expect,
    Transition  = require('../js/transition');

describe('Transition', function() {
    var T;

    beforeEach(function(){
        T = new Transition();
    });

    describe('config()', function(){

        it('should get the transition configuration', function() {
            expect(T.Config()).to.eql({
                delay: '0ms',
                type: 'ease',
                duration: '50ms',
                property: 'all'
            });
        });

        it('should set the transition configuration', function() {
            T.Config({
                property: 'width',
                delay   : '10ms',
                type    : 'linear',
                duration: '1000'
            });

            expect(T.Config()).to.eql({
                delay   : '10ms',
                type    : 'linear',
                duration: '1000',
                property: 'width'
            });
        });

    });

    describe('delay()', function(){

        it('should get the transition delay', function() {
            expect(T.delay()).to.equal(0);
        });

        it('should set the transition delay', function() {
            T.delay('30ms');
            expect(T.delay()).to.equal(30);

            T.delay('50');
            expect(T.delay()).to.equal(50);

            T.delay('7s');
            expect(T.delay()).to.equal(7000);
        });

    });

    describe('duration()', function() {

        it('should get the transition duration', function() {
            expect(T.Duration()).to.equal(50);
        });

        it('should set the transition duration', function() {
            T.Duration('100ms');
            expect(T.Duration()).to.equal(100);

            T.Duration('250');
            expect(T.Duration()).to.equal(250);

            T.Duration('3s');
            expect(T.Duration()).to.equal(3000);
        });

    });

    describe('property()', function() {

        it('should get the transition property', function() {
            expect(T.Property()).to.equal('all');
        });

        it('should set the transition property', function() {
            T.Property('width');
            expect(T.Property()).to.equal('width');

            T.Property(['width', 'height', 'background-color']);
            expect(T.Property()).to.equal(['width', 'height', 'background-color']);
        });

    });

    describe('type()', function() {

        it('should get the transition type', function() {
            expect(T.Property()).to.equal('ease');
        });

        it('should set the transition type', function() {
            T.Type('linear');
            expect(T.Type()).to.equal('linear');
        });
    });
});
