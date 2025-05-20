// TASK:
// Write a function called `printValue` that takes a single parameter `value`.
// The value can be a string, number, or boolean.
// Use `typeof` to determine the type and print a different message for each:
// - string: print "String value: <value>"
// - number: print "Number value: <value>"
// - boolean: print "Boolean value: <value>"

// Your code here 👇

const printValue = (value: string | number | boolean): void => {
  switch (typeof value) {
    case "string":
      console.log(`String value: ${value}`);
      break;
    case "number":
      console.log(`Number value: ${value}`);
      break;
    case "boolean":
      console.log(`Boolean value: ${value}`);
      break;
    default:
      console.log("Found nothing");
  }
};
