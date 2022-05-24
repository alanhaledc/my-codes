/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

// solution link https://github.com/type-challenges/type-challenges/issues/2563

type ArrayOfLength<
  N extends number,
  Intermediate extends unknown[] = []
> = Defer<
  number extends N
    ? unknown[]
    : Intermediate["length"] extends N
    ? Result<Intermediate>
    : ArrayOfLength<N, [unknown, ...Intermediate]>
>;

// the max number for generic is 1999 now
type MinusOne<T extends number> = x2e3<ArrayOfLength<T>>["value"] extends [
  unknown,
  ...infer U
]
  ? U["length"]
  : never;

interface Defer<T> {
  next: T;
  value: unknown;
}

interface Result<T> extends Defer<Result<T>> {
  value: T;
}

type x1e0<T> = T[Extract<"next", keyof T>];

type x1e1<T> = x1e0<T> extends infer T
  ? x1e0<T> extends infer T
    ? x1e0<T> extends infer T
      ? x1e0<T> extends infer T
        ? x1e0<T> extends infer T
          ? x1e0<T> extends infer T
            ? x1e0<T> extends infer T
              ? x1e0<T> extends infer T
                ? x1e0<T> extends infer T
                  ? x1e0<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type x1e2<T> = x1e1<T> extends infer T
  ? x1e1<T> extends infer T
    ? x1e1<T> extends infer T
      ? x1e1<T> extends infer T
        ? x1e1<T> extends infer T
          ? x1e1<T> extends infer T
            ? x1e1<T> extends infer T
              ? x1e1<T> extends infer T
                ? x1e1<T> extends infer T
                  ? x1e1<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type x1e3<T> = x1e2<T> extends infer T
  ? x1e2<T> extends infer T
    ? x1e2<T> extends infer T
      ? x1e2<T> extends infer T
        ? x1e2<T> extends infer T
          ? x1e2<T> extends infer T
            ? x1e2<T> extends infer T
              ? x1e2<T> extends infer T
                ? x1e2<T> extends infer T
                  ? x1e2<T>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

type x2e3<T> = x1e3<T> extends infer T ? x1e3<T> : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
