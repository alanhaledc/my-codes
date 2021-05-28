/*
 * @Author: Hale
 * @Description: type 类型别名
 * @Date: 2019/02/11
 * @LastEditTime: 2020/02/23
 */

export {};

// type 适合定义一些基本的类型； interface 适合定义对象类型
type Name = string;
type Age = number;

interface Dog {
  name: string;
  Wong: () => {};
}

interface Cat {
  name: string;
  Miao: () => {};
}

// 联合类型；Type 可以把 2 个接口联合起来（满足类型之一）
type Pet = Dog | Cat;

// 交叉类型；Type 可以把 2 个接口合并起来（满足全部类型）
type Animal = Dog & Cat;

// 元组；type 可以定义元组
type PetList = [Dog, Cat];

// type 可以通过 typeof 获取类型赋值
const div = document.createElement("div");
type Div = typeof div;

// type 可以定义泛型， interface 也可以
type Callback<T> = (data: T) => void;
type Pair<T> = [T, T];
type Coordinate = Pair<number>;
type Tree<T> = T | { left: Tree<T>; right: Tree<T> };
