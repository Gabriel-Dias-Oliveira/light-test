import { testing, receive, when } from "../../dist/code/testAnalyzer.js"; // Import relative to your package

testing("When using basic types", () => {
  const myInt = 1;
  const myBool = true;
  const myStr = "Hello, tester!";

  receive(myInt).expect(1);
  receive(myInt + 1).expect(2);
  receive(myBool).expect(true);
  receive(myStr).expect(myStr);
});

testing("When using arrays", () => {
  const evenNumbers = [2, 4, 6, 8];
  const oddNumbers = [1, 3, 5, 7];

  when("Arrays are equal should work", () => {
    receive(evenNumbers).expect(evenNumbers);
    receive(oddNumbers).expect(oddNumbers);
  });

  when("Arrays are different should fail", () => {
    receive(evenNumbers).expect(oddNumbers); // Should display an error message!
  });
});

testing("When using objects", () => {
  const evenObject = { even: 2 };
  const oddObject = { odd: 1 };

  when("Objects are equal should work", () => {
    receive(evenObject).expect(evenObject);
  });

  when("Objects are different should fail", () => {
    receive(evenObject).expect({ e: 2 }); // Should display an error message!
    receive(oddObject).expect({ o: 1 }); // Should display an error message!
  });
});

testing("When using Truthy values", () => {
  receive(true).expectTruthy();
  receive("My string!").expectTruthy();
  receive(1).expectTruthy();
});

testing("When using Falsy values", () => {
  receive(false).expectFalsy();
  receive(null).expectFalsy();
  receive(undefined).expectFalsy();
  receive("").expectFalsy();
  receive(0).expectFalsy();
});

testing("When expect an error", () => {
  receive(() => {
    throw new Error("My super cool error!");
  }).expectError();
});
