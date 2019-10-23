import Core from "./core";

class Transition {

    constructor() {

        this.transitionProperties = {
            duration : 50,
            type     : "ease",
            delay    : 0,
            cssProp  : "all"
        }
    }

    _bindTransition(elm) {

        let i, ii,
            style = '';
        const hasTransition = _hasTransition(elm);

        if (this.transitionProperties.cssProp instanceof Array) {

            for (i = 0, ii = this.transitionProperties.cssProp.length; i < ii; i++) {

                style += _getTransitionCSS(i);

                if (i < (ii - 1)) {

                    style += ',';
                }
            }
        }
        else {

            style += _getTransitionCSS();
        }

        if (hasTransition) {

            _setTransitionCSS(elm, style, true);
        }
        else {

            _setTransitionCSS(elm, style, false);
        }
    }

    _setTransitionCSS(elm, style, append) {

        if (append) {

            elm.style.transition += ',' + style;
        }
        else {

            elm.style.transition = style;
        }

        elm.style.webkitTransition = elm.style.transition;
        elm.style.MozTransition    = elm.style.transition;
        elm.style.msTransition     = elm.style.transition;
        elm.style.OTransition      = elm.style.transition;
    }

    _getTransitionCSS(index) {

        let cssProp  = this.transitionProperties.cssProp,
            duration = this.transitionProperties.duration,
            type     = this.transitionProperties.type,
            delay    = this.transitionProperties.delay;

        return index !== undefined
            ? cssProp[index] + ' ' + duration + 'ms ' + type + ' ' + delay + 'ms'
            : cssProp + ' ' + duration + 'ms ' + type + ' ' + delay + 'ms';
    }

    _hasTransition(elm) {
        return !!elm.style.webkitTransition
            || !!elm.style.MozTransition
            || !!elm.style.msTransition
            || !!elm.style.OTransition
            || !!elm.style.transition;
    }

    config(cfg) {

        let prop;

        if (arguments.length === 0) {

            return this.transitionProperties;
        }

        for (prop in cfg) {

            switch (prop.toLowerCase()) {
                case 'duration':
                case 'dur':
                    duration(cfg[prop]);
                    break;
                case 'type':
                    type(cfg[prop]);
                    break;
                case 'delay':
                case 'del':
                    delay(cfg[prop]);
                    break;
                case 'property':
                case 'prop':
                    property(cfg[prop]);
                    break;
                case 'appendTo':
                    appendTo(cfg[prop]);
                    break;
            }
        }

        return this.transitionProperties;
    }

    delay(del) {

        if (arguments.length === 0) {

            return Core.Utilities.convertStringToMs(this.transitionProperties.delay);
        }
        else {

            this.transitionProperties.delay = Core.Utilities.convertStringToMs(del);
            return this.transitionProperties.delay;
        }
    }

    duration(dur) {

        if (arguments.length === 0) {

            return Core.Utilities.convertStringToMs(this.transitionProperties.duration);
        }
        else {

            this.transitionProperties.duration = Core.Utilities.convertStringToMs(dur);
            return this.transitionProperties.duration;
        }
    }

    property(prop) {

        if (arguments.length === 0) {

            return this.transitionProperties.cssProp;
        }
        else if (typeof prop === 'string' || prop instanceof Array) {

            this.transitionProperties.cssProp = prop;
            return transitionProperties.cssProp;
        }
        else {

            throw new Error(Core.Utilities.replace(Core.Constants.Error, 'property()'));
        }
    }

    type(transType) {

        if (arguments.length === 0) {

            return this.transitionProperties.type;
        }
        else if (typeof transType === 'string') {

            this.transitionProperties.type = transType;
            return this.transitionProperties.type;
        }
        else {

            throw new Error(Core.Utilities.replace(Core.Constants.Error, 'type()'));
        }
    }

    appendTo(elm) {

        let i, ii,
            element = Core.Utilities.ensureElement(elm);

        if (element instanceof HTMLCollection) {

            for (i = 0, ii = element.length; i < ii; i++) {

                _bindTransition(element[i]);
            }
        }
        else {

            _bindTransition(element);
        }
    }
}

export let transition = new Transition();
