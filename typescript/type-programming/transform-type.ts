/*
 * @Author: Hale
 * @Description: transform type 转换类型
 * @Date: 2022/02/22
 * @LastEditTime: 2022/02/22
 */

export {};

// array/tuple
type Push<Arr extends unknown[], Ele> = [...Arr, Ele];

type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr];

type Zip<
  One extends [unknown, unknown],
  Other extends [unknown, unknown]
> = One extends [infer OneFirst, infer OneSecond]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : [];

// merge multiple tuple
type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
    : []
  : [];

// string
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : Str;

type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
    : Str;

type DropSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : Str;

// function
type AppendArgument<Func extends Function, Arg> = Func extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never;

// index
type Mapping<Obj extends object> = {
  [Key in keyof Obj]: Obj[Key]; // modify value [Obj[Key], Obj[Key], Obj[Key]]
};

type UppercaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
};

type Record<K extends string | number | symbol, T> = { [P in K]: T };

type ToReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type ToPartial<T> = {
  [Key in keyof T]?: T[Key];
};

type ToMutable<T> = {
  -readonly [Key in keyof T]: T[Key];
};

type ToRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [Key in keyof Obj as ValueType extends Obj[Key] ? Key : never]: Obj[Key];
};
