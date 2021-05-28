/*
 * @Author: Hale
 * @Description: Rename Field 字段改名 -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  const organization = { name: "Acme Gooseberries", country: "GB" };
}

{
  class Organization {
    constructor(data) {
      this._title = data.title !== undefined ? data.title : data.name;
      this._country = data.country;
    }
    get name() {
      return this._title;
    }
    set name(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({
    name: "Acme Gooseberries",
    country: "GB",
  });
}

{
  // final
  class Organization {
    constructor(data) {
      this._title = data.title;
      this._country = data.country;
    }
    get title() {
      return this._title;
    }
    set title(aString) {
      this._title = aString;
    }
    get country() {
      return this._country;
    }
    set country(aCountryCode) {
      this._country = aCountryCode;
    }
  }

  const organization = new Organization({
    title: "Acme Gooseberries",
    country: "GB",
  });
}
