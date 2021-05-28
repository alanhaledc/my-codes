/*
 * @Author: Hale
 * @Description: Encapsulate Record 封装记录 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  const organization = { name: "Acme Gooseberries", country: "GB" };
}

{
  class Organization {
    constructor(data) {
      this._name = data.name;
      this._country = data.country;
    }
    get name() {
      return this._name;
    }
    set name(arg) {
      this._name = arg;
    }
    get country() {
      return this._country;
    }
    set country(arg) {
      this._country = arg;
    }
  }

  const organization = new Organization({
    name: "Acme Gooseberries",
    country: "GB",
  });

  function getRawDataOfOrganization() {
    return organization._data;
  }

  function getOrganization() {
    return organization;
  }
}
