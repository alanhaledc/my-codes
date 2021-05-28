/*
 * @Author: Hale
 * @Description: Change Function Declaration 改变函数声明（函数重命名） -> 修改类，添加参数
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  class Book {
    addReservation(customer) {
      this._reservations.push(customer);
    }
  }
}

{
  class Book {
    addReservation(customer) {
      this.zz_addReservation(customer, false);
    }

    zz_addReservation(customer, isPriority) {
      assert(isPriority === true || isPriority === false);
      this._reservations.push(customer);
    }
  }
}
