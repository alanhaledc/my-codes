/*
 * @Author: Hale
 * @Description: Combine Functions into Transform 函数组合成变换 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function base(aReading) {
    //...
  }
  function taxableCharge(aReading) {
    //...
  }
}

{
  function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading); // _ -> lodash
    aReading.baseCharge = base(aReading);
    aReading.taxableCharge = taxableCharge(aReading);
    return aReading;
  }
}
