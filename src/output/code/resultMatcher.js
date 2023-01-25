"use strict";
exports.__esModule = true;
function matchBasicTypes(recieve, expect) {
    return recieve === expect;
}
function matchArrays(recieve, expect) {
    if (recieve.length !== expect.length)
        return false;
    var isEqual = recieve.every(function (recieveElement, index) {
        var expectElement = expect[index];
        var areArays = Array.isArray(expectElement) && Array.isArray(recieveElement);
        if (areArays)
            return matchArrays(expectElement, recieveElement);
        var areObjects = typeof expectElement === 'object' && typeof recieveElement === 'object';
        if (areObjects)
            return matchObjects(expectElement, recieveElement);
        return matchBasicTypes(recieveElement, expectElement);
    });
    return isEqual;
}
function matchObjects(recieve, expect) {
    var recieveKeys = Object.keys(recieve);
    var expectedKeys = Object.keys(expect);
    if (recieveKeys.length !== expectedKeys.length)
        return false;
    var isEqual = recieveKeys.every(function (key) {
        var expectElement = expect[key];
        var recieveElement = recieve[key];
        var areArays = Array.isArray(expectElement) && Array.isArray(recieveElement);
        if (areArays)
            return matchArrays(expectElement, recieveElement);
        var areObjects = typeof expectElement === 'object' && typeof recieveElement === 'object';
        if (areObjects)
            return matchObjects(expectElement, recieveElement);
        return matchBasicTypes(recieveElement, expectElement);
    });
    return isEqual;
}
exports["default"] = { matchBasicTypes: matchBasicTypes, matchArrays: matchArrays, matchObjects: matchObjects };
