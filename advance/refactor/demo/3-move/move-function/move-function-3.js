/*
 * @Author: Hale
 * @Description: Move Function 搬移函数 -> 在类之间搬移函数
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/06
 */

{
  class Account {
    get bankCharge() {
      let result = 4.5;
      if (this._daysOverdrawn > 0) {
        result += this.overdraftCharge;
      }
      return result;
    }
    get overdraftCharge() {
      if (this.type.isPremium) {
        const baseCharge = 10;
        if (this.daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (this.daysOverdrawn - 7) * 0.85;
        }
      } else {
        return this.daysOverdrawn * 1.75;
      }
    }
  }
}

{
  class Account {
    get overdraftCharge() {
      return this.type.overdraftCharge(this);
    }
    get bankCharge() {
      let result = 4.5;
      if (this._daysOverdrawn > 0) {
        result += this.overdraftCharge;
      }
      return result;
    }
    overdraftCharge(account) {
      if (this.isPremium) {
        const baseCharge = 10;
        if (account.daysOverdrawn <= 7) {
          return baseCharge;
        } else {
          return baseCharge + (account.daysOverdrawn - 7) * 0.85;
        }
      } else {
        return account.daysOverdrawn * 1.75;
      }
    }
  }
}
