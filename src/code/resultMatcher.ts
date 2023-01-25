import { BasicInput, ArrayInput, ObjectInput } from '../types/types';

function matchBasicTypes(recieve: BasicInput, expect: BasicInput): boolean {
  return recieve === expect;
}

function matchArrays(recieve: ArrayInput, expect: ArrayInput): boolean {
  if (recieve.length !== expect.length) return false;

  const areEquals: boolean = recieve.every((recieveElement, index) => {
    const expectElement: any = expect[index];

    const areArays: boolean =
      Array.isArray(expectElement) && Array.isArray(recieveElement);

    if (areArays) return matchArrays(expectElement, recieveElement);

    const areObjects: boolean =
      typeof expectElement === 'object' && typeof recieveElement === 'object';

    if (areObjects) return matchObjects(expectElement, recieveElement);

    return matchBasicTypes(recieveElement, expectElement);
  });

  return areEquals;
}

function matchObjects(recieve: ObjectInput, expect: ObjectInput): boolean {
  const recieveKeys: string[] = Object.keys(recieve);
  const expectedKeys: string[] = Object.keys(expect);

  if (recieveKeys.length !== expectedKeys.length) return false;

  const areEquals: boolean = recieveKeys.every((key) => {
    const expectElement: any = expect[key];
    const recieveElement: any = recieve[key];

    const areArays: boolean =
      Array.isArray(expectElement) && Array.isArray(recieveElement);

    if (areArays) return matchArrays(expectElement, recieveElement);

    const areObjects: boolean =
      typeof expectElement === 'object' && typeof recieveElement === 'object';

    if (areObjects) return matchObjects(expectElement, recieveElement);

    return matchBasicTypes(recieveElement, expectElement);
  });

  return areEquals;
}

export default { matchBasicTypes, matchArrays, matchObjects };
