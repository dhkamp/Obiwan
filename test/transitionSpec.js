var expect      = require('chai').expect,
    Transition  = require('../js/transition');

describe('Transition', function() {
    var T;

    beforeEach(function(){
        T = new Transition();
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

        it('should throw an error on wrong parameters', function() {
            expect(T.delay.bind(T, [400])).to.throw('Error at convertStringToMs() no valid parameter.');
        });

    });

    describe('duration()', function() {

        it('should get the transition duration', function() {
            expect(T.duration()).to.equal(50);
        });

        it('should set the transition duration', function() {
            T.duration('100ms');
            expect(T.duration()).to.equal(100);

            T.duration('250');
            expect(T.duration()).to.equal(250);

            T.duration('3s');
            expect(T.duration()).to.equal(3000);
        });

        it('should throw an error on wrong parameters', function() {
            expect(T.duration.bind(T, [400])).to.throw('Error at convertStringToMs() no valid parameter.');
        });

    });

    describe('property()', function() {

        it('should get the transition property', function() {
            expect(T.property()).to.equal('all');
        });

        it('should set the transition property', function() {
            T.property('width');
            expect(T.property()).to.equal('width');

            T.property(['width', 'height', 'background-color']);
            expect(T.property()).to.eql(['width', 'height', 'background-color']);
        });

        it('should throw an error on wrong parameters', function() {
            expect(T.property.bind(T, {width: true, height: true})).to.throw('Error at property() no valid parameter.');
        });

    });

    describe('type()', function() {

        it('should get the transition type', function() {
            expect(T.type()).to.equal('ease');
        });

        it('should set the transition type', function() {
            T.type('linear');
            expect(T.type()).to.equal('linear');
        });

        it('should throw an error on wrong parameters', function() {
            expect(T.type.bind(T, {type: 'linear'})).to.throw('Error ar type() no valid parameter.');
        });

    });

    describe('config()', function(){

        it('should get the transition configuration', function() {
            expect(T.config()).to.eql({
                delay: 0,
                type: 'ease',
                duration: 50,
                property: 'all'
            });
        });

        it('should set the transition configuration', function() {
            T.config({
                property: 'width',
                delay   : '10ms',
                type    : 'linear',
                duration: '1000'
            });

            expect(T.config()).to.eql({
                delay   : 10,
                type    : 'linear',
                duration: 1000,
                property: 'width'
            });
        });

    });

    describe('appendTo()', function() {

        it('should append the transition to the provided element', function() {

        });

    });
});
