/*
 * @Author: Hale
 * @Description: Replace Query with Parameter 以参数取代查询（与查询取代参数相反）-> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  targetTemperature(aPlan);
  function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
    // rest of function...
  }
}

{
  targetTemperature(aPlan, thermostat.currentTemperature);
  function targetTemperature(aPlan, currentTemperature) {
    // rest of function...
  }
}
