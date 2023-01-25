import { testing, receive } from "./testAnalyzer";

testing("When using numbers", () => {
  const x = 1;

  receive(x).expect(1);
  receive(x).expect(2);
});

testing("When all test passsed", () => {
  const x = 1;

  receive(x).expect(1);
  receive(x + 1).expect(2);
});

testing("When using arrays", () => {
  const x = [1, 2, 3, 4, "a"];
  const y = [1, 2, 3, 4, "a"];
  const z = ["aa", 1, 2, 3, 4, "a"];

  receive(x).expect(y);
  receive(x).expect(z);
  receive([1, [2, 3, 4, [5]]]).expect([1, [2, 3, 4, [5]]]);
});

testing("When using arrays and objects", () => {
  receive([{ a: 1 }, { b: 2 }]).expect([{ a: 1 }, { b: 2 }]);
  receive([{ a: 1 }, { b: 2 }]).expect([{ a: 1 }, { b: 3 }]);
});

testing("When using objects", () => {
  receive({ Test: 1 }).expect({ Test: 1 });
  receive({ 1: "a" }).expect({ 1: "a" });
  receive({ Test: 1 }).expect({ Test: 2 });
});

testing("When using objects and arrays", () => {
  receive({ Test: [1] }).expect({ Test: 1 });
  receive({ 1: ["a"] }).expect({ 1: ["a"] });
  receive({ Test: [1, 2, [3]] }).expect({ Test: [1, 2, [3]] });
});

testing("When using objects with objects", () => {
  receive({ Test: { 1: "a" } }).expect({ Test: 1 });
  receive({ 1: { a: 1 } }).expect({ 1: { a: 1 } });
  receive({ Test: { b: [1, 2, [3]] } }).expect({ Test: { b: [1, 2, [4]] } });
});

testing("Falsy values passing", () => {
  receive(null).expect(null);
  receive(undefined).expect(undefined);
});

testing("Falsy values failing", () => {
  receive(null).expect(undefined);
  receive(undefined).expect(null);
  receive("").expect(null);
});

testing("Falsy values failing", () => {
  receive({}).expect(2);
});
