import { BasicInput, ArrayInput, ObjectInput } from "../types/types";

function areValuesEqual(recieve: BasicInput, expect: BasicInput): boolean {
  return recieve === expect;
}

function areArraysEqual(receive: ArrayInput, expect: ArrayInput): boolean {
  if (receive.length !== expect.length) return false;

  const areEqual: boolean = receive.every((receiveElement, index) => {
    const expectElement: any = expect[index];

    return matchElements(receiveElement, expectElement);
  });

  return areEqual;
}

function areObjectsEqual(receive: ObjectInput, expect: ObjectInput): boolean {
  const isFalsyObject: boolean = !receive && !expect;

  if (isFalsyObject) return receive === expect;

  const receiveKeys: string[] = Object.keys(receive);
  const expectedKeys: string[] = Object.keys(expect);

  if (receiveKeys.length !== expectedKeys.length) return false;

  const areEqual: boolean = receiveKeys.every((key) => {
    const expectElement: any = expect[key];
    const receiveElement: any = receive[key];

    return matchElements(receiveElement, expectElement);
  });

  return areEqual;
}

function matchElements(receive: any, expected: any): boolean {
  const isArray: boolean = Array.isArray(expected) && Array.isArray(receive);

  if (isArray) return areArraysEqual(expected, receive);

  const isObject: boolean =
    typeof expected === "object" && typeof receive === "object";

  if (isObject) return areObjectsEqual(expected, receive);

  return areValuesEqual(receive, expected);
}

export { areValuesEqual, areArraysEqual, areObjectsEqual };
export default { areValuesEqual, areArraysEqual, areObjectsEqual };
