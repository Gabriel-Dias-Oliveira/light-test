"use strict";
exports.__esModule = true;
exports.createListener = void 0;
function createListener(moduleToListen, key) {
    if (!moduleToListen[key])
        throw new Error("Failed to add listener \"".concat(key, "\" not found"));
    if (typeof moduleToListen[key] !== "function")
        throw new Error("Failed to add listener \"".concat(moduleToListen[key], "\" is not a function"));
    var functionToListen = moduleToListen[key];
    var status = {
        called: false,
        callTimes: 0
    };
    moduleToListen[key] = function () {
        functionToListen();
        updateStatus(status);
    };
    return {
        changeImplementation: function (mockedImplementation) {
            moduleToListen[key] = function () {
                mockedImplementation();
                updateStatus(status);
            };
        },
        status: status
    };
}
exports.createListener = createListener;
function updateStatus(status) {
    status.called = true;
    status.callTimes += 1;
}
exports["default"] = { createListener: createListener };
