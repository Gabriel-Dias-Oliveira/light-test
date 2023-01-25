"use strict";
exports.__esModule = true;
exports.areObjectsEqual = exports.areArraysEqual = exports.areValuesEqual = void 0;
function areValuesEqual(recieve, expect) {
    return recieve === expect;
}
exports.areValuesEqual = areValuesEqual;
function areArraysEqual(receive, expect) {
    if (receive.length !== expect.length)
        return false;
    var areEqual = receive.every(function (receiveElement, index) {
        var expectElement = expect[index];
        return matchElements(receiveElement, expectElement);
    });
    return areEqual;
}
exports.areArraysEqual = areArraysEqual;
function areObjectsEqual(receive, expect) {
    var isFalsyObject = !receive && !expect;
    if (isFalsyObject)
        return receive === expect;
    var receiveKeys = Object.keys(receive);
    var expectedKeys = Object.keys(expect);
    if (receiveKeys.length !== expectedKeys.length)
        return false;
    var areEqual = receiveKeys.every(function (key) {
        var expectElement = expect[key];
        var receiveElement = receive[key];
        return matchElements(receiveElement, expectElement);
    });
    return areEqual;
}
exports.areObjectsEqual = areObjectsEqual;
function matchElements(receive, expected) {
    var isArray = Array.isArray(expected) && Array.isArray(receive);
    if (isArray)
        return areArraysEqual(expected, receive);
    var isObject = typeof expected === "object" && typeof receive === "object";
    if (isObject)
        return areObjectsEqual(expected, receive);
    return areValuesEqual(receive, expected);
}
exports["default"] = { areValuesEqual: areValuesEqual, areArraysEqual: areArraysEqual, areObjectsEqual: areObjectsEqual };
