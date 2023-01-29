import expects from "./expect.js";
import output from "./output.js";
import listener from "./functionListener.js";
import { TestData, FailedTest, Listener } from "../interfaces/interfaces.js";
import { ExpectAnalyzer, ObjectInput } from "../types/types.js";

let failedTests: FailedTest[];

function testing(description: string, runBlockOfTest: () => void): void {
  failedTests = [];

  output.printHeader(description);
  runBlockOfTest();
  output.printResult(description, failedTests);
}

function when(description: string, runBlockOfTest: () => void): void {
  runBlockOfTest();
  output.printTestCase(description, failedTests);

  failedTests = [];
}

function receive(receiveValue: any): TestData {
  const isObject: boolean = typeof receiveValue === "object";
  const expect: ExpectAnalyzer = isObject
    ? expects.expectObject(receiveValue, failedTests)
    : expects.expectBasic(receiveValue, failedTests);

  return {
    result: receiveValue,
    expect,
    expectTruthy: expects.expectTruthy(receiveValue, failedTests),
    expectFalsy: expects.expectFalsy(receiveValue, failedTests),
    expectError: expects.expectError(receiveValue, failedTests),
    expectToHaveBeenCalled: expects.expectToHaveBeenCalled(
      receiveValue,
      failedTests
    ),
    expectCalledTimes: expects.expectCalledTimes(receiveValue, failedTests),
  };
}

function createListener(moduleToListen: ObjectInput, key: string): Listener {
  return listener.createListener(moduleToListen, key);
}

export { testing, when, receive, createListener };
export default { testing, when, receive, createListener };
