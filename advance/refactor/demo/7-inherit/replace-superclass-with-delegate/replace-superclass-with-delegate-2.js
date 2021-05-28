/*
 * @Author: Hale
 * @Description: Replace Superclass with Delegate 以委托取代超类 -> 简单示例 2
 * @Date: 2020/03/08
 * @LastEditTime: 2020/03/08
 */

{
  class CatalogItem {
    constructor(id, title, tags) {
      this._id = id;
      this._title = title;
      this._tags = tags;
    }
    get id() {
      return this._id;
    }
    get title() {
      return this._title;
    }
    hasTag(arg) {
      return this._tags.includes(arg);
    }
  }

  class Scroll extends CatalogItem {
    constructor(id, title, tags, dateLastCleaned) {
      super(id, title, tags);
      this._lastCleaned = dateLastCleaned;
    }
    needsCleaning(targetDate) {
      const threshold = this.hasTag("revered") ? 700 : 1500;
      return this.daysSinceLastCleaning(targetDate) > threshold;
    }
    daysSinceLastCleaning(targetDate) {
      return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
  }

  // call
  const scrolls = aDocument.map(
    (record) =>
      new Scroll(
        record.id,
        record.catalogData.title,
        record.catalogData.tags,
        LocalDate.parse(record.lastCleaned)
      )
  );
}

{
  class CatalogItem {
    constructor(id, title, tags) {
      this._id = id;
      this._title = title;
      this._tags = tags;
    }
    get id() {
      return this._id;
    }
    get title() {
      return this._title;
    }
    hasTag(arg) {
      return this._tags.includes(arg);
    }
  }

  class Scroll {
    constructor(id, dateLastCleaned, catalogID, catalog) {
      this._id = id;
      this._catalogItem = catalog.get(catalogID);
      this._lastCleaned = dateLastCleaned;
    }
    get id() {
      return this.id;
    }
    get title() {
      return this._catalogItem.title;
    }
    hasTag(aString) {
      return this._catalogItem.hasTag(aString);
    }
    needsCleaning(targetDate) {
      const threshold = this.hasTag("revered") ? 700 : 1500;
      return this.daysSinceLastCleaning(targetDate) > threshold;
    }
    daysSinceLastCleaning(targetDate) {
      return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
  }

  // call
  const scrolls = aDocument.map(
    (record) =>
      new Scroll(
        record.id,
        LocalDate.parse(record.lastCleaned),
        record.catalogData.id,
        catalog
      )
  );
}
