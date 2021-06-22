/*
 * @Author: Hale
 * @Description: 工具类型
 * @Date: 2019/11/26
 * @LastEditTime: 2021/06/22
 */

export {};

// Primitive
type Primitive = string | number | bigint | boolean | null | symbol | undefined;

declare const isPrimitive: (val: unknown) => val is Primitive;

// Falsy
type Falsy = false | "" | 0 | null | undefined;

declare const isFalsy: (val: unknown) => val is Falsy;

// Intersection<T,U>
type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;

type Props = {
  name: string;
  age: number;
  visible: boolean;
};

type DefaultProps = {
  name: string;
};

type DuplicateProps = Intersection<Props, DefaultProps>;

// isSubTyping<C,P>
type isSubTyping<Child, Parent> = Child extends Parent ? true : false;

type IsNumberSubTyping = isSubTyping<1, number>;

// StringOrNumberArray<E>
type StringOrNumberArray<E> = [E] extends [string | number] ? E[] : E;

type IsStringOrNumberArray = StringOrNumberArray<string | number>;
type IsStringOrBoolean = StringOrNumberArray<string | boolean>;
type IsStringOrNever = StringOrNumberArray<string | never>;

// Merge<A, B>
type Merge<A, B> = {
  [key in keyof A | keyof B]: key extends keyof A
    ? key extends keyof B
      ? A[key] | B[key]
      : A[key]
    : key extends keyof B
    ? B[key]
    : never;
};

type Merged = Merge<{ id: number; name: string }, { id: string; age: number }>;

// ReturnTypeOfResolved<F>
type ReturnTypeOfResolved<F extends (...args: any) => any> = F extends (
  ...args: any[]
) => Promise<infer R>
  ? R
  : ReturnType<F>;

type IsNumber = ReturnType<() => number>;
type IsNumberPromise = ReturnType<() => Promise<number>>;

// Equal<S, T>
type EqualV1<S, T> = S extends T ? (T extends S ? true : false) : false;
type ExampleV11 = EqualV1<1 | (number & {}), number>; // true but boolean
type ExampleV12 = EqualV1<never, never>; // true but never

type EqualV2<S, T> = [S] extends [T] ? ([T] extends [S] ? true : false) : false;
type ExampleV21 = EqualV2<1 | (number & {}), number>; // true
type ExampleV22 = EqualV2<never, never>; // true
type ExampleV23 = EqualV2<any, number>; // false but true

type IsAny<T> = 0 extends 1 & T ? true : false;
type EqualV3<S, T> = IsAny<S> extends true
  ? IsAny<T> extends true
    ? true
    : false
  : IsAny<T> extends true
  ? false
  : [S] extends [T]
  ? [T] extends [S]
    ? true
    : false
  : false;

type ExampleV31 = EqualV3<1 | (number & {}), number>; // true but false got
type ExampleV32 = EqualV3<never, never>; // true
type ExampleV34 = EqualV3<any, any>; // true
type ExampleV33 = EqualV3<any, number>; // false
type ExampleV35 = EqualV3<never, any>; // false
