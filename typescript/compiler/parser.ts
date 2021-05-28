/*
 * @Author: Hale
 * @Description: Parser 解析器 -> Token Stream ~~ parser ~~> AST
 * @Date: 2020/02/27
 * @LastEditTime: 2020/02/27
 */

import * as ts from "ntypescript";

function printAllChildren(node: ts.Node, depth = 0) {
  console.log(
    new Array(depth + 1).join("----"),
    ts.formatSyntaxKind(node.kind),
    node.pos,
    node.end
  );
  depth++;
  node.getChildren().forEach((c) => printAllChildren(c, depth));
}

var sourceCode = `
var foo = 123;
`.trim();

var sourceFile = ts.createSourceFile(
  "foo.ts",
  sourceCode,
  ts.ScriptTarget.ES5,
  true
);
printAllChildren(sourceFile);

// 解析空语句
// function parseEmptyStatement(): Statement {
//   let node = <Statement>createNode(SyntaxKind.EmptyStatement)
//   parseExpected(SyntaxKind.SemicolonToken)
//   return finishNode(node)
// }
