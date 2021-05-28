/*
 * @Author: Hale
 * @Description: Point-Free Style
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Writing functions where the definition does not explicitly identify the arguments used.
// This style usually requires currying or other Higher-Order functions. A.K.A Tacit programming.

// Given
const map = (fn) => (list) => list.map(fn);
const add = (a) => (b) => a + b;

// Then

// Not points-free - `numbers` is an explicit argument
const incrementAll = (numbers) => map(add(1))(numbers);

// Points-free - The list is an implicit argument
const incrementAll2 = map(add(1));

// incrementAll identifies and uses the parameter numbers, so it is not points-free.
// incrementAll2 is written just by combining functions and values, making no mention of its arguments.
// It is points-free.

// Points-free function definitions look just like normal assignments without function or =>.
