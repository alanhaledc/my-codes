/*
 * @Author: Hale
 * @Description: Replace Query with Parameter 以参数取代查询（与查询取代参数相反）-> 简单示例 2
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  class HeatingPlan {
    get targetTemperature() {
      if (thermostat.selectedTemperature > this._max) return this._max;
      else if (thermostat.selectedTemperature < this._min) return this._min;
      else return thermostat.selectedTemperature;
    }
  }

  // call
  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature)
    setToCool();
  else setOff();
}

{
  class HeatingPlan {
    get targetTemperature() {
      return this.targetTemperature(thermostat.selectedTemperature);
    }

    targetTemperature(selectedTemperature) {
      if (selectedTemperature > this._max) return this._max;
      else if (selectedTemperature < this._min) return this._min;
      else return selectedTemperature;
    }
  }

  // call
  if (
    thePlan.targetTemperature(thermostat.selectedTemperature) >
    thermostat.currentTemperature
  )
    setToHeat();
  else if (
    thePlan.targetTemperature(thermostat.selectedTemperature) <
    thermostat.currentTemperature
  )
    setToCool();
  else setOff();
}
