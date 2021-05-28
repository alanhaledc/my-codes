/*
 * @Author: Hale
 * @Description: Consolidate Conditional Expression 合并条件表达式 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2) return 0;
    if (anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
  }
}

{
  function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;

    function isNotEligibleForDisability() {
      return (
        anEmployee.seniority < 2 ||
        anEmployee.monthsDisabled > 12 ||
        anEmployee.isPartTime
      );
    }
  }
}
