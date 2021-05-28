/*
 * @Author: Hale
 * @Description: Encapsulate Collection 封装集合 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  class Person {
    get courses() {
      return this._courses;
    }
    set courses(aList) {
      this._courses = aList;
    }
  }
}

{
  class Person {
    get courses() {
      return this._courses.slice();
    }
    addCourse(aCourse) {
      //...
    }
    removeCourse(aCourse) {
      //...
    }
  }
}
