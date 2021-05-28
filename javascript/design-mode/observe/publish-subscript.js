/*
 * @Author: Hale
 * @Description: 发布订阅模式 -> 通过 Dep 通知观察者
 * @Date: 2019/10/16
 * @LastEditTime : 2020/02/05
 */

class Subject {
  constructor(dep) {
    this.value = 0;
    this.dep = dep;
  }

  getValue() {
    return this.value;
  }

  setValue(newVal) {
    this.value = newVal;
    this.dep.notify();
  }
}

class Dep {
  constructor() {
    this.deps = [];
  }

  add(dep) {
    this.deps.push(dep);
  }

  notify() {
    this.deps.forEach((watch) => watch.update());
  }
}

class Watcher {
  constructor(name, dep) {
    this.name = name;
    this.dep = dep;
    this.dep.add(this);
  }

  update() {
    console.log(this.name + " update");
  }
}

const dep = new Dep();
const sub = new Subject(dep);
const w1 = new Watcher("w1", dep);
const w2 = new Watcher("w2", dep);
const w3 = new Watcher("w3", dep);
sub.setValue(2);
