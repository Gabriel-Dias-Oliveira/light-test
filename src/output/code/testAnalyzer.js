"use strict";
exports.__esModule = true;
exports.createListener = exports.receive = exports.testing = void 0;
var expect_1 = require("./expect");
var output_1 = require("./output");
var functionListener_1 = require("./functionListener");
var failedTests;
function testing(description, runBlockOfTest) {
    failedTests = [];
    runBlockOfTest();
    output_1["default"].printResult(description, failedTests);
}
exports.testing = testing;
function receive(receiveValue) {
    var isObject = typeof receiveValue === "object";
    var expect = isObject
        ? expect_1["default"].expectObject(receiveValue, failedTests)
        : expect_1["default"].expectBasic(receiveValue, failedTests);
    return {
        result: receiveValue,
        expect: expect,
        expectTruthy: expect_1["default"].expectTruthy(receiveValue, failedTests),
        expectFalsy: expect_1["default"].expectFalsy(receiveValue, failedTests),
        expectError: expect_1["default"].expectError(receiveValue, failedTests)
    };
}
exports.receive = receive;
function createListener(moduleToListen, key) {
    return functionListener_1["default"].createListener(moduleToListen, key);
}
exports.createListener = createListener;
exports["default"] = { testing: testing, receive: receive };
