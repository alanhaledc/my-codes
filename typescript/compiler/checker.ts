/*
 * @Author: Hale
 * @Description: Checker 检查器 -> AST + Symbols ~~ checker ~~> Type Validation
 * @Date: 2020/02/27
 * @LastEditTime: 2020/02/27
 */

// program.getTypeChecker ->
//     ts.createTypeChecker（检查器中）->
//         initializeTypeChecker（检查器中） ->
//             for each SourceFile `ts.bindSourceFile`（绑定器中）
//             // 接着
//             for each SourceFile `ts.mergeSymbolTable`（检查器中）
