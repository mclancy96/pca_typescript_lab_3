# Lab 3 — Union Types & Type Narrowing (TypeScript)

Welcome to **Lab 3** of the TypeScript Labs! In this lab, you'll gain hands-on experience with **union types**, **type narrowing**, and writing functions that safely handle different input types — key tools for writing real-world TypeScript code.

## 🏆 Learning Goals

- Declare variables that can accept multiple types using **union types**
- Use **type narrowing** to write safe logic for different inputs
- Build flexible functions that branch based on input type
- (Bonus) Combine structural and primitive checks in more complex logic

## 🛠️ What to Do

- Open each file in the `src/` folder and complete the tasks listed in the comments
- Use the Mocha + Chai tests in the `test/` folder to verify your solutions

## ✅ How to Run Tests

```bash
npm install
npm test
```

## 🗂️ Lab Structure & Tasks

### 🔹 section1_union_types.ts

- Declare a variable called `input` that can be a `string` or a `number` and set it to one of those
- Write a function `toUpperOrFixed` that:
  - uppercases the input if it's a string
  - returns a string with 2 decimal places if it's a number

### 🔹 section2_type_narrowing.ts

- Write a function `printValue` that takes a value which may be:
  - a string
  - a number
  - a boolean
- Use `typeof` to determine the type
- Print different messages to the console based on the type

### ⭐ section3_bonus_validateInput.ts

- Write a function `validateInput` that accepts any of the following:
  - a string (must be non-empty)
  - a number (must be > 0)
  - an object with a `valid: boolean` property
- Return `true` if valid, otherwise `false`
- Use `typeof`, `in`, and other narrowing tools to implement this cleanly

---

**Ready?** Start in `src/section1_union_types.ts` and get some practice with TypeScript’s powerful type flexibility! 🚀
