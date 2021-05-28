/*
 * @Author: Hale
 * @Description: 内置的基本工具函数
 * @Date: 2019/11/26
 * @LastEditTime: 2020/03/21
 */

export {};

interface User {
  readonly id: number;
  name: string;
  age?: number;
}

type PartialUser = Partial<User>; // Partial<T> -> T 变成可选

type ReadonlyUser = Readonly<User>; // Readonly<T> ->  T 变成只读

type RequiredUser = Required<User>; // Required<T> -> T 变成必选

type Color = "RED" | "GREEN" | "BLUE";

// Record<K,T> -> 约束 K T 属性
const set: Record<Color, string> = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
};

type PickUser = Pick<User, "id" | "age">; // Pick<T,K> -> 提取 T 指定的 K 属性

type OmitUser = Omit<User, "name">; // Omit<T,K> -> 剔除 T 指定的 K属性

// 下面两个剔除和提取主要用于联合类型
// Exclude<T,U> -> 从类型 T 中剔除所有可以赋值给 U 的属性 -> 类似补集
type ExcludeRet = Exclude<"1" | "2" | "3", "2" | "3" | "4">;

// Extract<T,U> -> 从类型 T 中提取所有可以赋值给 U 的类型 -> 类似交集
type ExtractRet = Extract<"1" | "2" | "3", "2" | "3" | "4">;

type T0 = NonNullable<string | number | undefined | null>; // NonNullable<T> -> 剔除 T 的 null 和 undefined
type T1 = ReturnType<() => string>; // ReturnType<T> -> 函数 T 的返回类型

class C {
  x = 0;
  y = 0;
}

type T2 = InstanceType<typeof C>; // InstanceType<T> -> 构造函数类型 T 的实例类型

{
  function toHex(this: Number) {
    return this.toString(16);
  }

  // ThisParameterType<T> -> 提取函数 T 的 this 类型的参数
  function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }

  // OmitThisParameter<T> -> 剔除函数 T 的 this 类型的参数
  const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
}

{
  // ThisType<T> -> 这个工具不会返回一个转换后的类型，它做为上下文的this类型的一个标记。
  // 注意，若想使用此类型，必须启用 --noImplicitThis。

  type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };

  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
  }

  let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx; // Strongly typed this
        this.y += dy; // Strongly typed this
      },
    },
  });

  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);
}
