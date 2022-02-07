// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { capitalize } = require("lodash");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// 1a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("capitalizerPartTwo", () => {
  it("a function which takes in an array of objects, which returns an array of strings which capitalizes the name of each person and combines it with their occupation", () => {
    expect(
      capitalizerPartTwo([
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" },
      ])
    ).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

// 1b) Pseudo Code:
// Create the function and give it a parameter (array)
// Use a form of iteration to iterate through the array (return the result so you don't have to create a variable)
// Iteration logic:
//    Use a method to capitalize each name (or potentially break the name apart into two names and .toUpperCase the index of the first letter, and then recombine them)
//    Use string interpolation to create the sentence for each entry (make sure you refer to each key properly)
// Run test code to ensure it is passing green

const capitalizerPartTwo = (array) => {
  return array.map((value) => {
    let uncapitalizedName = value.name.split(" ");
    let capitalizedName = uncapitalizedName.map((value) => {
      return value.slice(0, 1).toUpperCase() + value.slice(1, value.length + 1);
    });
    capitalizedName = capitalizedName.join(" ");
    return `${capitalizedName} is ${value.occupation}.`;
  });
};

// Notes: I ran the initial test and got the expected error. While writing the code, I realized I had to do a little more logic for the capitalization part. I thought there was a method already made which could do just that. So instead I had to use slice to capitalize each starting character and then use concatenations. The logic is a bit bulky so definitely needs a refactor. Salvador told me I could use .select instead, so I will try to explore using that if time permits.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// 2a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("onlyMods", () => {
  it("a function which takes in an array, and returns an array with only numbers which are the result of modulus 3", () => {
    expect(onlyMods([23, "Heyyyy!", 45, -10, 0, "Yo", false])).toEqual([
      2, 0, -1, 0,
    ]);
    expect(onlyMods([5, "Hola", 43, -34, "greetings", true])).toEqual([
      2, 1, -1,
    ]);
  });
});

// b) Create the function that makes the test pass.

// 2b) Pseudo Code:
// Create the function and give it a parameter (array)
// Use either an HOF (probably .filter) or a for loop to iterate through the input array
// Iteration logic
//    Use a method to filter through the datatypes to only return a number
//    Have the return result be the modulus 3 of the current value
// Run the test to ensure it passes

const onlyMods = (array) => {
  let numbersArray = array.filter((value) => {
    return typeof value === "number";
  });
  return numbersArray.map((value) => {
    return value % 3;
  });
};

// Notes: I ran the initial test and got the error. While writing the code, I realized how .filter actually works and that I can't really use mod 3 on the output. I had to create another HOF to take care of that. But overall, not too difficult. I'd say if I could combine these two HOFs into one that would be ideal. Maybe there is a method which could do this? Will check if time permits.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// 3a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("cubit", () => {
  it("a function which takes in an array and returns the sum of the cubes of the elements", () => {
    expect(cubit([2, 3, 4])).toEqual(99);
    expect(cubit([0, 5, 10])).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.

// 3b) Pseudo code:
// Create the function and give it a parameter (array)
// Create a variable to store the sum value (initialize to 0)
// Use iteration to go through each element, cube that value, and sum it to the sum variable
// Return the sum variable
// Run the test to ensure it passes

const cubit = (array) => {
  let sum = 0;
  array.forEach((value) => {
    return (sum += value ** 3);
  });
  return sum;
};

// Notes: I ran the intial test and got the right error. This code was really easy to implement. I'd like to refactor it make this a one-liner. It definitely seems possible. However I don't see how I can get away from declaring a variable at the start. It's a pretty concise code as is I guess. But I will explore some form of refactoring if time permits.
