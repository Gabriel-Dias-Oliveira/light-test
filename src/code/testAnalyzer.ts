import expects from "./expect";
import output from "./output";
import listener from "./functionListener";
import { TestData, FailedTest, Listener } from "../interfaces/interfaces";
import { ExpectAnalyzer, ObjectInput } from "../types/types";

let failedTests: FailedTest[];

function testing(description: string, runBlockOfTest: () => void): void {
  failedTests = [];

  runBlockOfTest();
  output.printResult(description, failedTests);
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
  };
}

function createListener(moduleToListen: ObjectInput, key: string): Listener {
  return listener.createListener(moduleToListen, key);
}

export { testing, receive, createListener };
export default { testing, receive };
