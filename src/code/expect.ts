import matchers from './resultMatcher';

import {
  ArrayInput,
  BasicInput,
  ExpectAnalyzer,
  ObjectInput
} from '../types/types';
import { TestOutput } from '../interfaces/interfaces';

function expectArray(description: string, receive: ArrayInput): ExpectAnalyzer {
  return (expect: ArrayInput) => {
    const output: TestOutput = {
      description,
      receive: String(receive),
      expect: String(expect),
      passed: matchers.matchArrays(receive, expect)
    };

    printOutput(output);
  };
}

function expectBasic(description: string, receive: BasicInput): ExpectAnalyzer {
  return (expect: BasicInput) => {
    const output: TestOutput = {
      description,
      receive: String(receive),
      expect: String(expect),
      passed: matchers.matchBasicTypes(receive, expect)
    };

    printOutput(output);
  };
}

function expectObject(
  description: string,
  receive: ObjectInput
): ExpectAnalyzer {
  return (expect: ObjectInput) => {
    const output: TestOutput = {
      description,
      receive: JSON.stringify(receive),
      expect: JSON.stringify(expect),
      passed: matchers.matchObjects(receive, expect)
    };

    printOutput(output);
  };
}

function printOutput(result: TestOutput): void {
  if (!result.passed) {
    const header: string = `\n====\nTesting: "${result.description}" failed when:`;
    const expectedOutput: string = `\nExpect: ${result.expect}`;
    const receiveOutput: string = `\nReceive: ${result.receive}\n====`;

    console.log(`\x1b[31m${header + expectedOutput + receiveOutput}\x1b[0m `);
  }
}

export default { expectBasic, expectArray, expectObject };
