"use strict";
exports.__esModule = true;
exports.expectFalsy = exports.expectTruthy = exports.expectObject = exports.expectBasic = void 0;
var resultMatcher_1 = require("./resultMatcher");
function expectBasic(receive, failedTests) {
    return function (expect) {
        var passed = resultMatcher_1["default"].areValuesEqual(receive, expect);
        if (passed)
            return;
        var failedTest = getFailedTestPayload(expect, receive);
        failedTests.push(failedTest);
    };
}
exports.expectBasic = expectBasic;
function expectObject(receive, failedTests) {
    return function (expect) {
        var passed = resultMatcher_1["default"].areObjectsEqual(receive, expect);
        if (passed)
            return;
        var failedTest = getFailedTestPayload(expect, receive);
        failedTests.push(failedTest);
    };
}
exports.expectObject = expectObject;
function expectFalsy(receive, failedTests) {
    return function () {
        var passed = resultMatcher_1["default"].isFalsy(receive);
        if (passed)
            return;
        var failedTest = getFailedTestPayload("Falsy value", receive);
        failedTests.push(failedTest);
    };
}
exports.expectFalsy = expectFalsy;
function expectTruthy(receive, failedTests) {
    return function () {
        var passed = resultMatcher_1["default"].isTruthy(receive);
        if (passed)
            return;
        var failedTest = getFailedTestPayload("Truthy value", receive);
        failedTests.push(failedTest);
    };
}
exports.expectTruthy = expectTruthy;
function getFailedTestPayload(expect, receive) {
    return {
        expect: JSON.stringify(expect),
        receive: JSON.stringify(receive)
    };
}
exports["default"] = { expectBasic: expectBasic, expectObject: expectObject, expectTruthy: expectTruthy, expectFalsy: expectFalsy };
