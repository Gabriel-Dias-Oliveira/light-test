"use strict";
exports.__esModule = true;
var testAnalyzer_1 = require("../../code/testAnalyzer");
var fileToBeListen_1 = require("./fileToBeListen");
var listenToLog = (0, testAnalyzer_1.createListener)(fileToBeListen_1["default"], "consoleMessage");
fileToBeListen_1["default"].consoleMessage(); // Hello!
listenToLog.mockImplementation(function () { return console.log("Mocked!"); });
fileToBeListen_1["default"].consoleMessage(); // Mocked!
var listenToReturn = (0, testAnalyzer_1.createListener)(fileToBeListen_1["default"], "withReturn");
console.log(fileToBeListen_1["default"].withReturn()); // true
listenToReturn.mockReturn(false);
console.log(fileToBeListen_1["default"].withReturn()); // false
