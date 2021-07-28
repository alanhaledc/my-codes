/*
 * @Author: Hale
 * @Description: infer 推断关键字 -> 表示待推断的函数参数
 * @Date: 2019/11/26
 * @LastEditTime: 2020/02/23
 */

export {};

// tuple -> union

type ElementOf<T> = T extends Array<infer E> ? E : never;

type TTuple = [string, number];

type toUnion = ElementOf<TTuple>;

// union -> intersection

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

function mergeObjects<T extends object>(
  args: Array<T>
): UnionToIntersection<T> {
  return args.reduce(
    (prev, curr) => ({ ...prev, ...curr }),
    {} as UnionToIntersection<T> as any
  );
}

const a = { a: 1 };
const b = { b: true };
const c = { c: "hi" };
const merged = mergeObjects([a, b, c]);
// { a: 1, b: true, c: 'hi' }
