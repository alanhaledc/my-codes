/*
 * @Author: Hale
 * @Description: Encapsulate Record 封装记录 -> 简单示例 2
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

const customerData = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63,
        // remaining months of the year
      },
    },
  },
  // ... more custom
};

{
  // update
  customerData[customerID].usages[year][month] = amount;
  // read
  function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
  }
}

{
  class CustomerData {
    constructor(data) {
      this._data = data;
    }

    get rawData() {
      return _.cloneDeep(this._data);
    }

    // read
    usage(customerID, year, month) {
      return this._data[customerID].usages[year][month];
    }
    // update
    setUsage(customerID, year, month, amount) {
      this._data[customerID].usages[year][month] = amount;
    }
  }

  function getCustomerData() {
    return customerData;
  }

  function getRawDataOfCustomers() {
    return customerData.rawData;
  }

  function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
  }

  getCustomerData().setUsage(customerID, year, month, amount);

  function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return { laterAmount: later, change: later - earlier };
  }
}
