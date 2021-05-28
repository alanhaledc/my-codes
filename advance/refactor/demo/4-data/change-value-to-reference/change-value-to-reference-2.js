/*
 * @Author: Hale
 * @Description: Change Value to Reference 将值对象改为引用对象（与将引用对象改为值对象相反） -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = new Customer(data.customer);
      // load other data
    }
    get customer() {
      return this._customer;
    }
  }
  class Customer {
    constructor(id) {
      this._id = id;
    }
    get id() {
      return this._id;
    }
  }
}

{
  class Order {
    constructor(data) {
      this._number = data.number;
      this._customer = registerCustomer(data.customer);
      // load other data
    }
    get customer() {
      return this._customer;
    }
  }
  class Customer {
    constructor(id) {
      this._id = id;
    }
    get id() {
      return this._id;
    }
  }
}

let _repositoryData;

function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

function registerCustomer(id) {
  if (!_repositoryData.customers.has(id))
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}

function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
