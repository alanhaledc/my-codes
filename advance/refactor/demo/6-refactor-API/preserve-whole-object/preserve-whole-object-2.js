/*
 * @Author: Hale
 * @Description: Preserve Whole Object 保持对象完整 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class HeatingPlan {
    withinRange(bottom, top) {
      return (
        bottom >= this._temperatureRange.low &&
        top <= this._temperatureRange.high
      );
    }
  }

  // call
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high))
    alerts.push("room temperature went outside range");
}

{
  class HeatingPlan {
    withinRange(aNumberRange) {
      return (
        aNumberRange.bottom >= this._temperatureRange.low &&
        aNumberRange.top <= this._temperatureRange.high
      );
    }
  }

  // call
  if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("room temperature went outside range");
}
