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
