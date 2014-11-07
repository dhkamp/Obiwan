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

    function replace() {
        var i, j,
            target = arguments[0];
        if(typeof target === 'string') {
            for(i = 1, j = arguments.length; i < j; i++) {
                target = target.replace('{' + (i - 1) + '}', arguments[i]);
            }
        }
        return target;
    }

	return {
        Utilities: {
            convertStringToMs: convertStringToMs,
            ensureElement: ensureElement,
            replace: replace
        },
        Constants: {
            Error: 'Error at {0} no valid parameter.'
        }
	};
}());

},{}],2:[function(require,module,exports){
window.Obiwan = window.Obiwan || {
    Transition: require('./transition')
};

},{"./transition":3}],3:[function(require,module,exports){
var Core = require('./core');

module.exports = function () {
    var _this       = this,
        duration    = 50,
        type        = 'ease',
        delay       = 0,
        cssprop     = 'all';

    function bindTransition(elm) {
        var i, j,
            style   = '',
            has     = hasTransition(elm);

        if(cssprop instanceof Array) {
            for(i = 0, j = cssprop.length; i < j; i++) {
                style += getTransitionCSS(i);
                if(i < (j - 1)) {
                    style += ',';
                }
            }
        } else {
            style += getTransitionCSS();
        }

        if(has) {
            setTransitionCSS(elm, style, true);
        } else {
            setTransitionCSS(elm, style, false);
        }
    }

    function setTransitionCSS(elm, style, append) {
        if(append) {
            elm.style.transition += ',' + style;
        } else {
            elm.style.transition = style;
        }

        elm.style.webkitTransition  = elm.style.transition;
        elm.style.MozTransition     = elm.style.transition;
        elm.style.msTransition      = elm.style.transition;
        elm.style.OTransition       = elm.style.transition;
    }

    function getTransitionCSS(index) {
        if(index !== undefined) {
            return cssprop[index] + ' ' + duration + 'ms ' + type + ' ' + delay + 'ms';
        } else {
            return cssprop + ' ' + duration + 'ms ' + type + ' ' + delay + 'ms';
        }
    }

    function hasTransition(elm) {
        return !!elm.style.webkitTransition   ||
                !!elm.style.MozTransition     ||
                !!elm.style.msTransition      ||
                !!elm.style.OTransition       ||
                !!elm.style.transition
    }

    this.config = function (cfg) {
        var i,
            j,
            prop;

        if (arguments.length === 0) {
            return {
                duration    : duration,
                type        : type,
                delay       : delay,
                property    : cssprop
            };
        } else {
            for (prop in cfg) {
                switch (prop.toLowerCase()) {
                case 'duration':
                case 'dur':
                    _this.duration(cfg[prop]);
                    break;
                case 'type':
                    _this.type(cfg[prop]);
                    break;
                case 'delay':
                case 'del':
                    _this.delay(cfg[prop]);
                    break;
                case 'property':
                case 'prop':
                    _this.property(cfg[prop]);
                    break;
                case 'appendTo':
                    _this.appendTo(cfg[prop]);
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
            delay = Core.Utilities.convertStringToMs(del);
            return _this;
        }
    };

    this.duration = function (dur) {
        if (arguments.length === 0) {
            return Core.Utilities.convertStringToMs(duration);
        } else {
            duration = Core.Utilities.convertStringToMs(dur);
            return _this;
        }
    };

    this.property = function (prop) {
        if (arguments.length === 0) {
            return cssprop;
        } else if (typeof prop === 'string' || prop instanceof Array) {
            cssprop = prop;
            return _this;
        } else {
            throw new Error(Core.Utilities.replace(Core.Constants.Error, 'property()'));
        }
    };

    this.type = function (transType) {
        if (arguments.length === 0) {
            return type;
        } else if (typeof transType === 'string') {
            type = transType;
            return _this;
        } else {
            throw new Error(Core.Utilities.replace(Core.Constants.Error, 'type()'));
        }
    };

    this.appendTo = function(elm) {
        var i, j,
            element = Core.Utilities.ensureElement(elm);

        if(element instanceof HTMLCollection) {
            for (i = 0, j = element.length; i < j; i++) {
                bindTransition(element[i]);
            }
        } else {
            bindTransition(element);
        }
    };
};

},{"./core":1}]},{},[2]);
