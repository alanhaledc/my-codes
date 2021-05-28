/*
 * @Author: Hale
 * @Description: Replace Function with Command 以命令（函数对象）取代函数 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    // long body code
  }
}

{
  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }
    execute() {
      this._result = 0;
      this._healthLevel = 0;
      // long body code
    }
  }
}
