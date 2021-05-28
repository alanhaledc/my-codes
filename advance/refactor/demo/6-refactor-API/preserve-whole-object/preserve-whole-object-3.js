/*
 * @Author: Hale
 * @Description: Preserve Whole Object 保持对象完整 -> 换个方式创建新函数
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
    withinRange(tempRange) {
      const low = tempRange.low;
      const high = tempRange.high;
      const isWithinRange =
        bottom >= this._temperatureRange.low &&
        top <= this._temperatureRange.high;

      return isWithinRange;
    }
  }

  // call
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.withinRange(tempRange);
  if (!isWithinRange) alerts.push("room temperature went outside range");
}
