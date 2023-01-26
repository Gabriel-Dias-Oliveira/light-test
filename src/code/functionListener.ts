import { Listener, ListenerStatus } from "../interfaces/interfaces";
import { ObjectInput } from "../types/types";

function createListener(moduleToListen: ObjectInput, key: string): Listener {
  if (!moduleToListen[key])
    throw new Error(`Failed to add listener "${key}" not found`);

  if (typeof moduleToListen[key] !== "function")
    throw new Error(
      `Failed to add listener "${moduleToListen[key]}" is not a function`
    );

  const functionToListen: Function = moduleToListen[key] as Function;
  const status: ListenerStatus = {
    called: false,
    callTimes: 0,
  };

  moduleToListen[key] = () => {
    updateStatus(status);

    return functionToListen();
  };

  return {
    mockImplementation: (mockedImplementation: Function) => {
      moduleToListen[key] = () => {
        updateStatus(status);

        return mockedImplementation();
      };
    },
    mockReturn: (valueToReturn: any) => {
      const listenedFunction: Function = moduleToListen[key] as Function;

      moduleToListen[key] = () => {
        listenedFunction();
        updateStatus(status);

        return valueToReturn;
      };
    },
    status,
  };
}

function updateStatus(status: ListenerStatus): void {
  status.called = true;
  status.callTimes += 1;
}

export { createListener };
export default { createListener };
