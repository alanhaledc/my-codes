/*
 * @Author: Hale
 * @Description: Lens
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A lens is a structure (often an object or function)
// that pairs a getter and a non-mutating setter for some other data structure.

const R = require("ramda");

const nameLens = R.lens(
  // getter for name property on an object
  (obj) => obj.name,
  // setter for name property
  (val, obj) => Object.assign({}, obj, { name: val })
);

// -> Having the pair of get and set for a given data structure enables a few key features.

const person = { name: "Gertrude Blanch" };

// invoke the getter
R.view(nameLens, person); // 'Gertrude Blanch'

// invoke the setter
R.set(nameLens, "Shafi Goldwasser", person); // {name: 'Shafi Goldwasser'}

const uppercase = (xs) => xs.toUpperCase();

// run a function on the value in the structure
R.over(nameLens, uppercase, person); // {name: 'GERTRUDE BLANCH'}

// -> Lenses are also composable. This allows easy immutable updates to deeply nested data.

// This lens focuses on the first item in a non-empty array
const firstLens = R.lens(
  // get first item in array
  (xs) => xs[0],
  // non-mutating setter for first item in array
  (val, [__, ...xs]) => [val, ...xs]
);

const people = [{ name: "Gertrude Blanch" }, { name: "Shafi Goldwasser" }];

const compose = (f, g) => (a) => f(g(a));

// Despite what you may assume, lenses compose left-to-right.
R.over(compose(firstLens, nameLens), uppercase, people); // [{'name': 'GERTRUDE BLANCH'}, {'name': 'Shafi Goldwasser'}]
