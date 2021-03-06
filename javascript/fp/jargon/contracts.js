/*
 * @Author: Hale
 * @Description: Contracts 契约
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A contract specifies the obligations and guarantees of the behavior
// from a function or expression at runtime.
// This acts as a set of rules that are expected
// from the input and output of a function or expression,
// and errors are generally reported whenever a contract is violated.

// Define our contract : int -> boolean
const contract = (input) => {
  if (typeof input === "number") return true;
  throw new Error("Contract violated: expected int -> int");
};

const addOne = (num) => contract(num) && num + 1;

addOne(2); // 3
addOne("some string"); // Contract violated: expected int -> boolean
