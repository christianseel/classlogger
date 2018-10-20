let ClassLogger = function (source, enableLogging) {
    source.logger = {};
    if (!window.console) return function () {};

    if (typeof enableLogging === 'undefined' || enableLogging === true) {
        for (var m in console) {
            if (typeof console[m] === 'function') {
                let classname = typeof source.getClassName === 'function' ? source.getClassName() : source.constructor.name;
                source.logger[m] = console[m].bind(window.console, "%c"+classname + ':', 'font-weight:bold')
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

export default ClassLogger;
