"use strict";
exports.__esModule = true;
exports.expectObject = exports.expectBasic = void 0;
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
function getFailedTestPayload(expect, receive) {
    return {
        expect: JSON.stringify(expect),
        receive: JSON.stringify(receive)
    };
}
exports["default"] = { expectBasic: expectBasic, expectObject: expectObject };
