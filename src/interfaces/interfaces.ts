import { TestValues } from "../types/types";

export interface TestData {
  result: any;
  expect: (value: TestValues) => void;
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
  called: Boolean;
  callTimes: number;
}
