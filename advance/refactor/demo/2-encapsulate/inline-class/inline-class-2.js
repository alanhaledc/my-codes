/*
 * @Author: Hale
 * @Description: Inline Class 内联类（和提炼类相反） -> 简单示例 2
 * @Date: 2020/03/05
 * @LastEditTime: 2020/03/05
 */

{
  class TrackingInformation {
    get shippingCompany() {
      return this._shippingCompany;
    }
    set shippingCompany(arg) {
      this._shippingCompany = arg;
    }
    get trackingNumber() {
      return this._trackingNumber;
    }
    set trackingNumber(arg) {
      this._trackingNumber = arg;
    }
    get display() {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
  }

  class Shipment {
    get trackingInfo() {
      return this._trackingInformation.display;
    }
    get trackingInformation() {
      return this._trackingInformation;
    }
    set trackingInformation(aTrackingInformation) {
      this._trackingInformation = aTrackingInformation;
    }
  }

  aShipment.trackingInformation.shippingCompany = request.vendor;
}

{
  class Shipment {
    get trackingInfo() {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
    get shippingCompany() {
      return this._shippingCompany;
    }
    set shippingCompany(arg) {
      this._shippingCompany = arg;
    }
    get trackingNumber() {
      return this._trackingNumber;
    }
    set trackingNumber(arg) {
      this._trackingNumber = arg;
    }
  }

  aShipment.shippingCompany = request.vendor;
}
