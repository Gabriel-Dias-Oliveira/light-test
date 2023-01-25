import { TestValues } from "../types/types";

export interface TestData {
  result: any;
  expect: (value: TestValues) => void;
}

export interface FailedTest {
  expect: string;
  receive: string;
}
