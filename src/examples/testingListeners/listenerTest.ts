import { createListener } from "../../code/testAnalyzer.js";
import filedToBeListen from "./fileToBeListen.js";

const listenToLog = createListener(filedToBeListen, "consoleMessage");

filedToBeListen.consoleMessage(); // Hello!

listenToLog.mockImplementation(() => console.log("Mocked!"));

filedToBeListen.consoleMessage(); // Mocked!

const listenToReturn = createListener(filedToBeListen, "withReturn");

console.log(filedToBeListen.withReturn()); // true

listenToReturn.mockReturn(false);

console.log(filedToBeListen.withReturn()); // false
