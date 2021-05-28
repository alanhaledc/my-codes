/*
 * @Author: Hale
 * @Description: async 和 Promises 的一些区别
 * @Date: 2019/06/20
 * @LastEditTime : 2020/02/05
 */
const fetch = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

// async/await => 串行执行异步（阻塞）
(async () => {
  console.time("串行");
  await fetch(1);
  await fetch(2);
  await fetch(3);
  console.timeEnd("串行"); // 6000 ms+
})();

// promise.all => 并行执行异步（非阻塞）
(async () => {
  console.time("并行");
  await Promise.all([fetch(1), fetch(2), fetch(3)]);
  console.timeEnd("并行"); // 3000 ms+
})();
