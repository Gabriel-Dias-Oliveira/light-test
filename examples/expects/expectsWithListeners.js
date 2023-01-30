import { testing, receive, createListener } from "../../dist/code/lightTest.js"; // Import relative to your package
import fileToBeListen from "../listeners/fileToBeListen.js";

const listenToLog = createListener(fileToBeListen, "consoleMessage");

testing("When it is not called", () => {
  receive(listenToLog).expectToHaveBeenCalled(); // Should display an error message!
});

fileToBeListen.consoleMessage();

testing("When it is called", () => {
  receive(listenToLog).expectToHaveBeenCalled();
});

fileToBeListen.consoleMessage();

testing("When checking the call times", () => {
  receive(listenToLog).expectCalledTimes(2);
});

testing("When checking the call times - With wrong number", () => {
  receive(listenToLog).expectCalledTimes(3); // Should display an error message!
});
