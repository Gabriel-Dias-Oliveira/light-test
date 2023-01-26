import expects from "./expect";
import output from "./output";
import listener from "./functionListener";
import { TestData, FailedTest, Listener } from "../interfaces/interfaces";
import { ExpectAnalyzer, ObjectInput } from "../types/types";

let testDescription: string;
let failedTests: FailedTest[];

function testing(description: string, runBlockOfTest: () => void): void {
  testDescription = description;
  failedTests = [];

  runBlockOfTest();
  output.printResult(testDescription, failedTests);
}

function receive(receiveValue: any): TestData {
  const isObject: boolean = typeof receiveValue === "object";
  const expect: ExpectAnalyzer = isObject
    ? expects.expectObject(receiveValue, failedTests)
    : expects.expectBasic(receiveValue, failedTests);

  return {
    result: receiveValue,
    expect,
  };
}

function createListener(moduleToListen: ObjectInput, key: string): Listener {
  return listener.createListener(moduleToListen, key);
}

export { testing, receive, createListener };
export default { testing, receive };
