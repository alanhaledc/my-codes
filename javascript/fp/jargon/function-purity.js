/*
 * @Author: Hale
 * @Description: purity 纯函数
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A function is pure if the return value is only determined by its input values,
// and does not produce side effects.

{
  const greet = (name) => `Hi, ${name}`;

  greet("Hale"); // 'Hi, Hale'
}

// As opposed to each of the following:

{
  // window.name = 'Hale'
  global.name = "Hale"; // in Node.js

  // const greet = () => `Hi, ${window.name}`
  const greet = () => `Hi, ${global.name}`;

  greet(); // 'Hi, Hale'
}

// The above example's output is based on data stored outside of the function...

{
  let greeting;

  const greet = (name) => {
    greeting = `Hi, ${name}`;
  };

  greet("Hale");
  greeting; // 'Hi, Hale'
}

// ... and this one modifies state outside of the function.
