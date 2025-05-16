import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Lab 3 — Section 1: Union Types", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section1_union_types.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should declare 'input' variable of type string or number", () => {
    expect(
      context.input,
      "input variable not defined or not set to a value"
    ).to.satisfy(
      (val: any) => typeof val === "string" || typeof val === "number"
    );
  });

  it("should uppercase strings and format numbers in toUpperOrFixed", () => {
    const upper = context.toUpperOrFixed("hello");
    const fixed = context.toUpperOrFixed(3.14159);
    expect(upper).to.equal("HELLO");
    expect(fixed).to.equal("3.14");
  });

  it("should declare 'input' variable with an explicit union type annotation (string | number)", () => {
    const filePath = join(__dirname, "../src/section1_union_types.ts");
    const tsCode = readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(filePath, tsCode, ts.ScriptTarget.Latest, true);

    let found = false;

    function checkNode(node: ts.Node) {
      if (
        ts.isVariableDeclaration(node) &&
        node.name.getText() === "input" &&
        node.type &&
        ts.isUnionTypeNode(node.type)
      ) {
        const types = node.type.types.map(t => t.getText());
        if (types.includes("string") && types.includes("number")) {
          found = true;
        }
      }
      ts.forEachChild(node, checkNode);
    }

    checkNode(sourceFile);

    expect(found, "input variable must have an explicit type annotation of 'string | number'").to.be.true;
  });
});
