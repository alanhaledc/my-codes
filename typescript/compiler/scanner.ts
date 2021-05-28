/*
 * @Author: Hale
 * @Description: Scanner 扫描器 -> SourceCode ~~ scanner ~~> Token Stream
 * @Date: 2020/02/27
 * @LastEditTime: 2020/02/27
 */

import * as ts from "ntypescript";

// TypeScript has a singelton scanner
const scanner = ts.createScanner(ts.ScriptTarget.Latest, /*skipTrivia*/ true);

// That is initialized using a function `initializeState` similar to
function initializeState(text: string) {
  scanner.setText(text);
  scanner.setOnError((message: ts.DiagnosticMessage, length: number) => {
    console.error(message);
  });
  scanner.setScriptTarget(ts.ScriptTarget.ES5);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);
}

// Sample usage
initializeState(
  `
var foo = 123;
`.trim()
);

// Start the scanning
var token = scanner.scan();

// while (token != ts.SyntaxKind.EndOfFileToken) {
//   console.log(ts.formatSyntaxKind(token))
//   token = scanner.scan()
// }

while (token != ts.SyntaxKind.EndOfFileToken) {
  let currentToken = ts.formatSyntaxKind(token);
  let tokenStart = scanner.getStartPos();
  token = scanner.scan();
  let tokenEnd = scanner.getStartPos();
  console.log(currentToken, tokenStart, tokenEnd);
}
