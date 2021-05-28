/*
 * @Author: Hale
 * @Description: Replace Conditional with Polymorphism 以多态取代条件表达式 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  function fn(bird) {
    switch (bird.type) {
      case "EuropeanSwallow":
        return "average";
      case "AfricanSwallow":
        return bird.numberOfCoconuts > 2 ? "tired" : "average";
      case "NorwegianBlueParrot":
        return bird.voltage > 100 ? "scorched" : "beautiful";
      default:
        return "unknown";
    }
  }
}

{
  class EuropeanSwallow {
    get plumage() {
      return "average";
    }
  }
  class AfricanSwallow {
    get plumage() {
      return this.numberOfCoconuts > 2 ? "tired" : "average";
    }
  }
  class NorwegianBlueParrot {
    get plumage() {
      return this.voltage > 100 ? "scorched" : "beautiful";
    }
  }
}
