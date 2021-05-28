/*
 * @Author: Hale
 * @Description: Replace Function with Command 以命令（函数对象）取代函数 -> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
    if (medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
      certificationGrade = "low";
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

{
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer().execute(candidate, medicalExam, scoringGuide);
  }

  class Scorer {
    execute(candidate, medicalExam, scoringGuide) {
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;
      if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
      }
      // lots more code like this
      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
}

{
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
  }

  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }
    execute() {
      let result = 0;
      let healthLevel = 0;
      let highMedicalRiskFlag = false;
      if (this._medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
      }
      let certificationGrade = "regular";
      if (
        this._scoringGuide.stateWithLowCertification(
          this._candidate.originState
        )
      ) {
        certificationGrade = "low";
        result -= 5;
      }
      // lots more code like this
      result -= Math.max(healthLevel - 5, 0);
      return result;
    }
  }
}

{
  function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
  }

  class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
      this._candidate = candidate;
      this._medicalExam = medicalExam;
      this._scoringGuide = scoringGuide;
    }

    execute() {
      this._result = 0; // replace variable with field
      this._healthLevel = 0;
      this._highMedicalRiskFlag = false;

      this.scoreSmoking();
      this._certificationGrade = "regular";
      if (
        this._scoringGuide.stateWithLowCertification(
          this._candidate.originState
        )
      ) {
        this._certificationGrade = "low";
        this._result -= 5;
      }
      // lots more code like this
      this._result -= Math.max(healthLevel - 5, 0);
      return this._result;
    }

    scoreSmoking() {
      if (this._medicalExam.isSmoker) {
        this._healthLevel += 10;
        this._highMedicalRiskFlag = true;
      }
    }
  }
}
