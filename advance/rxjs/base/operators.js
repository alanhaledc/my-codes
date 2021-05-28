/*
 * @Author: Hale
 * @Description: operator 操作符
 * @Date: 2020/01/21
 * @LastEditTime : 2020/01/21
 */

const { of } = require("rxjs");
const { map, first, scan } = require("rxjs/operators");

{
  const observable = of(1, 2, 3);
  map((x) => x * x)(observable).subscribe((v) => console.log(`value: ${v}`));
}

{
  first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
}

{
  const observable = of(1, 2, 3);
  observable
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));
}

{
  const observable = of(1, 2, 3);
  observable
    .pipe(
      first(),
      map((x) => x + 3),
      scan((acc, val) => acc + val, 5)
    )
    .subscribe((v) => console.log(`value: ${v}`));
}
