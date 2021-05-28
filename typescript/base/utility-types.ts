/*
 * @Author: Hale
 * @Description: 工具类型
 * @Date: 2019/11/26
 * @LastEditTime: 2020/03/21
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
