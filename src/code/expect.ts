import matchers from "./resultMatcher";
import { BasicInput, ExpectAnalyzer, ObjectInput } from "../types/types";
import { FailedTest } from "../interfaces/interfaces";

function expectBasic(
  receive: BasicInput,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return (expect: BasicInput) => {
    const passed: boolean = matchers.areValuesEqual(receive, expect);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload(expect, receive);

    failedTests.push(failedTest);
  };
}

function expectObject(
  receive: ObjectInput,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return (expect: ObjectInput) => {
    const passed: boolean = matchers.areObjectsEqual(receive, expect);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload(expect, receive);

    failedTests.push(failedTest);
  };
}

function expectFalsy(receive: any, failedTests: FailedTest[]): ExpectAnalyzer {
  return () => {
    const passed: boolean = matchers.isFalsy(receive);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload("Falsy value", receive);

    failedTests.push(failedTest);
  };
}

function expectTruthy(receive: any, failedTests: FailedTest[]): ExpectAnalyzer {
  return () => {
    const passed: boolean = matchers.isTruthy(receive);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload(
      "Truthy value",
      receive
    );

    failedTests.push(failedTest);
  };
}

function getFailedTestPayload(expect: any, receive: any): FailedTest {
  return {
    expect: JSON.stringify(expect),
    receive: JSON.stringify(receive),
  };
}

export { expectBasic, expectObject, expectTruthy, expectFalsy };
export default { expectBasic, expectObject, expectTruthy, expectFalsy };
