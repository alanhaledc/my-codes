/*
 * @Author: Hale
 * @Description: Introduce Parameter Object 引入参数对象 -> 使用类创建对象
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

{
  function readingsOutsideRange(station, min, max) {
    return station.readings.filter((r) => r.temp < min || r.temp > max);
  }
  const alerts = readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  );
}

{
  class NumberRange {
    constructor(min, max) {
      this._data = { min: min, max: max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }
  }

  const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  );

  function readingsOutsideRange(station, range) {
    return station.readings.filter(
      (r) => r.temp < range.min || r.temp > range.max
    );
  }

  const alerts = readingsOutsideRange(station, range);
}

{
  class NumberRange {
    constructor(min, max) {
      this._data = { min: min, max: max };
    }
    get min() {
      return this._data.min;
    }
    get max() {
      return this._data.max;
    }

    contains(arg) {
      return arg >= this.min && arg <= this.max;
    }
  }

  const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  );

  function readingsOutsideRange(station, range) {
    return station.readings.filter((r) => !range.contains(t.temp));
  }

  const alerts = readingsOutsideRange(station, range);
}
