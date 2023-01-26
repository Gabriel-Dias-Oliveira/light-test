"use strict";
exports.__esModule = true;
var testAnalyzer_1 = require("../../code/testAnalyzer");
var fileToBeMocked_1 = require("./fileToBeMocked");
var listenToLog = (0, testAnalyzer_1.createListener)(fileToBeMocked_1["default"], "consoleMessage");
fileToBeMocked_1["default"].consoleMessage(); // Hello!
listenToLog.mockImplementation(function () { return console.log("Mocked!"); });
fileToBeMocked_1["default"].consoleMessage(); // Mocked!
var listenToReturn = (0, testAnalyzer_1.createListener)(fileToBeMocked_1["default"], "withReturn");
console.log(fileToBeMocked_1["default"].withReturn()); // true
listenToReturn.mockReturn(false);
console.log(fileToBeMocked_1["default"].withReturn()); // false
