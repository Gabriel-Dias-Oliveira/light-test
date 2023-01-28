import { TestValues } from "../types/types.js";

export interface TestData {
  result: any;
  expect: (value: TestValues) => void;
  expectTruthy: () => void;
  expectFalsy: () => void;
  expectError: () => void;
  expectToHaveBeenCalled: () => void;
  expectCalledTimes: (value: number) => void;
}

export interface FailedTest {
  expect: string;
  receive: string;
}

export interface Listener {
  mockImplementation: Function;
  mockReturn: Function;
  status: ListenerStatus;
}

export interface ListenerStatus {
  called: boolean;
  callTimes: number;
}
