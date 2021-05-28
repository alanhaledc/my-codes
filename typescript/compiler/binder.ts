/*
 * @Author: Hale
 * @Description: Binder 绑定器 -> AST ~~ binder ~~> Symbols
 * @Date: 2020/02/27
 * @LastEditTime: 2020/02/27
 */

// function Symbol(flags: SymbolFlags, name: string) {
//   this.flags = flags
//   this.name = name
//   this.declarations = undefined
// }

// program.getTypeChecker ->
//     ts.createTypeChecker（检查器中）->
//         initializeTypeChecker（检查器中） ->
//             for each SourceFile `ts.bindSourceFile`（绑定器中）
//             // 接着
//             for each SourceFile `ts.mergeSymbolTable`（检查器中）
