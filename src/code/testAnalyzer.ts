import expects from './expect';
import { TestData } from '../interfaces/interfaces';
import { BasicInput, ExpectAnalyzer, ObjectInput } from '../types/types';

let testDescription: string;
// TODO: Create a way to put the output in a different module
// TODO: Add a more descriptive analysis from the test, errors & passed
/* let testErrors: string[];
let testPassed: string[]; */

function testing(description: string, runBlockOfTest: () => void): void {
  testDescription = description;
  runBlockOfTest();
}

function receive(functionResult: any): TestData {
  if (Array.isArray(functionResult)) {
    const expectArray: ExpectAnalyzer = expects.expectArray(
      testDescription,
      functionResult
    );

    return {
      result: functionResult,
      expect: (expect) => {
        expectArray(expect);
      }
    };
  }

  if (typeof functionResult === 'object') {
    const expectObject: ExpectAnalyzer = expects.expectObject(
      testDescription,
      functionResult
    );

    return {
      result: functionResult,
      expect: (expect: ObjectInput) => {
        expectObject(expect);
      }
    };
  }

  const expectBasic: ExpectAnalyzer = expects.expectBasic(
    testDescription,
    functionResult
  );

  return {
    result: functionResult,
    expect: (expect: BasicInput) => {
      expectBasic(expect);
    }
  };
}

export { testing, receive };
