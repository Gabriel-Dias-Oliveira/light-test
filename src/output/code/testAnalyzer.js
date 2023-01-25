"use strict";
exports.__esModule = true;
exports.receive = exports.testing = void 0;
var expect_1 = require("./expect");
var output_1 = require("./output");
var testDescription;
var failedTests;
function testing(description, runBlockOfTest) {
    testDescription = description;
    failedTests = [];
    runBlockOfTest();
    output_1["default"].printResult(testDescription, failedTests);
}
exports.testing = testing;
function receive(receiveValue) {
    if (Array.isArray(receiveValue)) {
        var expectArray_1 = expect_1["default"].expectArray(receiveValue, failedTests);
        return {
            result: receiveValue,
            expect: function (expect) {
                expectArray_1(expect);
            }
        };
    }
    if (typeof receiveValue === "object") {
        var expectObject_1 = expect_1["default"].expectObject(receiveValue, failedTests);
        return {
            result: receiveValue,
            expect: function (expect) {
                expectObject_1(expect);
            }
        };
    }
    var expectBasic = expect_1["default"].expectBasic(receiveValue, failedTests);
    return {
        result: receiveValue,
        expect: function (expect) {
            expectBasic(expect);
        }
    };
}
exports.receive = receive;
exports["default"] = { testing: testing, receive: receive };
