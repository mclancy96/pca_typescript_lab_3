// TASK:
// 1. Declare a variable called `input` that can be a string OR a number
//
// 2. Write a function `toUpperOrFixed` that:
//    - takes a single argument that is string | number
//    - if it's a string, return the uppercase version
//    - if it's a number, return the number as a string with 2 decimal places
//
// Example:
// toUpperOrFixed("hello") ➞ "HELLO"
// toUpperOrFixed(3.14159) ➞ "3.14"

// Your code here 👇

let input: string | number = "hi";

const toUpperOrFixed = (inputValue: string | number): string => {
  if (typeof inputValue === "string") {
    return inputValue.toUpperCase();
  }
  return Number(inputValue).toFixed(2).toString();
};
