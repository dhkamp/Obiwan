(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function () {

    function convertStringToMs(str) {
        if (typeof str === 'string') {
            if (str.indexOf('s') >= 0 && str.indexOf('ms') === -1) {
                return (parseInt(str, 10) * 1000);
            } else {
                return parseInt(str, 10);
            }
        } else if (typeof str === 'number') {
            return str;
        } else {
            throw new Error('Error at convertStringToMs() no valid parameter.');
        }
    }

    function ensureElement(selector) {
        if (typeof selector === 'string') {
            if (selector[0] === '#') {
                return document.getElementById(selector.substring(1));
            } else if (selector[0] === '.') {
                return document.getElementsByClassName(selector.substring(1));
            }
        } else {
            return selector;
        }
    }

	return {
        Utilities: {
            convertStringToMs: convertStringToMs,
            ensureElement: ensureElement
        }
	};
}());

},{}],2:[function(require,module,exports){
var Transition = require('./transition');

var ttest = 'one';

},{"./transition":3}],3:[function(require,module,exports){
var Core = require('./core');

module.exports = function () {
    var _this       = this,
        duration    = '50ms',
        type        = 'ease',
        delay       = '0ms',
        property    = 'all';

    this.Config = function (cfg) {
        var i,
            j,
            prop;

        if (arguments.length === 0) {
            return {
                duration    : duration,
                type        : type,
                delay       : delay,
                property    : property
            };
        } else {
            for (prop in cfg) {
                switch (prop.toLowerCase()) {
                case 'duration':
                case 'dur':
                    //_self.Duration(cfg[property]);
                    break;
                case 'type':
                    //_self.Type(cfg[property]);
                    break;
                case 'delay':
                case 'del':
                    //_self.Delay(cfg[property]);
                    break;
                case 'property':
                case 'prop':
                    //_self.Property(cfg[property]);
                    break;
                }
            }
            return _this;
        }
    };

    this.delay = function (del) {
        if (arguments.length === 0) {
            return Core.Utilities.convertStringToMs(delay);
        } else {
            if (typeof del === 'string') {
                delay = Core.Utilities.convertStringToMs(del);
            } else {
                delay = del + '';
            }
            return _this;
        }
    };

    this.Duration = function(duration) {
        if(arguments.length === 0) {
            return dur;
        } else {
            if(typeof duration === 'string') {
                dur = Gaps.Utilities.StringToMs(duration);
            } else {
                dur = duration + '';
            }
            append();
            return _self;
        }
    };

    this.Property = function(property) {
        if(arguments.length === 0) {
            return prop;
        } else {
            if (typeof property === 'string') {
                prop = property;
            } else {
                prop = property.join(',').replace(' ', '') + '';
            }
            append();
            return _self;
        }
    };

    this.Type = function(type) {
        if(arguments.length === 0) {
            return type;
        } else {
            type = transType;
            append();
            return _self;
        }
    };
};

},{"./core":1}]},{},[2]);
