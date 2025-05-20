import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 3 — Section 1: Union Types", () => {
  let context: any = {};
  const filePath = join(__dirname, "../src/section1_union_types.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should declare 'input' variable of type string or number", () => {
    expect(context.input).to.satisfy(
      (val: any) => typeof val === "string" || typeof val === "number"
    );
  });

  it("should uppercase strings and format numbers in toUpperOrFixed", () => {
    const upper = context.toUpperOrFixed("hello");
    const fixed = context.toUpperOrFixed(3.14159);
    expect(upper).to.equal("HELLO");
    expect(fixed).to.equal("3.14");
  });

  type_annotation.expectVariableExplicitTypeAnnotation(
    filePath,
    "input",
    "string | number"
  );

  type_annotation.expectFunctionReturnTypeAnnotation(
    filePath,
    "toUpperOrFixed",
    "string"
  );

  type_annotation.matchFunctionParameterTypeAnnotation(
    filePath,
    "toUpperOrFixed",
    ["string | number"]
  );
});
