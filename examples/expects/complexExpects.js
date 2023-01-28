import { testing, receive } from "../../dist/code/testAnalyzer.js"; // Import relative to your package

testing("When using n-D arrays", () => {
  const evenNumbers = [2, [4], 6, [8, [10], 12]];

  receive(evenNumbers).expect([2, [4], 6, [8, [10], 12]]);
  receive(evenNumbers).expect([2, [4], 6, [8, 10, 12]]); // Should display an error message!
});

testing("When using n-D objects", () => {
  const person = {
    firstName: "Mr. X",
    lastName: "Y",
    address: { street: "Alphabet", nationality: "Latin" },
  };
  const expectResult = {
    firstName: "Mr. X",
    lastName: "Y",
    address: { street: "Alphabet", nationality: "Latin" },
  };
  const wrongResult = {
    firstName: "Mr. 10",
    lastName: "0",
    address: { street: "Numbers", nationality: "Egyptian" },
  };

  receive(person).expect(expectResult);
  receive(person).expect(wrongResult); // Should display an error message!
});

/* 
Note: You can mix objects and arrays as well :D 
*/
