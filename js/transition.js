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
