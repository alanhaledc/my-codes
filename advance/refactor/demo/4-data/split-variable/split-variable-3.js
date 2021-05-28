/*
 * @Author: Hale
 * @Description: Split Variable 分解变量（临时变量） -> 对输入参数赋值
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  function discount(inputValue, quantity) {
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return inputValue;
  }
}

{
  function discount(originalInputValue, quantity) {
    let inputValue = originalInputValue;
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return inputValue;
  }
}

{
  function discount(inputValue, quantity) {
    let result = inputValue;
    if (inputValue > 50) inputValue = inputValue - 2;
    if (quantity > 100) inputValue = inputValue - 1;
    return result;
  }
}
