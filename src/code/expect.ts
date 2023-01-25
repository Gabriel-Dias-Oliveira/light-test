import matchers from "./resultMatcher";

import {
  ArrayInput,
  BasicInput,
  ExpectAnalyzer,
  ObjectInput,
} from "../types/types";
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

function expectArray(
  receive: ArrayInput,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return (expect: ArrayInput) => {
    const passed: boolean = matchers.areArraysEqual(receive, expect);

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

function getFailedTestPayload(expect: any, receive: any): FailedTest {
  return {
    expect: JSON.stringify(expect),
    receive: JSON.stringify(receive),
  };
}

export { expectBasic, expectArray, expectObject };
export default { expectBasic, expectArray, expectObject };
