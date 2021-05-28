/*
 * @Author: Hale
 * @Description: Decompose Conditional 分解条件表达式 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

{
  // if (summer()) {
  //   charge = summerCharge()
  // } else {
  //   charge = regularCharge()
  // }

  charge = summer() ? summerCharge() : regularCharge();

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
