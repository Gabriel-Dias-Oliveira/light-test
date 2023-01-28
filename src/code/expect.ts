import matchers from "./resultMatcher.js";
import { BasicInput, ExpectAnalyzer, ObjectInput } from "../types/types.js";
import { FailedTest, Listener } from "../interfaces/interfaces.js";

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

function expectError(
  receive: Function,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return () => {
    const passed: boolean = matchers.throwError(receive);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload("An error", receive);

    failedTests.push(failedTest);
  };
}

function expectToHaveBeenCalled(
  listener: Listener,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return () => {
    const passed: boolean = listener?.status?.called;

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload(
      "Expected to be called",
      "Function was not called"
    );

    failedTests.push(failedTest);
  };
}

function expectCalledTimes(
  listener: Listener,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return (expect: number) => {
    const receive: number = listener?.status?.callTimes;
    const passed: boolean = matchers.areValuesEqual(receive, expect);

    if (passed) return;

    const failedTest: FailedTest = getFailedTestPayload(
      `Expected to be called ${expect} times`,
      `Function was called ${receive} times`
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

export {
  expectBasic,
  expectObject,
  expectTruthy,
  expectFalsy,
  expectError,
  expectToHaveBeenCalled,
  expectCalledTimes,
};
export default {
  expectBasic,
  expectObject,
  expectTruthy,
  expectFalsy,
  expectError,
  expectToHaveBeenCalled,
  expectCalledTimes,
};
