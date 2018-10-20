let Logger = function (source) {
    source.logger = {};
    if (!window.console) return function () {};

    if (source.debug === true) {
        for (var m in console) {
            if (typeof console[m] === 'function') {
                source.logger[m] = console[m].bind(window.console, "%c"+source.constructor.name.toUpperCase() + ':', 'font-weight:bold')
            }
        }
    } else {
        for (var m in console) {
            if (typeof console[m] == 'function') {
                source.logger[m] = function () {};
            }
        }
    }
    return source.logger
};

export default Logger;
