"use strict";
exports.__esModule = true;
exports.expectObject = exports.expectArray = exports.expectBasic = void 0;
var resultMatcher_1 = require("./resultMatcher");
function expectBasic(receive, failedTests) {
    return function (expect) {
        var passed = resultMatcher_1["default"].areValuesEqual(receive, expect);
        if (passed)
            return;
        var failedTest = {
            receive: String(receive),
            expect: String(expect)
        };
        failedTests.push(failedTest);
    };
}
exports.expectBasic = expectBasic;
function expectArray(receive, failedTests) {
    return function (expect) {
        var passed = resultMatcher_1["default"].areArraysEqual(receive, expect);
        if (passed)
            return;
        var failedTest = {
            receive: JSON.stringify(receive),
            expect: JSON.stringify(expect)
        };
        failedTests.push(failedTest);
    };
}
exports.expectArray = expectArray;
function expectObject(receive, failedTests) {
    return function (expect) {
        var passed = resultMatcher_1["default"].areObjectsEqual(receive, expect);
        if (passed)
            return;
        var failedTest = {
            receive: JSON.stringify(receive),
            expect: JSON.stringify(expect)
        };
        failedTests.push(failedTest);
    };
}
exports.expectObject = expectObject;
exports["default"] = { expectBasic: expectBasic, expectArray: expectArray, expectObject: expectObject };
