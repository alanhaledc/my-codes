/*
 * @Author: Hale
 * @Description: 基础 Event Demo
 * @Date: 2020/05/15
 * @LastEditTime: 2020/06/10
 */

import { fromEvent } from "rxjs";
import { scan, throttleTime, map } from "rxjs/operators";

// 监听 click 事件
{
  document.addEventListener("click", () => console.log("Clicked!"));

  fromEvent(document, "click").subscribe(() => console.log("Clicked!"));
}

{
  let count = 0;
  document.addEventListener("click", () =>
    console.log(`Clicked ${++count} times`)
  );

  // purity
  fromEvent(document, "click")
    .pipe(scan((count) => count + 1, 0)) // scan 类似数组的 reduce
    .subscribe((count) => console.log(`Clicked ${count} times`));
}

{
  let count = 0;
  let rate = 1000;
  let lastClick = Date.now() - rate;
  document.addEventListener("click", () => {
    if (Date.now() - lastClick >= rate) {
      console.log(`Clicked ${++count} times`);
      lastClick = Date.now();
    }
  });

  // flow
  fromEvent(document, "click")
    .pipe(
      throttleTime(1000),
      scan((count) => count + 1, 0)
    )
    .subscribe((count) => console.log(`Clicked ${count} times`));
}

{
  let count = 0;
  const rate = 1000;
  let lastClick = Date.now() - rate;
  document.addEventListener("click", (event) => {
    if (Date.now() - lastClick >= rate) {
      count += event.clientX;
      console.log(count);
      lastClick = Date.now();
    }
  });

  // values
  fromEvent(document, "click")
    .pipe(
      throttleTime(1000),
      map((event) => event.clientX),
      scan((count, clientX) => count + clientX, 0)
    )
    .subscribe((count) => console.log(count));
}
