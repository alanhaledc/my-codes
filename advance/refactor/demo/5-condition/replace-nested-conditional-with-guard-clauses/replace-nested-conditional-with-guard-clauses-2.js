/*
 * @Author: Hale
 * @Description: Replace Nested Conditional with Guard Clauses 以卫语句取代嵌套条件表达式 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
      result = { amount: 0, reasonCode: "SEP" };
    } else {
      if (employee.isRetired) {
        result = { amount: 0, reasonCode: "RET" };
      } else {
        // logic to compute amount
        lorem.ipsum(dolor.sitAmet);
        consectetur(adipiscing).elit();
        sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
        ut.enim.ad(minim.veniam);
        result = someFinalComputation();
      }
    }
    return result;
  }
}

{
  function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
      result = { amount: 0, reasonCode: "SEP" };
    }
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" };
    }
    // logic to compute amount
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();
  }
}
