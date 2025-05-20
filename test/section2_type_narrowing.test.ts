import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";
import * as type_annotation from "chai_typescript_type_annotation_tests";

describe("Lab 3 — Section 2: Type Narrowing", () => {
  let context: any = {};
  let capturedLogs: string[] = [];
  const filePath = join(__dirname, "../src/section2_type_narrowing.ts");

  before(() => {
    const tsCode = readFileSync(filePath, "utf8");
    const jsCode = ts.transpile(tsCode);
    context.console = { log: (msg: string) => capturedLogs.push(msg) };
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  beforeEach(() => {
    capturedLogs = [];
  });

  type_annotation.expectFunctionReturnTypeAnnotation(
    filePath,
    "printValue",
    "void"
  );

  type_annotation.matchFunctionParameterTypeAnnotation(filePath, "printValue", [
    "string | number | boolean",
  ]);

  it("should print correct message for string", () => {
    context.printValue("hello");
    expect(capturedLogs[0]).to.equal("String value: hello");
  });

  it("should print correct message for number", () => {
    context.printValue(42);
    expect(capturedLogs[0]).to.equal("Number value: 42");
  });

  it("should print correct message for boolean", () => {
    context.printValue(true);
    expect(capturedLogs[0]).to.equal("Boolean value: true");
  });
});
