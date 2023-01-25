"use strict";
exports.__esModule = true;
exports.areObjectsEqual = exports.areArraysEqual = exports.areValuesEqual = void 0;
function areValuesEqual(recieve, expected) {
    var isFromCorrecType = typeof expected !== "object";
    return isFromCorrecType && recieve === expected;
}
exports.areValuesEqual = areValuesEqual;
function areArraysEqual(receive, expected) {
    if (!Array.isArray(expected))
        return false;
    if (receive.length !== expected.length)
        return false;
    var areEqual = receive.every(function (receiveElement, index) {
        var expectElement = expected[index];
        return matchElements(receiveElement, expectElement);
    });
    return areEqual;
}
exports.areArraysEqual = areArraysEqual;
function areObjectsEqual(receive, expected) {
    if (typeof expected !== "object")
        return false;
    var isFalsyObject = !receive && !expected;
    if (isFalsyObject)
        return receive === expected;
    var receiveKeys = Object.keys(receive);
    var expectedKeys = Object.keys(expected);
    if (receiveKeys.length !== expectedKeys.length)
        return false;
    var areEqual = receiveKeys.every(function (key) {
        var expectElement = expected[key];
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
