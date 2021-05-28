/*
 * @Author: Hale
 * @Description: 观察者模式 -> 把观察者放入到主体中，然后在变化时通知观察者
 * @Date: 2019/10/16
 * @LastEditTime : 2020/02/05
 */

class Subject {
  constructor() {
    this.value = 0;
    this.observers = [];
  }

  getValue() {
    return this.value;
  }

  setValue(newVal) {
    this.value = newVal;
    this.notifyAll();
  }

  notifyAll() {
    this.observers.forEach((ob) => ob.update());
  }

  add(ob) {
    this.observers.push(ob);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.add(this);
  }

  update() {
    console.log(this.name + " update");
  }
}

const sub = new Subject();
const ob1 = new Observer("ob1", sub);
const ob2 = new Observer("ob2", sub);
const ob3 = new Observer("ob3", sub);
sub.setValue(1);
