/*
 * @Author: Hale
 * @Description: Async function with forEach Map reduce
 * @Date: 2020/04/20
 * @LastEditTime: 2020/04/20
 */

const sleep = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

{
  const arr = [1, 2, 3];
  arr.forEach((i) => {
    console.log(i); // 1 2 3
  });
  console.log("finished sync");
}

{
  const arr = [1, 2, 3];
  arr.forEach(async (i) => {
    await sleep(10 - i);
    console.log(i); // 3 2 1
  });
  console.log("finished async");
}

{
  const test = async () => {
    const arr = [1, 2, 3];
    await Promise.all(
      arr.map(async (i) => {
        await sleep(10 - i);
        console.log(i); // 3 2 1
      })
    );
    console.log("finished async");
  };
  test();
}

{
  const test = async () => {
    const arr = [1, 2, 3];
    await arr.reduce(async (memo, i) => {
      await memo;
      await sleep(10 - i);
      console.log(i); // 1 2 3
    }, undefined);
    console.log("finished async");
  };
  test();
}
