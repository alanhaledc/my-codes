/*
  847 - String Join
  -------
  by Matt Davis (@tl-matt-davis) #hard 
  
  ### Question
  
  Create a type-safe string join utility which can be used like so:
  
  ```ts
  const hyphenJoiner = join('-')
  const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
  ```
  
  Or alternatively:
  ```ts
  join('#')('a', 'b', 'c') // = 'a#b#c'
  ```
  
  When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e: 
  ```ts
  join('')('a', 'b', 'c') // = 'abc'
  ```
  
  When only one item is passed, we should get back the original item (without any delimiter added):
  ```ts
  join('-')('a') // = 'a'
  ```
  
  > View on GitHub: https://tsch.js.org/847
*/

/* _____________ Your Code Here _____________ */

type Tuple = readonly string[];

type Tail<T extends Tuple> = T extends readonly [string, ...infer R] ? R : [];

type Join<T extends Tuple, U extends string> = T extends readonly []
  ? ""
  : T extends readonly [infer Head]
  ? Head
  : `${T[0]}${U}${Join<Tail<T>, U>}`;

declare function join<U extends string>(
  delimiter: U
): <T extends Tuple>(...parts: T) => Join<T, U>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

// Edge cases
const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

// Regular cases
const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type cases = [
  Expect<Equal<typeof noCharsOutput, "">>,
  Expect<Equal<typeof oneCharOutput, "a">>,
  Expect<Equal<typeof noDelimiterOutput, "abc">>,
  Expect<Equal<typeof twoCharOutput, "a-b">>,
  Expect<Equal<typeof hyphenOutput, "a-b-c">>,
  Expect<Equal<typeof hashOutput, "a#b#c">>,
  Expect<Equal<typeof longOutput, "a-b-c-d-e-f-g-h">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/847/answer
  > View solutions: https://tsch.js.org/847/solutions
  > More Challenges: https://tsch.js.org
*/