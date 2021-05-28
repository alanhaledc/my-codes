/*
 * @Author: Hale
 * @Description: Replace Subclasses with Delegate 以委托取代子类 -> 取代继承体系
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  function createBird(data) {
    switch (data.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallow(data);
      case "AfricanSwallow":
        return new AfricanSwallow(data);
      case "NorweigianBlueParrot":
        return new NorwegianBlueParrot(data);
      default:
        return new Bird(data);
    }
  }
  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._plumage || "average";
    }
    get airSpeedVelocity() {
      return null;
    }
  }
  class EuropeanSwallow extends Bird {
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallow extends Bird {
    constructor(data) {
      super(data);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }
  class NorwegianBlueParrot extends Bird {
    constructor(data) {
      super(data);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get plumage() {
      if (this._voltage > 100) return "scorched";
      else return this._plumage || "beautiful";
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
  }
}

{
  function createBird(data) {
    return new Bird(data);
  }
  class Bird {
    constructor(data) {
      this._name = data.name;
      this._plumage = data.plumage;
      this._speciesDelegate = this.selectSpeciesDelegate(data);
    }
    get name() {
      return this._name;
    }
    get plumage() {
      return this._speciesDelegate.plumage;
    }
    get airSpeedVelocity() {
      return this._speciesDelegate.airSpeedVelocity;
    }
    selectSpeciesDelegate(data) {
      switch (data.type) {
        case "EuropeanSwallow":
          return new EuropeanSwallowDelegate();
        case "AfricanSwallow":
          return new AfricanSwallowDelegate(data);
        case "NorwegianBlueParrot":
          return new NorwegianBlueParrotDelegate(data, this);
        default:
          return new SpeciesDelegate(data, this);
      }
    }
  }

  class SpeciesDelegate {
    constructor(data, bird) {
      this._bird = bird;
    }
    get airSpeedVelocity() {
      return null;
    }
    get plumage() {
      return this._bird._plumage || "average";
    }
  }

  class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() {
      return 35;
    }
  }
  class AfricanSwallowDelegate extends SpeciesDelegate {
    constructor(data, bird) {
      super(data, bird);
      this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
      return 40 - 2 * this._numberOfCoconuts;
    }
  }
  class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor(data, bird) {
      super(data, bird);
      this._voltage = data.voltage;
      this._isNailed = data.isNailed;
    }
    get airSpeedVelocity() {
      return this._isNailed ? 0 : 10 + this._voltage / 10;
    }
    get plumage() {
      return this._voltage > 100 ? "scorched" : this._plumage || "beautiful";
    }
  }
}
