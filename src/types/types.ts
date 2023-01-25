export type BasicInput = number | string | boolean;

export type ArrayInput = any[];

export type ObjectInput = Record<string, unknown>;

export type TestValues = BasicInput | ArrayInput | ObjectInput;

export type ExpectAnalyzer = (expect: TestValues) => void;
