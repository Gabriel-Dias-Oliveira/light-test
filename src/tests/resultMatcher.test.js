import { testing, receive } from "../../dist/code/testAnalyzer.js";
import matchers from "../../dist/code/resultMatcher.js";

testing("Function areValuesEqual", () => {
  const f = matchers.areValuesEqual;

  receive(f(null, undefined)).expectFalsy();
  receive(f(0, 3)).expectFalsy();
  receive(f("Test", "")).expectFalsy();
  receive(f(0, 0)).expectTruthy();
  receive(f("Test", "Test")).expectTruthy();
});

testing("Function areObjectsEqual", () => {
  const f = matchers.areObjectsEqual;

  const object1 = { Test: 1, Test2: "Hey!" };
  const object2 = { Test: 2, Test2: "Hoy!" };
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  receive(f(object1, object2)).expectFalsy();
  receive(f(object1, {})).expectFalsy();
  receive(f(array1, [])).expectFalsy();
  receive(f(array1, array2)).expectFalsy();

  receive(f(object1, object1)).expectTruthy();
  receive(f(object2, object2)).expectTruthy();
  receive(f(array1, array1)).expectTruthy();
  receive(f(array2, array2)).expectTruthy();
});

testing("Function areObjectsEqual", () => {
  const f = matchers.areObjectsEqual;

  const object1 = { Test: 1, Test2: "Hey!" };
  const object2 = { Test: 2, Test2: "Hoy!" };

  receive(f(object1, object2)).expectFalsy();
  receive(f(object1, {})).expectFalsy();
  receive(f(object1, object1)).expectTruthy();
  receive(f(object2, object2)).expectTruthy();
});
