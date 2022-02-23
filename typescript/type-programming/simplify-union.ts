/*
 * @Author: Hale
 * @Description: simplify union
 * @Date: 2022/02/23
 * @LastEditTime: 2022/02/23
 */

export {};

type UppercaseA<Item extends string> = Item extends "a"
  ? Uppercase<Item>
  : Item;

type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : Str;

type CamelCaseArr<
  Arr extends unknown[],
  Result extends unknown[] = []
> = Arr extends [infer Item, ...infer RestArr]
  ? [...Result, CamelCase<Item & string>, ...CamelCaseArr<RestArr>]
  : Result;

type CamelCaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCaseUnion<Rest>}`
    : Item;

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[]
> = `${Block}__${Element[number]}--${Modifiers[number]}`;

type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;

type AllCombinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombinations<Exclude<B, A>>>
  : never;
