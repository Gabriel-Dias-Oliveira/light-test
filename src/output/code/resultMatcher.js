"use strict";
exports.__esModule = true;
exports.isFalsy = exports.isTruthy = exports.areObjectsEqual = exports.areValuesEqual = void 0;
function areValuesEqual(recieve, expected) {
    var isFromCorrecType = typeof expected !== "object";
    return isFromCorrecType && recieve === expected;
}
exports.areValuesEqual = areValuesEqual;
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
function isFalsy(receive) {
    var falsyValues = [0, "", false, , null, undefined];
    return falsyValues.some(function (element) { return element === receive; });
}
exports.isFalsy = isFalsy;
function isTruthy(receive) {
    return !isFalsy(receive);
}
exports.isTruthy = isTruthy;
function matchElements(receive, expected) {
    var isObject = typeof expected === "object" && typeof receive === "object";
    if (isObject)
        return areObjectsEqual(expected, receive);
    return areValuesEqual(receive, expected);
}
exports["default"] = { areValuesEqual: areValuesEqual, areObjectsEqual: areObjectsEqual, isTruthy: isTruthy, isFalsy: isFalsy };
