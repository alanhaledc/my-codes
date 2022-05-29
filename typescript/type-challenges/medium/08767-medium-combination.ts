/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #medium #array #application #string
  
  ### Question
  
  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)
  
  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```
  
  > View on GitHub: https://tsch.js.org/8767
*/

/* _____________ Your Code Here _____________ */

type Tuple2Union<T extends string[]> = T[number];

type LoopUnion<
  T extends string,
  Res extends string = "",
  U extends T = T
> = T extends T
  ? [Exclude<U, T>] extends [never]
    ? Res extends ""
      ? T
      : `${Res} ${T}`
    : LoopUnion<Exclude<U, T>, Res extends "" ? Res | T : Res | `${Res} ${T}`>
  : Res;

type Combination<T extends string[]> = LoopUnion<Tuple2Union<T>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      | "foo"
      | "bar"
      | "baz"
      | "foo bar"
      | "foo bar baz"
      | "foo baz"
      | "foo baz bar"
      | "bar foo"
      | "bar foo baz"
      | "bar baz"
      | "bar baz foo"
      | "baz foo"
      | "baz foo bar"
      | "baz bar"
      | "baz bar foo"
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8767/answer
  > View solutions: https://tsch.js.org/8767/solutions
  > More Challenges: https://tsch.js.org
*/
