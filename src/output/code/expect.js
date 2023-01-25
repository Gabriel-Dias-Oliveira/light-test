"use strict";
exports.__esModule = true;
var resultMatcher_1 = require("./resultMatcher");
function expectArray(description, receive) {
    return function (expect) {
        var output = {
            description: description,
            receive: String(receive),
            expect: String(expect),
            passed: resultMatcher_1["default"].matchArrays(receive, expect)
        };
        printOutput(output);
    };
}
function expectBasic(description, receive) {
    return function (expect) {
        var output = {
            description: description,
            receive: String(receive),
            expect: String(expect),
            passed: resultMatcher_1["default"].matchBasicTypes(receive, expect)
        };
        printOutput(output);
    };
}
function expectObject(description, receive) {
    return function (expect) {
        var output = {
            description: description,
            receive: JSON.stringify(receive),
            expect: JSON.stringify(expect),
            passed: resultMatcher_1["default"].matchObjects(receive, expect)
        };
        printOutput(output);
    };
}
function printOutput(result) {
    if (!result.passed) {
        var header = "\n====\nTesting: \"".concat(result.description, "\" failed when:");
        var expectedOutput = "\nExpect: ".concat(result.expect);
        var receiveOutput = "\nReceive: ".concat(result.receive, "\n====");
        console.log("\u001B[31m".concat(header + expectedOutput + receiveOutput, "\u001B[0m "));
    }
}
exports["default"] = { expectBasic: expectBasic, expectArray: expectArray, expectObject: expectObject };
