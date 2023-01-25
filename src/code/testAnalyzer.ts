import expects from "./expect";
import output from "./output";
import { TestData, FailedTest } from "../interfaces/interfaces";
import { BasicInput, ExpectAnalyzer, ObjectInput } from "../types/types";

let testDescription: string;
let failedTests: FailedTest[];

function testing(description: string, runBlockOfTest: () => void): void {
  testDescription = description;
  failedTests = [];

  runBlockOfTest();
  output.printResult(testDescription, failedTests);
}

function receive(receiveValue: any): TestData {
  if (Array.isArray(receiveValue)) {
    const expectArray: ExpectAnalyzer = expects.expectArray(
      receiveValue,
      failedTests
    );

    return {
      result: receiveValue,
      expect: (expect) => {
        expectArray(expect);
      },
    };
  }

  if (typeof receiveValue === "object") {
    const expectObject: ExpectAnalyzer = expects.expectObject(
      receiveValue,
      failedTests
    );

    return {
      result: receiveValue,
      expect: (expect: ObjectInput) => {
        expectObject(expect);
      },
    };
  }

  const expectBasic: ExpectAnalyzer = expects.expectBasic(
    receiveValue,
    failedTests
  );

  return {
    result: receiveValue,
    expect: (expect: BasicInput) => {
      expectBasic(expect);
    },
  };
}

export { testing, receive };
export default { testing, receive };
