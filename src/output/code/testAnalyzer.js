"use strict";
exports.__esModule = true;
exports.receive = exports.testing = void 0;
var expect_1 = require("./expect");
var testDescription;
function testing(description, runBlockOfTest) {
    testDescription = description;
    runBlockOfTest();
}
exports.testing = testing;
function receive(functionResult) {
    if (Array.isArray(functionResult)) {
        var expectArray_1 = expect_1["default"].expectArray(testDescription, functionResult);
        return {
            result: functionResult,
            expect: function (expect) {
                expectArray_1(expect);
            }
        };
    }
    if (typeof functionResult === 'object') {
        var expectObject_1 = expect_1["default"].expectObject(testDescription, functionResult);
        return {
            result: functionResult,
            expect: function (expect) {
                expectObject_1(expect);
            }
        };
    }
    var expectBasic = expect_1["default"].expectBasic(testDescription, functionResult);
    return {
        result: functionResult,
        expect: function (expect) {
            expectBasic(expect);
        }
    };
}
exports.receive = receive;
