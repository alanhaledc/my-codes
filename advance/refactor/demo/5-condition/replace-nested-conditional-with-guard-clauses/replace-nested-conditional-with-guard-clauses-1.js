/*
 * @Author: Hale
 * @Description: Replace Nested Conditional with Guard Clauses 以卫语句取代嵌套条件表达式 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function getPayAmount() {
    let result;
    if (isDead) result = deadAmount();
    else {
      if (isSeparated) result = separatedAmount();
      else {
        if (isRetired) result = retiredAmount();
        else result = normalPayAmount();
      }
    }
    return result;
  }
}

{
  function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeparated) return separatedAmount();
    if (isRetired) return retiredAmount();
    return normalPayAmount();
  }
}
