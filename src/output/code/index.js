"use strict";
exports.__esModule = true;
var testAnalyzer_1 = require("./testAnalyzer");
(0, testAnalyzer_1.testing)("When using numbers", function () {
    var x = 1;
    (0, testAnalyzer_1.receive)(x).expect(1);
    (0, testAnalyzer_1.receive)(x).expect(2);
});
(0, testAnalyzer_1.testing)("When all test passsed", function () {
    var x = 1;
    (0, testAnalyzer_1.receive)(x).expect(1);
    (0, testAnalyzer_1.receive)(x + 1).expect(2);
});
(0, testAnalyzer_1.testing)("When using arrays", function () {
    var x = [1, 2, 3, 4, "a"];
    var y = [1, 2, 3, 4, "a"];
    var z = ["aa", 1, 2, 3, 4, "a"];
    (0, testAnalyzer_1.receive)(x).expect(y);
    (0, testAnalyzer_1.receive)(x).expect(z);
    (0, testAnalyzer_1.receive)([1, [2, 3, 4, [5]]]).expect([1, [2, 3, 4, [5]]]);
});
(0, testAnalyzer_1.testing)("When using arrays and objects", function () {
    (0, testAnalyzer_1.receive)([{ a: 1 }, { b: 2 }]).expect([{ a: 1 }, { b: 2 }]);
    (0, testAnalyzer_1.receive)([{ a: 1 }, { b: 2 }]).expect([{ a: 1 }, { b: 3 }]);
});
(0, testAnalyzer_1.testing)("When using objects", function () {
    (0, testAnalyzer_1.receive)({ Test: 1 }).expect({ Test: 1 });
    (0, testAnalyzer_1.receive)({ 1: "a" }).expect({ 1: "a" });
    (0, testAnalyzer_1.receive)({ Test: 1 }).expect({ Test: 2 });
});
(0, testAnalyzer_1.testing)("When using objects and arrays", function () {
    (0, testAnalyzer_1.receive)({ Test: [1] }).expect({ Test: 1 });
    (0, testAnalyzer_1.receive)({ 1: ["a"] }).expect({ 1: ["a"] });
    (0, testAnalyzer_1.receive)({ Test: [1, 2, [3]] }).expect({ Test: [1, 2, [3]] });
});
(0, testAnalyzer_1.testing)("When using objects with objects", function () {
    (0, testAnalyzer_1.receive)({ Test: { 1: "a" } }).expect({ Test: 1 });
    (0, testAnalyzer_1.receive)({ 1: { a: 1 } }).expect({ 1: { a: 1 } });
    (0, testAnalyzer_1.receive)({ Test: { b: [1, 2, [3]] } }).expect({ Test: { b: [1, 2, [4]] } });
});
(0, testAnalyzer_1.testing)("Falsy values passing", function () {
    (0, testAnalyzer_1.receive)(null).expect(null);
    (0, testAnalyzer_1.receive)(undefined).expect(undefined);
});
(0, testAnalyzer_1.testing)("Falsy values failing", function () {
    (0, testAnalyzer_1.receive)(null).expect(undefined);
    (0, testAnalyzer_1.receive)(undefined).expect(null);
    (0, testAnalyzer_1.receive)("").expect(null);
});
(0, testAnalyzer_1.testing)("From different types", function () {
    (0, testAnalyzer_1.receive)({}).expect(2);
    (0, testAnalyzer_1.receive)({}).expect([]);
    (0, testAnalyzer_1.receive)([]).expect({});
    (0, testAnalyzer_1.receive)(2).expect([]);
    (0, testAnalyzer_1.receive)(2).expect({});
});
