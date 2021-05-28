/*
 * @Author: Hale
 * @Description: Algebraic data type 代理数据类型
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A composite type made from putting other types together.
// Two common classes of algebraic types are sum and product.

// 1.Sum type

// A Sum type is the combination of two types together into another one.
// It is called sum because the number of possible values in the result type
// is the sum of the input types.

// JavaScript doesn't have types like this but we can use Sets to pretend:

// imagine that rather than sets here we have types that can only have these values
const bools = new Set([true, false]);
const halfTrue = new Set(["half - true"]);

// The weakLogic type contains the sum of the values from bools and halfTrue
const weakLogicValues = new Set([...bools, ...halfTrue]);

// Sum types are sometimes called union types, discriminated unions, or tagged unions.
// There's a couple libraries in JS which help with defining and using union types.
// Flow includes union types and TypeScript has Enums to serve the same role.

// 2.Product type

// A product type combines types together in a way you're probably more familiar with:

// point :: (Number, Number) -> {x: Number, y: Number}
const point = (x, y) => ({ x, y });

// It's called a product because the total possible values of the data structure
// is the product of the different values.
// Many languages have a tuple type which is the simplest formulation of a product type.
