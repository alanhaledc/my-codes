/*
 * @Author: Hale
 * @Description: Generator 是高级的 Iterator 对象
 * @Date: 2019/10/21
 * @LastEditTime: 2020/03/31
 */

{
  // Generator 是一个工厂，使用 next 调用
  function* generatorSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  const generator = generatorSequence(); // 生成 generator 对象

  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: true }
  console.log(generator.next()); // { value: undefined, done: true }
  // Generator 使用 next 操作无法回滚、回溯，除非再生成另外一个新的 Generator
}

{
  // Generator 对象是可迭代的
  function* generatorSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  const generator = generatorSequence(); // 生成 Generator

  for (let item of generator) {
    console.log(item); // 1 2 注意不会迭代 3
  }

  console.log(typeof generator); // object
  console.log(Object.prototype.toString.call(generator)); // [object Generator]
}

{
  // 使用扩展符把 Generator 对象展开
  function* generatorSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  const generator = generatorSequence(); // 生成 Generator

  console.log([...generator]); // [1, 2]
}

{
  // 使用 Generator 进行迭代
  function* generatorSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  let sequence = [...generatorSequence(1, 5)];
  console.log(sequence); // [1, 2, 3, 4, 5]
}

{
  // 使用 Symbol.iterator 转换普通对象为 generator 对象
  let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    },
  };

  console.log([...range]); // [1, 2, 3, 4, 5]
  console.log(Object.prototype.toString.call(range)); // [object Object] 本质还是普通对象
}

{
  // Generator 组合
  function* generatorSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  function* generatePasswordCodes() {
    // yield* generatorSequence(48, 57) // yield*
    for (let i = 48; i <= 57; i++) yield i;

    // yield* generatorSequence(65, 90)
    for (let i = 65; i <= 90; i++) yield i;

    // yield* generatorSequence(97, 122)
    for (let i = 97; i <= 122; i++) yield i;
  }
  let str = "";
  for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  console.log(str); // 0-9A-Za-z
}

{
  // yield 双向路径
  function* gen() {
    let ask1 = yield "2 + 2?"; // 2 + 2?
    console.log(ask1); // 4 next 输入 4 之后重置了 ask1 的值
    let ask2 = yield "3 * 3?";
    console.log(ask2); // 9 next 输入 9 之后重置了 ask2 的值
  }

  let generator = gen();
  console.log(generator.next().value); // 2 + 2?
  console.log(generator.next(4).value); // 3 * 3? before 传入值 -> 4
  console.log(generator.next(9).done); // true before 传入值 -> 9
}

{
  // 捕获错误
  function* gen() {
    let result = yield "2 + 2?"; // 假设这行出错
  }

  let generator = gen();
  let question = generator.next().value;
  try {
    generator.throw(new Error("error"));
  } catch (error) {
    console.log(error);
  }
}
