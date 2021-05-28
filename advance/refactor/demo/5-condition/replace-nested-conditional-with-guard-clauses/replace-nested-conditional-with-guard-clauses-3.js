/*
 * @Author: Hale
 * @Description: Replace Nested Conditional with Guard Clauses 以卫语句取代嵌套条件表达式 -> 将条件反转
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital > 0) {
      if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
        result =
          (anInstrument.income / anInstrument.duration) *
          anInstrument.adjustmentFactor;
      }
    }
    return result;
  }
}

{
  function adjustedCapital(anInstrument) {
    let result = 0;
    if (anInstrument.capital <= 0) return result;
    if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0)
      return result;
    result =
      (anInstrument.income / anInstrument.duration) *
      anInstrument.adjustmentFactor;

    return result;
  }
}

{
  function adjustedCapital(anInstrument) {
    if (
      anInstrument.capital <= 0 ||
      anInstrument.interestRate <= 0 ||
      anInstrument.duration <= 0
    )
      return (result = 0);
    return (
      (anInstrument.income / anInstrument.duration) *
      anInstrument.adjustmentFactor
    );
  }
}
