// 已知如下数组：
// `var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];`
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组。

{
  // 思路: 扁平化 -> 排序 -> 去重
  const removeRepeat = (arr) => {
    // return Array.from(new Set(arr.flat(Infinity).sort((a, b) => a - b)))
    return [...new Set(arr.flat(Infinity).sort((a, b) => a - b))];
  };

  // test
  const arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
    10,
  ];

  const ret = removeRepeat(arr);
  console.log(ret);
}
