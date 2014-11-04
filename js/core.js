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

    function replace(str) {
    }

	return {
        Utilities: {
            convertStringToMs: convertStringToMs,
            ensureElement: ensureElement,
            replace: replace
        }
	};
}());
