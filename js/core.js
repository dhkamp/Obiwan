class Core {

    constructor() {

        this.Constants = {
            Error: 'Error at {0} no valid parameter.'
        }

        this.Utilities = {
            convertStringToMs : _convertStringToMs,
            ensureElement     : _ensureElement,
            replace           : _replace
        }
    }

    _convertStringToMs(str) {

        if (typeof str === 'string') {

            return str.indexOf('s') >= 0 && str.indexOf('ms') === -1
                ? parseInt(str, 10) * 1000
                : parseInt(str, 10);
        }
        else if (typeof str === 'number') {

            return str;
        }
        else {
            throw new Error('Error at convertStringToMs() no valid parameter.');
        }
    }

    _ensureElement(selector) {

        if (typeof selector === 'string') {

            return selector[0] === '#'
                ? document.getElementById(selector.substring(1))
                : document.getElementsByClassName(selector.substring(1));
        }
        else {

            return selector;
        }
    }

    _replace() {

        let i, ii;
        const target = arguments[0];

        if (typeof target === 'string') {

            for(i = 1, ii = arguments.length; i < ii; i++) {

                target = target.replace('{' + (i - 1) + '}', arguments[i]);
            }
        }
        return target;
    }
}

export let core = new Core();