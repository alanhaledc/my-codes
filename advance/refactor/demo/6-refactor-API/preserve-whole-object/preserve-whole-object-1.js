/*
 * @Author: Hale
 * @Description: Preserve Whole Object 保持对象完整 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (aPlan.withinRange(low, high)) {
    // ...
  }
}

{
  if (aPlan.withinRange(aRoom.daysTempRange)) {
    // ...
  }
}
