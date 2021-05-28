/*
 * @Author: Hale
 * @Description: fibonacci 函数的实现
 * @Date: 2019/01/09
 * @LastEditTime: 2019/10/17
 */

function* fibonacci() {
  let [perv, curr] = [0, 1];
  for (;;) {
    [perv, curr] = [curr, perv + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 1000) {
    break;
  }
  console.log(n);
}
