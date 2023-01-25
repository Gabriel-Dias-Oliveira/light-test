"use strict";
exports.__esModule = true;
exports.printResult = void 0;
function printResult(test, failedTests) {
    var hasTestWorked = failedTests.length === 0;
    if (hasTestWorked) {
        console.log("\n\u001B[32mTesting: \"".concat(test, "\" worked successfully\n\u001B[0m"));
        return;
    }
    var header = "\u001B[31m\n====\nTesting: \"".concat(test, "\" failed when:\n");
    var messages = failedTests.map(function (failedTest) {
        return "- Expect: ".concat(failedTest.expect, "\n- Receive: ").concat(failedTest.receive);
    });
    console.log("".concat(header).concat(messages.join("\n\n"), "\n===\u001B[0m"));
}
exports.printResult = printResult;
exports["default"] = { printResult: printResult };
