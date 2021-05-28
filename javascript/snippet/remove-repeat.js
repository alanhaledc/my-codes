/*
 * @Author: Hale
 * @Description: remove repeat 去重
 * @Date: 2019/01/09
 * @LastEditTime: 2020/05/31
 */
{
  // 利用对象 key 值的唯一性去重
  function removeRepeat(array) {
    let len = array.length;
    let ret = [];
    let obj = {};

    for (let i = 0; i < len; i++) {
      if (!obj[array[i]]) {
        ret.push(array[i]);
        obj[array[i]] = 1;
      }
    }

    return ret;
  }

  // test
  console.log(removeRepeat([1, 2, 2, 3, 3, 4]));
}

{
  // 利用 set key 值的唯一性
  const removeRepeat = (array) => Array.from(new Set(array)); // API

  const noRepeatArray = (array) => [...new Set(array)]; // 解构

  // test
  console.log(removeRepeat([1, 2, 2, 3, 3, 4]));
  console.log(noRepeatArray([1, 2, 2, 3, 3, 4]));
}

{
  // 利用 filter 和 indexOf 去重
  const removeRepeat = (array) =>
    array.filter((item, index) => array.indexOf(item) === index);

  // test
  console.log(removeRepeat([1, 2, 2, 3, 3, 4]));
}

{
  // 利用 reduce 和 includes 去重
  const removeRepeat = (array) =>
    // array.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), [])
    array.reduce(
      (acc, item) => (acc.includes(item) ? acc : acc.concat(item)),
      []
    );

  // test
  console.log(removeRepeat([1, 2, 2, 3, 3, 4]));
}
