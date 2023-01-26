import { BasicInput, ObjectInput } from "../types/types";

function areValuesEqual(recieve: BasicInput, expected: BasicInput): boolean {
  const isFromCorrecType: boolean = typeof expected !== "object";

  return isFromCorrecType && recieve === expected;
}

function areObjectsEqual(receive: ObjectInput, expected: ObjectInput): boolean {
  if (typeof expected !== "object") return false;

  const isFalsyObject: boolean = !receive && !expected;

  if (isFalsyObject) return receive === expected;

  const receiveKeys: string[] = Object.keys(receive);
  const expectedKeys: string[] = Object.keys(expected);

  if (receiveKeys.length !== expectedKeys.length) return false;

  const areEqual: boolean = receiveKeys.every((key) => {
    const expectElement: any = expected[key];
    const receiveElement: any = receive[key];

    return matchElements(receiveElement, expectElement);
  });

  return areEqual;
}

function matchElements(receive: any, expected: any): boolean {
  const isObject: boolean =
    typeof expected === "object" && typeof receive === "object";

  if (isObject) return areObjectsEqual(expected, receive);

  return areValuesEqual(receive, expected);
}

export { areValuesEqual, areObjectsEqual };
export default { areValuesEqual, areObjectsEqual };
