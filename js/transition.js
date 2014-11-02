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

    this.Delay = function (del) {
        if (arguments.length === 0) {
            return delay;
        } else {
            if (typeof del === 'string') {
                delay = Core.Utilities.convertStringToMs(del);
            } else {
                delay = del + '';
            }
            return _this;
        }
    };
};
