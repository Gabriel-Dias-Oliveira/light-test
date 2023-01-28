import { FailedTest } from "../interfaces/interfaces.js";

function printResult(test: string, failedTests: FailedTest[]): void {
  const hasTestWorked: boolean = failedTests.length === 0;

  if (hasTestWorked) {
    console.log(`\n\x1b[32mTesting: "${test}" worked successfully\n\x1b[0m`);

    return;
  }

  const header: string = `\x1b[31m\n====\nTesting: "${test}" failed when:\n`;

  const messages: string[] = failedTests.map((failedTest) => {
    return `- Expect: ${failedTest.expect}\n- Receive: ${failedTest.receive}`;
  });

  console.log(`${header}${messages.join("\n\n")}\n===\x1b[0m`);
}

export { printResult };
export default { printResult };
