/*
 * @Author: Hale
 * @Description: Replace Superclass with Delegate 以委托取代超类 -> 简单示例
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class List {
    //...
  }
  class Stack extends List {
    //...
  }
}

{
  class Stack {
    constructor() {
      this._storage = new List();
    }
  }
  class List {
    //...
  }
}
