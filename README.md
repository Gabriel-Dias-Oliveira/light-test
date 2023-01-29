# Light Test

## _A light and simple test tool_

Light test provide some functions to write tests and mocks in a simple and easy way.

## Features

- Write test files as you are writing a super cool text!
- Some built-in functions to check your results!
- Last, but not less important, functions to mock your code & values!

## How to install

After installing it, using

> NPM COMMAND HERE

you are almost ready to go!
You already can start writing your tests, but why not write down some scripts to run our tests?

Inside your **_package.json_** add:

```json
  "scripts": {
    "test": "testing --folder ./src/tests"
  },
```

or

```json
  "scripts": {
    "test": "testing file.js"
  },
```

You always can keep it simple and use the `node file.js` command.

## Main functions

Lets do a brief summary of the functions available:

```js
testing(description: string, runBlockOfTest: () => void): void
```

If you want to be descriptive and divide a file into a different block of tests, `testing` is the perfect choice for it, each block of test will have its own description and code to run.

```js
when(description: string, runBlockOfTest: () => void): void
```

To create some test cases and organize your code and output, you can divide your tests inside this block of code. It improves the output message as well.

```js
receive(receiveValue: any): TestData
```

This is where the magic happens, you pass the value and it will create a super cool object with all the available test options!
You should have the following options:

- `expect(expect: any)` - Passing the expected value as a parameter.
- `expectTruthy()` - Compare if the received value is Truthy.
- `expectFalsy()` - Compare if the received value is Falsy.
- `expectError()` - Check if the function throws an error while running.
- `expectToHaveBeenCalled()` - Verify if the function was called.
- `expectCalledTimes(times: number)` - Compare if the number of times that the function was called is equal to the expected value.

```js
createListener(moduleToListen: ObjectInput, key: string): Listener
```

If you like to mock things, so this is the perfect choice for you. Passing the module/file that you want to mock, will return a listener with some methods to mock the behavior of the function or the return value.

## How to write your tests

Let's say you have a file to be tested:
**_myFile.js_**

```js
functions checkUserAge(age) {
    if (age < 18) return "You must have 18 years old";

    return "Hello!"
}
```

You can create a file:

**_myTest.test.js_** or even **_myTest.js_**

```js
import { testing, receive } from ...testAnalyzer.js"; // Import relative to your package
import { checkUserAge } from "myFile.js";

testing("Function checkUserAge", () => {
    const success = 'Hello!';
    const failed = "You must have 18 years old";

    receive(checkUserAge(18)).expect(success);
    receive(checkUserAge(17)).expect(failed);
})
```

You can find some usage examples in the **_examples folder_**, check it to see more complex cases and other functions.

## How to be a contributor:

Feel free to help with the code and issues. This should be pretty simple:

- Clone the repository.
- **_npm install_** to install the dependecies.
- You should be ready to go.

To test what you are doing:

- **_ctrl + shift + b_** and build the typescript project. (Using VSCode).
