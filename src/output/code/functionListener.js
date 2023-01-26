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
        updateStatus(status);
        return functionToListen();
    };
    return {
        mockImplementation: function (mockedImplementation) {
            moduleToListen[key] = function () {
                updateStatus(status);
                return mockedImplementation();
            };
        },
        mockReturn: function (valueToReturn) {
            var listenedFunction = moduleToListen[key];
            moduleToListen[key] = function () {
                listenedFunction();
                updateStatus(status);
                return valueToReturn;
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
