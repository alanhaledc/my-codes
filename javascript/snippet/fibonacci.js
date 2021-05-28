/*
 * @Author: Hale
 * @Description: 斐波那契数列
 * // 斐波那契数列：这个数列从第3项开始，每一项都等于前两项之和。
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...]
 * @Date: 2019/03/11
 * @LastEditTime: 2019/10/18
 */

{
  // 递归法 n 比较大时，非常耗时 计算 2n-1 次 还会栈溢出
  const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
  };

  // test
  console.log(fib(10)); // 55
}

{
  // 迭代法
  const fib = (n) => {
    let f0 = 0,
      f1 = 1,
      currentFib;
    if (n === 0) return 0;
    if (n === 1) return 1;
    for (i = 1; i < n; i++) {
      currentFib = f0 + f1;
      f0 = f1;
      f1 = currentFib;
    }
    return currentFib;
  };

  // test
  console.log(fib(10)); // 55
}
{
  // 数组法
  const fib = (n) => {
    const list = [];
    list[0] = 0;
    list[1] = 1;
    for (let i = 1; i < n; i++) {
      list[i + 1] = list[i] + list[i - 1];
    }
    return list[n];
  };

  // test
  console.log(fib(10)); // 55
}

{
  // 解构赋值法
  const fib = (n) => {
    let a = 0,
      b = 1,
      i = 1;
    while (i++ <= n) {
      [a, b] = [b, a + b];
    }
    return a;
  };

  // test
  console.log(fib(10)); // 55
}

{
  // 尾递归
  const fib = (n, n1 = 1, n2 = 1) => {
    if (n <= 1) return n2;
    return fib(n - 1, n2, n1 + n2);
  };

  // test
  console.log(fib(10)); // 89 一般情况下无法实现
}

{
  // 公式法 四舍五入可能有误差
  const fib = (n) => {
    const SQRT_FIVE = Math.sqrt(5);
    return Math.round(
      (1 / SQRT_FIVE) *
        (Math.pow(0.5 + SQRT_FIVE / 2, n) - Math.pow(0.5 - SQRT_FIVE / 2, n))
    );
  };

  // test
  console.log(fib(10));
}

{
  // 缓存法
  const fib = () => {
    const cache = {
      0: 0,
      1: 1,
    };

    return function _fib(n) {
      return typeof cache[n] === "number"
        ? cache[n]
        : (cache[n] = _fib(n - 1) + _fib(n - 2));
    };
  };

  // test
  const f = fib();
  console.time("fib");
  console.log(f(50));
  console.timeEnd("fib");
}
