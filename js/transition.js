var Core = require('./core');

module.exports = function () {
    var _this       = this,
        duration    = 50,
        type        = 'ease',
        delay       = 0,
        cssprop     = 'all';

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
            throw new Error('Error at property() no valid parameter.');
        }
    };

    this.type = function (transType) {
        if (arguments.length === 0) {
            return type;
        } else if (typeof transType === 'string') {
            type = transType;
            return _this;
        } else {
            throw new Error('Error ar type() no valid parameter.');
        }
    };
};
