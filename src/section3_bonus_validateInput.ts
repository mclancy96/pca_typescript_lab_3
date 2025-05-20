// BONUS TASK:
// Write a function called `validateInput` that accepts one of the following:
// - a string (must be non-empty)
// - a number (must be greater than 0)
// - an object with a `valid` boolean property
//
// Return `true` if the input is valid, otherwise return `false`.
// Use type narrowing (`typeof`, `in`) to handle each case.

// Your code here 👇

function validateInput(value: string | number | object): boolean {
  switch (typeof value) {
    case "string":
      return value.length > 0;
    case "number":
      return value > 0;
    case "object":
      return "valid" in value && Boolean(value["valid" as keyof typeof value]);
    default:
      return false;
  }
}
