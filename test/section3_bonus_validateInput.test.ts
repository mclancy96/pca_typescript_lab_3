import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 3 — Section 3 (Bonus): validateInput", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section3_bonus_validateInput.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should return true for non-empty string", () => {
    expect(context.validateInput("text")).to.equal(true);
  });

  it("should return false for empty string", () => {
    expect(context.validateInput(" ")).to.equal(false);
  });

  it("should return true for number > 0", () => {
    expect(context.validateInput(5)).to.equal(true);
  });

  it("should return false for number <= 0", () => {
    expect(context.validateInput(0)).to.equal(false);
  });

  it("should return true if object has valid: true", () => {
    expect(context.validateInput({ valid: true })).to.equal(true);
  });

  it("should return false if object has valid: false", () => {
    expect(context.validateInput({ valid: false })).to.equal(false);
  });
});
