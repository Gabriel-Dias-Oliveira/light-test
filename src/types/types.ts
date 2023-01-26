export type BasicInput = number | string | boolean;

export type ArrayInput = any[];

export type ObjectInput = Record<string, unknown>;

export type Falsy = false | "" | 0 | null | undefined;

export type TestValues = BasicInput | ArrayInput | ObjectInput | Falsy;

export type ExpectAnalyzer = (expect?: TestValues) => void;
