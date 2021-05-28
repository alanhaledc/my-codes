/*
 * @Author: Hale
 * @Description: Introduce Assertion 引入断言 -> 简单示例
 * @Date: 2020/03/07
 * @LastEditTime: 2020/03/07
 */

{
  if (this.discountRate) {
    base = base - this.discountRate * base;
  }
}

{
  assert(this.discountRate >= 0); // assertion
  if (this.discountRate) {
    base = base - this.discountRate * base;
  }
}
