import { testing, receive, when } from "../../dist/code/testAnalyzer.js";
import matchers from "../../dist/code/resultMatcher.js";

testing("Function areValuesEqual", () => {
  const f = matchers.areValuesEqual;

  when("Values are different, it should return false", () => {
    receive(f(null, undefined)).expectFalsy();
    receive(f(0, 3)).expectFalsy();
    receive(f("Test", "")).expectFalsy();
  });

  when("Values are equal, it should return true", () => {
    receive(f(0, 0)).expectTruthy();
    receive(f("Test", "Test")).expectTruthy();
  });
});

testing("Function areObjectsEqual", () => {
  const f = matchers.areObjectsEqual;
  const object1 = { Test: 1, Test2: "Hey!" };
  const object2 = { Test: 2, Test2: "Hoy!" };
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  when("Objects are different, it should return false", () => {
    receive(f(object1, object2)).expectFalsy();
    receive(f(object1, {})).expectFalsy();
    receive(f(array1, [])).expectFalsy();
    receive(f(array1, array2)).expectFalsy();
  });

  when("Objects are eqaul, it should return false", () => {
    receive(f(object1, object1)).expectTruthy();
    receive(f(object2, object2)).expectTruthy();
    receive(f(array1, array1)).expectTruthy();
    receive(f(array2, array2)).expectTruthy();
  });
});

testing("Function isFalsy", () => {
  const f = matchers.isFalsy;

  when("Value is truthy, it should be false", () => {
    receive(f("Hey")).expectFalsy();
    receive(f(1)).expectFalsy();
  });

  when("Value is falsy, it should be true", () => {
    receive(f()).expectTruthy();
    receive(f(null)).expectTruthy();
    receive(f("")).expectTruthy();
    receive(f(0)).expectTruthy();
  });
});

testing("Function isTruthy", () => {
  const f = matchers.isTruthy;

  when("Value is falsy, it should be false", () => {
    receive(f()).expectFalsy();
    receive(f(null)).expectFalsy();
    receive(f("")).expectFalsy();
    receive(f(0)).expectFalsy();
  });

  when("Value is truthy, it should be true", () => {
    receive(f("Hey")).expectTruthy();
    receive(f(1)).expectTruthy();
  });
});
