module.exports = (function () {

    function convertStringToMs(str) {
        if(str.indexOf('s') >= 0 && str.indexOf('ms') === -1) {
            return (parseInt(str, 10) * 1000);
        } else {
            return parseInt(str, 10);
        }
    }

	return {
        Utilities: {
            convertStringToMs: convertStringToMs
        }
	};
}());
