import { FailedTest } from "../interfaces/interfaces.js";

function printHeader(test: string): void {
  console.log(`\x1b[33m====\nTesting: "${test}"\x1b[0m`);
}

function printResult(test: string, failedTests: FailedTest[]): void {
  const hasTestWorked: boolean = failedTests.length === 0;

  if (hasTestWorked) {
    console.log(`\n\x1b[33mTest "${test}" finished\n====\x1b[0m`);

    return;
  }

  const header: string = `\x1b[31m\n\nTest "${test}" failed when:\n`;

  const messages: string[] = failedTests.map((failedTest) => {
    return `- Expect: ${failedTest.expect}\n- Receive: ${failedTest.receive}`;
  });

  console.log(`${header}${messages.join("\n\n")}\n===\x1b[0m`);
}

function printTestCase(test: string, failedTests: FailedTest[]): void {
  const hasTestWorked: boolean = failedTests.length === 0;

  if (hasTestWorked) {
    const message: string = `\x1b[32m\nCase when "${test}" worked successfully\n====\x1b[0m`;
    console.log(message);

    return;
  }

  const header: string = `\x1b[31m\nCase "${test}" failed when:\n`;

  const messages: string[] = failedTests.map((failedTest) => {
    return `- Expect: ${failedTest.expect}\n- Receive: ${failedTest.receive}`;
  });

  console.log(`${header}${messages.join("\n\n")}\n===\x1b[0m`);
}

export { printHeader, printResult, printTestCase };
export default { printHeader, printResult, printTestCase };
