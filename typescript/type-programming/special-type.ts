/*
 * @Author: Hale
 * @Description: special union
 * @Date: 2022/02/23
 * @LastEditTime: 2022/02/23
 */

export {};

type IsAny<T> = "hello" extends "world" & T ? true : false;

type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);

// includes any
type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

type IsNever<T> = [T] extends [never] ? true : false;

type IsTuple<T> = T extends readonly [...params: infer Eles]
  ? NotEqual<Eles["length"], number>
  : false;

type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true;

type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;

type GetOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends Pick<Obj, Key> ? Key : never]: Obj[Key];
};

type isRequired<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key>
  ? never
  : Key;

type GetRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj as isRequired<Key, Obj>]: Obj[Key];
};

type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key];
};

type ClassPublicProps<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key];
};
