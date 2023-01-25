import { TestValues } from '../types/types';

export interface TestData {
  result: any;
  expect: (value: TestValues) => void;
}

export interface TestOutput {
  description: string;
  expect: string;
  receive: string;
  passed: boolean;
}

/* export interface BasicInterface {
  recieve: BasicTypes;
  expected: BasicTypes;
  description: string;
}

export interface ArraysInterface {
  recieve: any[];
  expected: any[];
  description: string;
}
*/
