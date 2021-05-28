/*
 * @Author: Hale
 * @Description: Continuation 接续
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// At any given point in a program,
// the part of the code that's yet to be executed is known as a continuation.

const printAsString = (num) => console.log(`Given ${num}`);

const addOneAndContinue = (num, cc) => {
  const result = num + 1;
  cc(result);
};

addOneAndContinue(2, printAsString); // 'Given 3'

// Continuations are often seen in asynchronous programming
// when the program needs to wait to receive data before it can continue.
// The response is often passed off to the rest of the program,
// which is the continuation, once it's been received.

const continueProgramWith = (data) => {
  // Continues program with data
};

readFileAsync("path/to/file", (err, response) => {
  if (err) {
    // handle error
    return;
  }
  continueProgramWith(response);
});
