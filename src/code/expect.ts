import matchers from "./resultMatcher";

import {
  ArrayInput,
  BasicInput,
  ExpectAnalyzer,
  ObjectInput,
} from "../types/types";
import { FailedTest } from "../interfaces/interfaces";

// TODO: If the receive and expect value are from different types
// The test should faile...

function expectBasic(
  receive: BasicInput,
  failedTests: FailedTest[]
): ExpectAnalyzer {
  return (expect: BasicInput) => {
    const passed: boolean = matchers.areValuesEqual(receive, expect);

    if (passed) return;

    const failedTest: FailedTest = {
      receive: String(receive),
      expect: String(expect),
    };

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

    const failedTest: FailedTest = {
      receive: JSON.stringify(receive),
      expect: JSON.stringify(expect),
    };

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

    const failedTest: FailedTest = {
      receive: JSON.stringify(receive),
      expect: JSON.stringify(expect),
    };

    failedTests.push(failedTest);
  };
}

export { expectBasic, expectArray, expectObject };
export default { expectBasic, expectArray, expectObject };
