/*
 * @Author: Hale
 * @Description: Split Variable 分解变量（临时变量） -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  function distanceTravelled(scenario, time) {
    let result;
    let acc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * acc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
      let primaryVelocity = acc * scenario.delay;
      acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
      result +=
        primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * second;
      aryTime;
    }
    return result;
  }
}

{
  // split acc variable
  function distanceTravelled(scenario, time) {
    let result;
    let primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
      let primaryVelocity = primaryAcceleration * scenario.delay;
      const secondaryAcceleration =
        (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
      result +=
        primaryVelocity * secondaryTime +
        0.5 * secondaryAcceleration * secondaryTime * second;
      aryTime;
    }
    return result;
  }
}
