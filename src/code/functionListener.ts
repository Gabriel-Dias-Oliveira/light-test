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
    functionToListen();
    updateStatus(status);
  };

  return {
    mockImplementation: (mockedImplementation: Function) => {
      moduleToListen[key] = () => {
        mockedImplementation();
        updateStatus(status);
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
